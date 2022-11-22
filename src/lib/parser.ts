import { DomainResolver } from './domainResolvers';
import { JunctionError, Result } from './types';

export const JUNCTION_SUB_DOMAIN = 'xn--7o8h';
export const JUNCTION_OPERATOR = 'xn--dp8h';

export const getJunctionParts = (junction: string): string[] =>
  junction
    .split('&')
    .map((part) => part.trim())
    .filter((p) => p);

export const getJunctionSubdomain = (junction: string): string =>
  getJunctionParts(junction)
    .map((p) => p.replace('.', JUNCTION_SUB_DOMAIN))
    .join(JUNCTION_OPERATOR);

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
  junction: string
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

  const domainResolverMap = junctionParts.map((part) => {
    const resolver = resolvers.find((r) => r.canResolve(part));
    return {
      domain: `${getJunctionSubdomain(junction)}.${part}`,
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
