export type { DomainResolver } from './domainResolver';

import { default as dummyResolver } from './dummy';
import { dappyGammaResolver, dappyDResolver } from './dappy';
import { default as bnbResolver } from './bnb';

export { dummyResolver, dappyGammaResolver, dappyDResolver, bnbResolver };

export const allResolvers = [
  dummyResolver,
  dappyGammaResolver,
  dappyDResolver,
  bnbResolver,
];
