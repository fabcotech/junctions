import { JunctionResponse, JunctionError, JunctionRecords } from './types';
import { parse } from './parser';
import { DomainResolver } from './domainResolvers';

export interface DomainResolverMap {
  junction: string;
  resolver: DomainResolver;
}

export function validateDomainWithResolvers(
  map: DomainResolverMap[]
): JunctionError | undefined {
  return undefined;
}

export function resolveDomains(
  map: DomainResolverMap[]
): Promise<JunctionRecords[]> {
  return Promise.all(map.map((m) => m.resolver.resolve(m.junction)));
}

export function validateResolvedDomains(
  domains: JunctionRecords[]
): JunctionError | undefined {
  return undefined;
}

export async function resolveJunction(
  resolvers: DomainResolver[],
  junction: string
): Promise<JunctionResponse> {
  const domainResolverMap: DomainResolverMap[] = parse(resolvers, junction);

  const resolverNotFound = validateDomainWithResolvers(domainResolverMap);
  if (resolverNotFound) {
    return {
      error: resolverNotFound,
    };
  }

  const resolvedDomains = await resolveDomains(domainResolverMap);

  const resolveErrors = validateResolvedDomains(resolvedDomains);
  if (resolveErrors) {
    return {
      error: resolveErrors,
    };
  }

  return {
    result: resolvedDomains[0],
  };
}
