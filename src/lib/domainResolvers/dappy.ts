import { DappyNetworkId, lookup } from '@fabcotech/dappy-lookup';
import { DomainResolver } from './domainResolver';

export const createDappyResolver = (
  dappyLookup: typeof lookup,
  dappyNetwork: DappyNetworkId
): DomainResolver => {
  return {
    resolve: async (domain: string) => {
      const rA = await dappyLookup(domain, 'A', {
        dappyNetwork: 'gamma',
      });

      if (rA.answers.length === 0) {
        return {
          ok: false,
          error: {
            code: 'RESOLVER_ERROR_A_RECORD_NOT_FOUND',
            message: `${domain} record A not found`,
          },
        };
      }

      const rTXT = await dappyLookup(domain, 'TXT', {
        dappyNetwork,
      });

      if (
        rTXT.answers.length === 0 ||
        !rTXT.answers[0].data.startsWith('HASH=')
      ) {
        return {
          ok: false,
          error: {
            code: 'RESOLVER_ERROR_TXT_HASH_RECORD_NOT_FOUND',
            message: `${domain} record TXT(HASH) not found`,
          },
        };
      }
      return {
        ok: true,
        result: [
          {
            type: 'A',
            name: domain,
            data: rA.answers[0].data,
          },
          {
            type: 'TXT',
            name: domain,
            data: rTXT.answers[0].data,
          },
        ],
      };
    },
    canResolve: (domain: string) => {
      return domain.endsWith(dappyNetwork);
    },
  };
};

export const dappyGammaResolver = createDappyResolver(lookup, 'gamma');
export const dappyDResolver = createDappyResolver(lookup, 'd');
