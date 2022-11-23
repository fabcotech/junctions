import { blake2sHex } from 'blakejs';
import { getJunctionSubdomain } from '../lib/parser';
import { httpRequest } from '../lib';

export const hashAndConfig = async ({
  junction,
  host,
  ip,
  port,
}: {
  junction: string;
  host: string;
  ip: string;
  port: number;
}) => {
  const { data } = await httpRequest(ip, host, port);
  const hash = blake2sHex(data);
  console.log('\ndata retreived :\n');
  console.log(data);
  console.log('\nhash (blake2s) :\n');
  console.log(hash);
  console.log('\nrecords needed for junction :\n');
  console.log(`[
  { "type": "A", "name": "${getJunctionSubdomain(junction)}", "data": "${ip}" },
  { "type": "TXT", "name": "${getJunctionSubdomain(
    junction
  )}", "data": "HASH=${hash}" }
]`);
};
