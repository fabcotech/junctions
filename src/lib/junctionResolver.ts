import { Err, JunctionError, JunctionRecords, Ok, Result } from './types';
import { parse, DomainResolverMap } from './parser';
import { DomainResolver } from './domainResolvers';
import isEqual from 'lodash.isequal';

export async function resolveDomain(
  resolver: DomainResolver,
  domain: string
): Promise<Result<JunctionRecords, JunctionError>> {
  try {
    return {
      ok: true,
      result: await resolver.resolve(domain),
    };
  } catch (err) {
    if (err instanceof Error) {
      return {
        ok: false,
        error: {
          code: 'RESOLVER_ERROR',
          message: `Failed to resolve ${domain}: ${err.message}`,
        },
      };
    }
  }
  return {
    ok: false,
    error: {
      code: 'RESOLVER_ERROR',
      message: `Failed to resolve ${domain}`,
    },
  };
}

const containsErrors = (
  results: Result<JunctionRecords, JunctionError>[]
): results is Err<JunctionError>[] => {
  return results.filter((r) => !r.ok).length > 0;
};

export async function resolveDomains(
  map: DomainResolverMap[]
): Promise<Result<JunctionRecords[], JunctionError>> {
  const results = await Promise.all(
    map.map((m) => resolveDomain(m.resolver, m.domain))
  );
  const errors = results.filter((r) => !r.ok);
  if (containsErrors(results)) {
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
  junction: string
): Promise<Result<JunctionRecords, JunctionError>> {
  const domainResolverMap = parse(resolvers, junction);

  if (!domainResolverMap.ok) {
    return {
      ok: false,
      error: domainResolverMap.error,
    };
  }

  const resolvedDomains = await resolveDomains(domainResolverMap.result);

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
