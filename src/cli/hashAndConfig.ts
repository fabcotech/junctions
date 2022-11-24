import fs from 'fs';
import path from 'path';
import { blake2sHex } from 'blakejs';
import { getJunctionSubdomain, parse } from '../lib/parser';
import { httpRequest } from '../lib';
import { allResolvers, bnbResolver } from '../lib/domainResolvers';
import { ethers } from 'ethers';

const NameSystemAddress = '0x86d9ff5624CBbD8244aBdf2176a63e53c76e920c';
const UserPrivateKey =
  'b9db745d4bc8ebe5fdeef76274a9a3619fb9f07e92978b8ceaf8a7d6be040213';
const UserAddress = '0x7e4d90b51E144cd848E26e2ed2E9E1A62ab7b2e3';
const providerUrl =
  'https://bsc-testnet.nodereal.io/v1/a49c22a98e96491085f76cfa15a3e901';

export const hashAndConfig = async ({
  junction,
  host,
  ip,
  port,
  file,
}: {
  junction: string;
  host: string;
  ip: string;
  file: string | undefined;
  port: number;
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
  // console.log('\nrecords needed for junction :\n');
  // console.log(JSON.stringify(records, null, 2));

  // if (pushOnBNB) {
  //   const r = parse(allResolvers, junction);
  //   if (r.ok) {
  //     const bnbDomains = r.result
  //       .filter((m) => m.resolver === bnbResolver)
  //       .map((r) => r.zone);

  //     const {
  //       abi,
  //     } = require('../../artifacts/contracts/NameSystem.sol/NameSystem.json');
  //     const provider = new ethers.providers.JsonRpcProvider(providerUrl);
  //     const wallet = new ethers.Wallet(UserPrivateKey, provider);
  //     const contract = new ethers.Contract(NameSystemAddress, abi, wallet);

  //     await Promise.all(
  //       bnbDomains.map((d) => {
  //         return contract.mintTo(UserAddress, d, JSON.stringify(records));
  //       })
  //     );
  //   }
  // }
};
