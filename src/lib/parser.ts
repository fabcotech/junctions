import { DomainResolver } from './domainResolvers';
import { JunctionError, Result } from './types';

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
  const junctionParts = junction
    .split('&')
    .map((part) => part.trim())
    .filter((p) => p);

  if (junctionParts.length < 2) {
    return {
      ok: false,
      error: {
        code: 'JUNCTION_MALFORMED',
        message: 'Junction is malformed',
      },
    };
  }

  const areAllTLDsDomains = junctionParts.every((part) => /.+\..+/.test(part));
  if (!areAllTLDsDomains) {
    return {
      ok: false,
      error: {
        code: 'JUNCTION_MISSING_TLD',
        message: 'Junction contains domain(s) without TLD',
      },
    };
  }

  const domainResolverMap = junctionParts.map((part) => {
    const resolver = resolvers.find((r) => r.canResolve(part));
    return {
      domain: part,
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
