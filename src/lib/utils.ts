import https from 'https';

export const postRequest = (
  hostname: string,
  path: string,
  data: any
): Promise<Record<string, string>> => {
  return new Promise((resolve, reject) => {
    const req = https
      .request(
        {
          method: 'POST',
          hostname,
          path,
          headers: {
            'x-api-key': 'sk_live_738855f9-5a06-4118-ab0f-d1e34a1c0e85',
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(JSON.stringify(data)),
          },
        },
        (resp) => {
          resp.setEncoding('utf8');
          let data = '';

          resp.on('data', (chunk) => {
            data += chunk;
          });

          resp.on('end', () => {
            resolve(JSON.parse(data));
          });
        }
      )
      .on('error', (err) => {
        reject(err.message);
      });
    req.write(JSON.stringify(data));
    req.end();
  });
};
