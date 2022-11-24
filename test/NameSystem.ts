import { expect, util } from 'chai';
import { ethers } from 'hardhat';
import type { SignerWithAddress } from '@nomiclabs/hardhat-ethers/dist/src/signer-with-address';
import { NameSystem__factory } from '../typechain-types';

const fakeZoneRecords = JSON.stringify([
  {
    type: 'A',
    name: 'barxn--7o8hbsnxn--dp8hfooxn--7o8hbsn',
    data: '127.0.0.1',
  },
  {
    type: 'TXT',
    name: 'barxn--7o8hbsnxn--dp8hfooxn--7o8hbsn',
    data: 'HASH=7316723eb8a77f3f7d8e241d29e55577f1e2bffbca9fc55251549c8f30506dc9',
  },
]);

describe('NameSystem contract', function () {
  let NameSystem: NameSystem__factory;
  let contract;
  let _name = 'NameSystem';
  let _symbol = 'Dappy';
  let owner: SignerWithAddress;
  let otherUser: SignerWithAddress;

  beforeEach(async function () {
    NameSystem = await ethers.getContractFactory('NameSystem');
    [owner, otherUser] = await ethers.getSigners();

    contract = await NameSystem.deploy(_name, _symbol);
  });

  describe('Deployment', () => {
    it('Should has the correct name and symbol ', async () => {
      expect(await contract.name()).to.equal(_name);
      expect(await contract.symbol()).to.equal(_symbol);
    });

    it('Should mint a domain', async () => {
      await contract.mintTo(owner.address, 'foo.bns');
      expect(await contract.ownerOf(1)).to.equal(owner.address);
    });

    it('Should not mint a domain already taken', async () => {
      await contract.mintTo(owner.address, 'foo.bns');
      expect(await contract.ownerOf(1)).to.equal(owner.address);

      await expect(
        contract.mintTo(owner.address, 'foo.bns')
      ).to.be.revertedWith('domain already exists');
    });

    it('domain owner should set records', async () => {
      await contract.mintTo(owner.address, 'foo.bns');
      await contract.setRecords('foo.bns', fakeZoneRecords);
      expect(await contract.getRecords('foo.bns')).to.equal(fakeZoneRecords);

      await expect(
        contract.connect(otherUser).setRecords('foo.bns', fakeZoneRecords)
      ).to.be.revertedWith('Not owner of this domain');
    });

    it('Should get records', async () => {
      await contract.mintTo(owner.address, 'foo.bns');
      expect(await contract.ownerOf(1)).to.equal(owner.address);
      await contract.setRecords('foo.bns', fakeZoneRecords);

      const records = await contract.getRecords('foo.bns');
      expect(records).to.equal(fakeZoneRecords);
    });
    it('Should not get records for a domain that does not exist', async () => {
      await expect(
        contract.getRecords('notexistingdomain.bns')
      ).to.be.revertedWith('domain does not exist');
    });
  });
});
