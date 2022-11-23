import { Err, JunctionError, JunctionRecords, Ok, Result } from './types';
import { parse, DomainResolverMap, getJunctionVisualName } from './parser';
import { DomainResolver } from './domainResolvers';
import isEqual from 'lodash.isequal';

export async function resolveDomain(
  resolver: DomainResolver,
  domain: string,
  verbose: boolean = false
): Promise<Result<JunctionRecords, JunctionError>> {
  const r = await resolver.resolve(domain);
  if (!r.ok) {
    if (verbose) {
      console.log(`${domain} -> Error: ${r.error.message}`);
    }
    return {
      ok: false,
      error: r.error,
    };
  }
  if (verbose) {
    console.log(
      `${getJunctionVisualName(domain)} -> A: ${
        r.result[0].data
      }, TXT: ${r.result[1].data.slice(0, 16)}`
    );
  }
  return {
    ok: true,
    result: r.result,
  };
}

const containsErrors = (
  results: Result<JunctionRecords, JunctionError>[]
): results is Err<JunctionError>[] => {
  return results.filter((r) => !r.ok).length > 0;
};

export async function resolveDomains(
  map: DomainResolverMap[],
  verbose: boolean = false
): Promise<Result<JunctionRecords[], JunctionError>> {
  const results = await Promise.all(
    map.map((m) => resolveDomain(m.resolver, m.domain, verbose))
  );
  const errors = results.filter((r) => !r.ok);

  if (verbose) {
    console.log(
      `\n\x1b[32mResolution successful !\x1b[0m Resolved domains: ${
        results.length - errors.length
      }/${results.length}`
    );
  }

  if (containsErrors(results)) {
    if (verbose) {
    }
    return {
      ok: false,
      error: (errors as Err<JunctionError>[])[0].error,
    };
  }
  return {
    ok: true,
    result: results.map((r) => (r as Ok<JunctionRecords>).result),
  };
}

export function validateResolvedDomains(
  domains: JunctionRecords[]
): Result<undefined, JunctionError> {
  return {
    ok: true,
    result: undefined,
  };
}

export function reconcileRecords(junctionRecords: JunctionRecords[]) {
  return junctionRecords
    .map((records) =>
      records.map((r) => ({
        type: r.type,
        data: r.data,
      }))
    )
    .filter(
      (r) =>
        !isEqual(
          r,
          junctionRecords[0].map((r) => ({
            type: r.type,
            data: r.data,
          }))
        )
    );
}

export async function resolveJunction(
  resolvers: DomainResolver[],
  junction: string,
  verbose: boolean = false
): Promise<Result<JunctionRecords, JunctionError>> {
  if (verbose) {
    console.log(`Resolving junction \x1b[36m${junction}\x1b[0m \n`);
  }

  const domainResolverMap = parse(resolvers, junction);

  if (!domainResolverMap.ok) {
    return {
      ok: false,
      error: domainResolverMap.error,
    };
  }

  const resolvedDomains = await resolveDomains(
    domainResolverMap.result,
    verbose
  );

  if (!resolvedDomains.ok) {
    return {
      ok: false,
      error: resolvedDomains.error,
    };
  }

  const differentsRecords = reconcileRecords(resolvedDomains.result);

  if (differentsRecords.length > 0) {
    return {
      ok: false,
      error: {
        code: 'RECORDS_MISMATCH',
        message: 'Junction records are different',
      },
    };
  }

  return {
    ok: true,
    result: [
      {
        type: 'A',
        name: junction,
        data: resolvedDomains.result[0][0].data,
      },
      { type: 'TXT', name: junction, data: resolvedDomains.result[0][1].data },
    ],
  };
}
