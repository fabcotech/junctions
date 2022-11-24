import { ethers } from 'ethers';
import { bnbResolver } from '../lib/domainResolvers';

export const getRecordsOnBNB = async ({
  domain,
}: {
  privateKey: string;
  domain: string;
}) => {
  const {
    abi,
  } = require('../../artifacts/contracts/NameSystem.sol/NameSystem.json');

  const { config } = bnbResolver;
  if (!config) {
    return;
  }

  const provider = new ethers.providers.JsonRpcProvider(config.providerUrl);
  const contract = new ethers.Contract(config.contractAddress, abi, provider);

  const records = await contract.getRecords(domain);

  console.log(`${domain} records from Binance Smart Chain Testnet:`);
  console.log();
  console.log(JSON.stringify(JSON.parse(records), null, 2));
};
