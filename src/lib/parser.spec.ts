import { expect } from 'chai';
import { parse } from './parser';
import { dummyResolver } from './domainResolvers';

describe('parser', () => {
  it('should fail on non junctions', () => {
    const r1 = parse([], 'foo.dummy');

    expect(r1.ok).to.be.false;
    if (!r1.ok) {
      expect(r1.error.code).to.eql('JUNCTION_MALFORMED');
    }

    const r2 = parse([], '');

    expect(r2.ok).to.be.false;
    if (!r2.ok) {
      expect(r2.error.code).to.eql('JUNCTION_MALFORMED');
    }

    const r3 = parse([], 'foo.dummy&');

    expect(r3.ok).to.be.false;
    if (!r3.ok) {
      expect(r3.error.code).to.eql('JUNCTION_MALFORMED');
    }

    const r4 = parse([], 'foo.dummy& ');

    expect(r4.ok).to.be.false;
    if (!r4.ok) {
      expect(r4.error.code).to.eql('JUNCTION_MALFORMED');
    }
  });
  it('should support only domains with TLD', () => {
    const r = parse([], 'foo.dummy&bar');

    expect(r.ok).to.be.false;
    if (!r.ok) {
      expect(r.error.code).to.eql('JUNCTION_MISSING_TLD');
    }
  });
  it('should fail on not resolvable domain', () => {
    const resolvers = [dummyResolver];
    const r = parse(resolvers, 'foo.notResolvable & bar.notResolvable');
    expect(r.ok).to.be.false;
  });
  it('should return domain resolver map', () => {
    const resolvers = [dummyResolver];
    const r = parse(resolvers, 'foo.dummy & bar.dummy');
    expect(r.ok).to.be.true;
    if (r.ok) {
      expect(r.result).to.deep.equals([
        {
          domain: 'foo.dummy',
          resolver: dummyResolver,
        },
        {
          domain: 'bar.dummy',
          resolver: dummyResolver,
        },
      ]);
    }
  });
});
