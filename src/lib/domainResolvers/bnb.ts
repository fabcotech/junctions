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
};

export default bnbResolver;
