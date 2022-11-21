import { JunctionError, JunctionRecords, Result } from './types';
import { parse, DomainResolverMap } from './parser';
import { DomainResolver } from './domainResolvers';

export function validateDomainWithResolvers(
  map: DomainResolverMap[]
): JunctionError | undefined {
  return undefined;
}

export function resolveDomains(
  map: DomainResolverMap[]
): Promise<JunctionRecords[]> {
  return Promise.all(map.map((m) => m.resolver.resolve(m.domain)));
}

export function validateResolvedDomains(
  domains: JunctionRecords[]
): Result<undefined, JunctionError> {
  return {
    ok: true,
    result: undefined,
  };
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

  const resolverNotFound = validateDomainWithResolvers(
    domainResolverMap.result
  );
  if (resolverNotFound) {
    return {
      ok: false,
      error: resolverNotFound,
    };
  }

  const resolvedDomains = await resolveDomains(domainResolverMap.result);

  const resolveErrors = validateResolvedDomains(resolvedDomains);
  if (!resolveErrors.ok) {
    return {
      ok: false,
      error: resolveErrors.error,
    };
  }

  // Reconciler

  return {
    ok: true,
    result: resolvedDomains[0],
  };
}
