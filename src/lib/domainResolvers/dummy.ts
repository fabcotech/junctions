import { DomainResolver } from './domainResolver';

const dummyResolver: DomainResolver = {
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
          data: 'HASH=7316723eb8a77f3f7d8e241d29e55577f1e2bffbca9fc55251549c8f30506dc9',
        },
      ],
    });
  },
  canResolve: (domain: string) => {
    return domain.endsWith('.dummy');
  },
};

export default dummyResolver;
