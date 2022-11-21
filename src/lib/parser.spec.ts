import { expect } from 'chai';
import {
  getJunctionSubdomain,
  JUNCTION_OPERATOR,
  JUNCTION_SUB_DOMAIN,
  parse,
} from './parser';
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
  it('should replace . and & characters in junctions', () => {
    const junction = 'foo.dummy & bar.dummy';
    const subdomain = getJunctionSubdomain(junction);
    expect(subdomain).to.eql(
      `foo${JUNCTION_SUB_DOMAIN}dummy${JUNCTION_OPERATOR}bar${JUNCTION_SUB_DOMAIN}dummy`
    );
  });
  it('should return domain resolver map', () => {
    const resolvers = [dummyResolver];
    const r = parse(resolvers, 'foo.dummy & bar.dummy');
    expect(r.ok).to.be.true;
    if (r.ok) {
      expect(r.result).to.deep.equals([
        {
          domain: `${getJunctionSubdomain('foo.dummy & bar.dummy')}.foo.dummy`,
          resolver: dummyResolver,
        },
        {
          domain: `${getJunctionSubdomain('foo.dummy & bar.dummy')}.bar.dummy`,
          resolver: dummyResolver,
        },
      ]);
    }
  });
});
