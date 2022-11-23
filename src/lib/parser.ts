import { DomainResolver } from './domainResolvers';
import { JunctionError, Result } from './types';
import { blake2sHex } from 'blakejs';

export const getJunctionParts = (junction: string): string[] =>
  junction
    .split('&')
    .map((part) => part.trim())
    .filter((p) => p)
    .sort((a, b) => {
      if (a < b) return -1;
      if (b < a) return 1;
      return 0;
    });

export const getJunctionSubdomain = (
  junction: string,
  verbose = false
): string => {
  const hash = blake2sHex(getJunctionParts(junction).join('&')).slice(0, 16);
  if (verbose) {
    console.log(
      `\nSubdomain (short hash) of junction "${getJunctionParts(junction).join(
        ' & '
      )}" is ${hash}\n`
    );
  }
  return hash;
};

export interface DomainResolverMap {
  domain: string;
  resolver: DomainResolver;
}

// export const domainsNotResolvables = (
//   map: PartialBy<DomainResolverMap, 'resolver'>[]
// ) => {
//   return map.filter((m) => !m.resolver);
// };

export function parse(
  resolvers: DomainResolver[],
  junction: string,
  verbose = false
): Result<DomainResolverMap[], JunctionError> {
  const junctionParts = getJunctionParts(junction);
  if (junctionParts.length < 2) {
    return {
      ok: false,
      error: {
        code: 'JUNCTION_MALFORMED',
        message: 'Junction is malformed',
      },
    };
  }

  const domainsWithoutTLD = junctionParts.filter(
    (part) => !/.+\..+/.test(part)
  );
  if (domainsWithoutTLD.length > 0) {
    return {
      ok: false,
      error: {
        code: 'JUNCTION_MISSING_TLD',
        message: `Following domain(s) don't have a TLD: ${domainsWithoutTLD.join(
          ', '
        )}`,
      },
    };
  }

  const hash = getJunctionSubdomain(junction, verbose);
  const domainResolverMap = junctionParts.map((part) => {
    const resolver = resolvers.find((r) => r.canResolve(part));
    return {
      domain: `${hash}.${part}`,
      zone: part,
      resolver,
    };
  });

  const domainsNotResolvables = domainResolverMap
    .filter((m) => !m.resolver)
    .map((m) => m.zone);

  if (domainsNotResolvables.length > 0) {
    return {
      ok: false,
      error: {
        code: 'RESOLVER_NOT_FOUND',
        message: `Resolvers not found for domain(s): ${domainsNotResolvables.join(
          ', '
        )}`,
      },
    };
  }

  return {
    ok: true,
    result: domainResolverMap as DomainResolverMap[],
  };
}
