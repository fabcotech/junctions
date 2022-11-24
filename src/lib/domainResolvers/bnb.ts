import { DomainResolver } from './domainResolver';
import { ethers } from 'ethers';
import NameSystem from './NameSystem.json';
// import { JunctionRecords } from 'lib/types';

const config = {
  contractAddress: '0x9eD769ae0faBE432cB334fe57edF588120E8e481',
  abi: NameSystem.abi,
  providerUrl:
    'https://bsc-testnet.nodereal.io/v1/a49c22a98e96491085f76cfa15a3e901',
};

const bnbResolver: DomainResolver = {
  resolve: async (domain: string) => {
    const provider = new ethers.providers.JsonRpcProvider(config.providerUrl);
    const contract = new ethers.Contract(
      config.contractAddress,
      config.abi,
      provider
    );

    let rawRecords;

    let parts = domain.split('.');
    let tld = parts.slice(-2).join('.');
    let subdomain = parts.slice(0, -2).join('.');

    try {
      rawRecords = await contract.getRecords(tld);
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
    return domain.endsWith('.bsn');
  },
  config,
};

export default bnbResolver;
