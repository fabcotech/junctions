import { DomainResolver } from './domainResolver';

const bnbResolver: DomainResolver = {
  resolve: async (domain: string) => {
    return Promise.resolve({
      ok: true,
      result: [
        {
          type: 'A',
          name: domain,
          data: '127.0.0.1',
        },
        {
          type: 'TXT',
          name: domain,
          data: 'HASH=abcdef',
        },
      ],
    });
  },
  canResolve: (domain: string) => {
    return domain.endsWith('.bsn');
  },
  config: {
    contractAddress: '0x9eD769ae0faBE432cB334fe57edF588120E8e481',
    providerUrl:
      'https://bsc-testnet.nodereal.io/v1/a49c22a98e96491085f76cfa15a3e901',
  },
};

export default bnbResolver;
