import fs from 'fs';
import { ethers } from 'ethers';
import { bnbResolver } from '../lib/domainResolvers';

const MAX_GAS_LIMIT = 10000000;

export const setRecordsOnBNB = async ({
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

  console.log('Setting records on Binance Smart Chain Testnet...');
  console.log();
  console.log('For domain:', domain);
  console.log('Records:', JSON.stringify(JSON.parse(records), null, 2));

  await contract.connect(wallet).mintTo(wallet.address, domain, {
    gasLimit: MAX_GAS_LIMIT,
  });

  await contract.connect(wallet).setRecords(domain, records, {
    gasLimit: MAX_GAS_LIMIT,
  });

  console.log('Records set on Binance Smart Chain Testnet');
};
