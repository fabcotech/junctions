import { resolveJunction } from './junction-resolver';
import { dummyResolver } from './domainResolvers';

export async function resolve(junction: string) {
  const resolvers = [dummyResolver];
  return resolveJunction(resolvers, junction);
}
