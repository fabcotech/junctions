import { DomainResolver } from './domainResolver';

const dummyResolver: DomainResolver = {
  resolve: async (domain: string) => {
    return Promise.resolve([
      {
        type: 'A',
        name: domain,
        data: '127.0.0.1',
      },
      {
        type: 'TXT',
        name: domain,
        data: 'HASH=abddef',
      },
    ]);
  },
  canResolve: (domain: string) => {
    return domain.endsWith('.dummy');
  },
};

export default dummyResolver;
