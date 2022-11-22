import http, { IncomingHttpHeaders } from 'http';
import { blake2sHex } from 'blakejs';

import { getProcessArgv } from './utils';

interface HttpResponse {
  data: string;
  headers: IncomingHttpHeaders;
}

const httpRequest = async (
  ip: string,
  host: string,
  port = '3001'
): Promise<HttpResponse> => {
  const options = {
    host: ip,
    method: 'GET',
    port,
    path: `/`,
    headers: {
      Host: host,
    },
  };

  const data = await new Promise<HttpResponse>((resolve, reject) => {
    const req = http.request(options, (resp) => {
      if (resp.statusCode !== 200) {
        reject(`Status code is not 200 : ${resp.statusCode}`);
        return;
      }
      let data = '';
      resp.on('data', (chunk) => {
        data += chunk;
      });
      resp.on('end', () => {
        resolve({
          headers: resp.headers,
          data: data,
        });
      });
      resp.on('error', (err) => {
        reject(err);
      });
    });
    req.end();
  });

  return data;
};

export const hashAndConfig = async () => {
  const host = getProcessArgv('--host');
  if (!host) {
    console.log('need --host argument');
    process.exit(1);
  }

  const ip = getProcessArgv('--ip');
  if (!ip) {
    console.log('need --ip argument');
    process.exit(1);
  }

  let port = getProcessArgv('--port');
  if (!port) {
    console.log('Setting default port to 80');
    port = '80';
  }
  const { data } = await httpRequest(ip, host, port);
  const hash = blake2sHex(data);
  console.log('\ndata retreived :\n');
  console.log(data);
  console.log('\nhash (blake2s) :\n');
  console.log(hash);
  console.log('\nrecords needed for junction :\n');
  console.log(`[
  { type: "A", "host": "${host}", "data": "${ip}" },
  { type: "TXT", "host": "${host}", "data": "HASH=${hash}" }
]`);
};
