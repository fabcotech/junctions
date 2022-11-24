import { ethers } from 'ethers';
import { bnbResolver } from '../lib/domainResolvers';

export const getRecordsOnBNB = async ({
  domain,
}: {
  privateKey: string;
  domain: string;
}) => {
  if (!domain.endsWith('.bns')) {
    console.log('Domain must end with .bns');
  }

  const { config } = bnbResolver;
  if (!config) {
    return;
  }

  const provider = new ethers.providers.JsonRpcProvider(config.providerUrl);
  const contract = new ethers.Contract(
    config.contractAddress,
    config.abi,
    provider
  );

  const records = await contract.getRecords(domain);

  console.log(`${domain} records from Binance Smart Chain Testnet:`);
  console.log();
  console.log(JSON.stringify(JSON.parse(records), null, 2));
};
