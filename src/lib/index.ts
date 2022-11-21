import { resolveJunction } from './junctionResolver';
import { dummyResolver } from './domainResolvers';

export async function resolve(junction: string) {
  const resolvers = [dummyResolver];
  return resolveJunction(resolvers, junction);
}
