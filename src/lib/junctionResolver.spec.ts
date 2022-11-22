import { expect } from 'chai';
import { DomainResolver, dummyResolver } from './domainResolvers';
import { resolveJunction } from './junctionResolver';
import { getJunctionSubdomain } from './parser';

const successResolver = ({
  ip,
  hash,
  endsWith,
}: {
  ip?: string;
  hash?: string;
  endsWith?: string;
} = {}): DomainResolver => ({
  resolve: async (domain: string) => {
    return Promise.resolve({
      ok: true,
      result: [
        {
          type: 'A',
          name: domain,
          data: ip || '127.0.0.1',
        },
        {
          type: 'TXT',
          name: domain,
          data: hash || 'HASH=abcdef',
        },
      ],
    });
  },
  canResolve: (domain: string) => domain.endsWith(endsWith || '.resolved'),
});

const failResolver = (): DomainResolver => ({
  resolve: async (domain: string) => {
    return Promise.resolve({
      ok: false,
      error: {
        code: 'RESOLVER_ERROR',
        message: `Failed to resolve ${domain}`,
      },
    });
  },
  canResolve: (domain: string) => domain.endsWith('.failed'),
});

describe('junction resolver', () => {
  it('should resolve a junction', async () => {
    const r = await resolveJunction([dummyResolver], 'foo.dummy & bar.dummy');
    expect(r.ok).to.be.true;
    if (r.ok) {
      expect(r.result).to.deep.equals([
        {
          type: 'A',
          name: 'foo.dummy & bar.dummy',
          data: '127.0.0.1',
        },
        {
          type: 'TXT',
          name: 'foo.dummy & bar.dummy',
          data: 'HASH=abcdef',
        },
      ]);
    }
  });
  it("should fail if a domain can't be resolved", async () => {
    const resolvers = [successResolver(), failResolver()];
    const r = await resolveJunction(resolvers, 'foo.resolved & bar.failed');
    expect(r.ok).to.be.false;
    if (!r.ok) {
      expect(r.error.code).to.equals('RESOLVER_ERROR');
      expect(r.error.message).to.match(
        new RegExp(
          `Failed to resolve ${getJunctionSubdomain(
            'foo.resolved & bar.failed'
          )}.bar.failed`
        )
      );
    }
  });
  it('should fail if Junction records are differents', async () => {
    const resolvers = [
      successResolver({ hash: 'HASH=abcdef' }),
      successResolver({ hash: 'HASH=123456', endsWith: '.resolved2' }),
    ];
    const r = await resolveJunction(resolvers, 'foo.resolved & bar.resolved2');
    expect(r.ok).to.be.false;
    if (!r.ok) {
      expect(r.error.code).to.equals('RECORDS_MISMATCH');
    }
  });
});
