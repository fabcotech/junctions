import { bnbResolver } from '../lib/domainResolvers';
import { getRawRecordsUsingStarton } from '../lib/domainResolvers/bnb';

export const getRecordsOnBNB = async ({
  domain,
}: {
  privateKey: string;
  domain: string;
}) => {
  if (!domain.endsWith('.bns')) {
    console.log('Domain must end with .bns');
    process.exit(1);
  }

  const { config } = bnbResolver;
  if (!config) {
    return;
  }

  const rawRecords = await getRawRecordsUsingStarton(domain);
  if (!rawRecords) {
    console.log(`No records found for ${domain}`);
    process.exit(1);
  }
  const records = JSON.parse(rawRecords);
  console.log(`${domain} records from Binance Smart Chain Testnet:`);
  console.log();
  console.log(JSON.stringify(records, null, 2));
};
