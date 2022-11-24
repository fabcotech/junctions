import { DomainResolver } from './domainResolver';
import NameSystem from './NameSystem.json';
import { postRequest } from '../utils';

const config = {
  contractAddress: '0x17Bb5F364E261fB1978B7f2FdF5a1E9447F132f7',
  abi: NameSystem.abi,
  providerUrl:
    'https://bsc-testnet.nodereal.io/v1/a49c22a98e96491085f76cfa15a3e901',
};

export const getRawRecordsUsingStarton = async (domain: string) => {
  const r = await postRequest(
    'api.starton.io',
    `/v3/smart-contract/binance-testnet/${config.contractAddress}/read`,
    {
      functionName: 'getRecords',
      params: [domain],
    }
  );
  return r.response;
};

const bnbResolver: DomainResolver = {
  resolve: async (domain: string) => {
    let rawRecords: string = '';

    let parts = domain.split('.');
    let tld = parts.slice(-2).join('.');
    let subdomain = parts.slice(0, -2).join('.');

    try {
      rawRecords = await getRawRecordsUsingStarton(tld);
    } catch (error) {
      if (error instanceof Error) {
        return {
          ok: false,
          error: {
            code: 'RESOLVER_ERROR',
            message: error.message,
          },
        };
      }
    }

    let records = JSON.parse(rawRecords);

    if (!(records instanceof Array)) {
      return {
        ok: false,
        error: {
          code: 'RESOLVER_ERROR',
          message: 'Not an array',
        },
      };
    }

    const rA = records.find((r) => r.type === 'A' && r.name === subdomain);

    if (!rA) {
      return {
        ok: false,
        error: {
          code: 'RESOLVER_ERROR_A_RECORD_NOT_FOUND',
          message: `${domain} record A not found`,
        },
      };
    }

    const rTXT = records.find((r) => r.type === 'TXT' && r.name === subdomain);

    if (!rTXT) {
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
          data: rA.data,
        },
        {
          type: 'TXT',
          name: domain,
          data: rTXT.data,
        },
      ],
    };
  },
  canResolve: (domain: string) => {
    return domain.endsWith('.bns');
  },
  config,
};

export default bnbResolver;
