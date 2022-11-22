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
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export const allDomainAreResolvable = (
  map: PartialBy<DomainResolverMap, 'resolver'>[]
): map is DomainResolverMap[] => {
  return map.every((m) => m.resolver);
};

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
      resolver,
    };
  });

  if (!allDomainAreResolvable(domainResolverMap)) {
    return {
      ok: false,
      error: {
        code: 'RESOLVER_NOT_FOUND',
        message: 'Resolver not found',
      },
    };
  }

  return {
    ok: true,
    result: domainResolverMap,
  };
}
