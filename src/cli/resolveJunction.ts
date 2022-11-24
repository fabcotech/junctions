import { exec } from 'child_process';
import fs from 'fs';
import { resolve, loader } from '../lib';

export const resolveJunction = async (argv: {
  junction: string;
  verbose: boolean;
  load: boolean;
  open: boolean;
}) => {
  const { junction, verbose, load, open } = argv;
  const r = await resolve(junction, verbose);

  if (r.ok) {
    console.log(
      `\nIP address of web service (from A record) :\n${r.result.ip}\n`
    );
    console.log(
      `Expected hash of the data (from TXT record) :\n${r.result.hash}\n`
    );
  }

  if (!r.ok) {
    console.log(`\nError(${r.error.code}): ${r.error.message}`);
    return;
  }

  if (!load) return;

  if (verbose) {
    console.log('Now loading the data and checking the hashes');
    if (['localhost', '127.0.0.1'].includes(r.result.ip)) {
      console.log('IP is local, will use port 3001 by default');
    } else {
      console.log('IP is remote, will use port 80 by default');
    }
  }
  const resultOfLoad = await loader(
    r.result.hash,
    r.result.ip,
    r.result.hostname,
    verbose,
    ['localhost', '127.0.0.1'].includes(r.result.ip) ? 3001 : 80
  );
  if (!resultOfLoad.ok) {
    console.log(
      `\nError(${(resultOfLoad as any).error.code}): ${
        (resultOfLoad as any).error.message
      }`
    );
    return;
  }

  if (verbose) {
    console.log('\n\x1b[32mLoading of data successful !\x1b[0m Hashes match.');
  }
  console.log('\ndata :');
  console.log((resultOfLoad as any).result.data.slice(0, 800));
  console.log('\ncontent-type :');
  console.log((resultOfLoad as any).result['Content-Type']);

  if (!open) {
    return;
  }

  fs.writeFileSync('file.html', (resultOfLoad as any).result.data, 'utf8');
  exec(
    'open file.html',
    { maxBuffer: 1024 * 1000 * 4 },
    function (error, stdout, stderr) {
      if (error) {
        console.log(error);
        throw new Error('Error openning browser');
      }
    }
  );
};
