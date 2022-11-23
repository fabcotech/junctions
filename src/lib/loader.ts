import { blake2sHex } from 'blakejs';
import { JunctionError, LoadResult, Result } from './types';
import http, { IncomingHttpHeaders } from 'http';

interface HttpResponse {
  data: string;
  headers: IncomingHttpHeaders;
}

export const httpRequest = async (
  ip: string,
  host: string,
  port = 3001
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

export async function loader(
  expectedHash: string,
  ip: string,
  junction: string,
  verbose: boolean,
  port = 3001
): Promise<Result<LoadResult, JunctionError>> {
  if (verbose) {
    console.log(`Expected Hash : ${expectedHash}`);
    console.log(`Loading ${ip}:${port} @ host:${junction}`);
  }
  const result = await httpRequest(ip as string, junction);
  const dataHash = blake2sHex(result.data);
  if (verbose) {
    console.log(`Actual Hash   : ${dataHash}`);
  }

  if (dataHash !== expectedHash) {
    return {
      ok: false,
      error: {
        code: 'HASHES_DONT_MATCH',
        message: `Expected hash and actual hash don't match
Expected : ${expectedHash}
Actual:    ${dataHash}`,
      },
    };
  }

  return {
    ok: true,
    result: { 'Content-Type': 'text/html', data: result.data },
  };
}
