import fs from 'fs';
import path from 'path';
import { blake2sHex } from 'blakejs';
import { getJunctionSubdomain } from '../lib/parser';
import { httpRequest } from '../lib';

export const hashAndConfig = async ({
  junction,
  host,
  ip,
  port,
  file,
  recordsFilePath,
}: {
  junction: string;
  host: string;
  ip: string;
  file: string | undefined;
  port: number;
  recordsFilePath: string;
}) => {
  let hash;
  console.log(`Subdomain hash : ${getJunctionSubdomain(junction)}\n`);
  if (file) {
    const a = fs.readFileSync(path.join('./', file), 'utf8');
    hash = blake2sHex(a);
    console.log('Data hash (blake2s) :\n');
    console.log(hash);
  } else {
    const { data } = await httpRequest(ip, host, port);
    hash = blake2sHex(data);
    console.log('Data retreived :\n');
    console.log(data);
    console.log('\nData hash (blake2s) :\n');
    console.log(hash);
  }
  console.log('\nrecords needed for junction :\n');
  const records = [
    { type: 'A', name: `${getJunctionSubdomain(junction)}`, data: `${ip}` },
    {
      type: 'TXT',
      name: `${getJunctionSubdomain(junction)}`,
      data: `HASH=${hash}`,
    },
  ];
  console.log(JSON.stringify(records, null, 2));
  fs.writeFileSync(recordsFilePath, JSON.stringify(records, null, 2), 'utf8');
};
