import { resolveJunction } from './junctionResolver';
import {
  dappyDResolver,
  dappyGammaResolver,
  dummyResolver,
} from './domainResolvers';

export async function resolve(junction: string, verbose: boolean = false) {
  const resolvers = [dummyResolver, dappyGammaResolver, dappyDResolver];
  return resolveJunction(resolvers, junction, verbose);
}
