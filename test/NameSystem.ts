import { expect } from 'chai';
import { ethers } from 'hardhat';
import type { SignerWithAddress } from '@nomiclabs/hardhat-ethers/dist/src/signer-with-address';

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
  let NameSystem;
  let contract;
  let _name = 'NameSystem';
  let _symbol = 'Dappy';
  let owner: SignerWithAddress;

  beforeEach(async function () {
    NameSystem = await ethers.getContractFactory('NameSystem');
    [owner] = await ethers.getSigners();

    contract = await NameSystem.deploy(_name, _symbol);
  });

  describe('Deployment', () => {
    it('Should has the correct name and symbol ', async () => {
      expect(await contract.name()).to.equal(_name);
      expect(await contract.symbol()).to.equal(_symbol);
    });

    it('Should mint a domain', async () => {
      await contract.mintTo(owner.address, 'foo.bsn', fakeZoneRecords);
      expect(await contract.ownerOf(1)).to.equal(owner.address);
    });

    it('Should not mint a domain already taken', async () => {
      await contract.mintTo(owner.address, 'foo.bsn', fakeZoneRecords);
      expect(await contract.ownerOf(1)).to.equal(owner.address);

      await expect(
        contract.mintTo(owner.address, 'foo.bsn', fakeZoneRecords)
      ).to.be.revertedWith('domain already exists');
    });

    it('Should get records', async () => {
      await contract.mintTo(owner.address, 'foo.bsn', fakeZoneRecords);
      expect(await contract.ownerOf(1)).to.equal(owner.address);

      const records = await contract.getRecords('foo.bsn');
      expect(records).to.equal(fakeZoneRecords);
    });
    it('Should not get records for a domain that does not exist', async () => {
      await expect(
        contract.getRecords('notexistingdomain.bsn')
      ).to.be.revertedWith('domain does not exist');
    });
  });
});
