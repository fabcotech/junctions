import { expect } from 'chai';
import { createDappyResolver } from './dappy';

export const fns = <T extends (...args: any[]) => Promise<any>>(fns: T[]) => {
  let call = -1;

  return (...args: Parameters<T>) => {
    call += 1;
    return fns[call](...args);
  };
};

const fakeLookup = async (obj: any = {}) => {
  return Promise.resolve({
    type: 'response' as const,
    rcode: 'NOERROR' as const,
    id: 0,
    flags: 0,
    questions: [],
    answers: [],
    additionals: [],
    authorities: [],
    ...obj,
  });
};

describe('dappy resolver', () => {
  it('should resolve only dappy suffix domains', () => {
    const resolver = createDappyResolver(fakeLookup, 'gamma');

    expect(resolver.canResolve('foo.d')).to.be.false;
    expect(resolver.canResolve('foo.gamma')).to.be.true;
  });

  it('should fail when no record A is found', async () => {
    const resolver = createDappyResolver(fakeLookup, 'gamma');

    const result = await resolver.resolve('test.gamma');

    expect(result.ok).to.be.false;
    if (!result.ok) {
      expect(result.error.code).to.be.equal(
        'RESOLVER_ERROR_A_RECORD_NOT_FOUND'
      );
      expect(result.error.message).to.be.equal('test.gamma record A not found');
    }
  });

  it('should fail when no record TXT(HASH) is found', async () => {
    const resolver = createDappyResolver(
      fns([
        () =>
          fakeLookup({
            answers: [
              {
                type: 'A',
              },
            ],
          }),
        () => fakeLookup(),
      ]),
      'gamma'
    );

    const result = await resolver.resolve('test.gamma');

    expect(result.ok).to.be.false;
    if (!result.ok) {
      expect(result.error.code).to.be.equal(
        'RESOLVER_ERROR_TXT_HASH_RECORD_NOT_FOUND'
      );
      expect(result.error.message).to.be.equal(
        'test.gamma record TXT(HASH) not found'
      );
    }
  });

  it('should resolve a junction', async () => {
    const resolver = createDappyResolver(
      fns([
        () =>
          fakeLookup({
            answers: [
              {
                type: 'A',
                data: '127.0.0.1',
              },
            ],
          }),
        () =>
          fakeLookup({
            answers: [
              {
                type: 'TXT',
                data: 'HASH=abcdef',
              },
            ],
          }),
      ]),
      'gamma'
    );

    const result = await resolver.resolve('test.gamma');

    expect(result.ok).to.be.true;
    if (result.ok) {
      expect(result.result).to.be.deep.equal([
        {
          type: 'A',
          name: 'test.gamma',
          data: '127.0.0.1',
        },
        {
          type: 'TXT',
          name: 'test.gamma',
          data: 'HASH=abcdef',
        },
      ]);
    }
  });
});
