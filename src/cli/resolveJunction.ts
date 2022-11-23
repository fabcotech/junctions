import { resolve, loader } from '../lib';

export const resolveJunction = async (argv: {
  junction: string;
  verbose: boolean;
  load: boolean;
}) => {
  const { junction, verbose, load } = argv;
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
  }
  const resultOfLoad = await loader(
    r.result.hash,
    r.result.ip,
    r.result.hostname,
    verbose
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
  console.log((resultOfLoad as any).result.data);
  console.log('\ncontent-type :');
  console.log((resultOfLoad as any).result['Content-Type']);
};
