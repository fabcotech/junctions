import { resolveJunction } from './junctionResolver';
import { dummyResolver } from './domainResolvers';

export async function resolve(junction: string, verbose: boolean = false) {
  const resolvers = [dummyResolver];
  return resolveJunction(resolvers, junction, verbose);
}
