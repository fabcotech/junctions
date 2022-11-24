import fs from 'fs';
import { ethers } from 'ethers';
import { bnbResolver } from '../lib/domainResolvers';

export const pushRecordsOnBNB = async ({
  privateKey,
  domain,
  filePath,
}: {
  privateKey: string;
  domain: string;
  filePath: string;
}) => {
  const {
    abi,
  } = require('../../artifacts/contracts/NameSystem.sol/NameSystem.json');

  const { config } = bnbResolver;
  if (!config) {
    return;
  }

  const provider = new ethers.providers.JsonRpcProvider(config.providerUrl);
  const wallet = new ethers.Wallet(privateKey, provider);
  const contract = new ethers.Contract(config.contractAddress, abi, wallet);
  const records = fs.readFileSync(filePath, 'utf8');

  await contract.connect(privateKey).mintTo(wallet.address, domain);
  await contract.connect(privateKey).setRecords(domain, records);
};
