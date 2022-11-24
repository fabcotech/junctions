import { resolveJunction } from './junctionResolver';
import { allResolvers } from './domainResolvers';

export * from './loader';

export async function resolve(junction: string, verbose: boolean = false) {
  const resolvers = allResolvers;
  return resolveJunction(resolvers, junction, verbose);
}
