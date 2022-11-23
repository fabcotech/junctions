import { resolve, loader } from '../lib';

export const resolveJunction = async (argv: {
  junction: string;
  verbose: boolean;
  load: boolean;
}) => {
  const { junction, verbose, load } = argv;
  const r = await resolve(junction, verbose);

  let ip;
  let expectedHash;
  if (r.ok) {
    ip = r.result[0].data;
    expectedHash = r.result[1].data.replace('HASH=', '');
    console.log(`\nIP address of web service :\n${ip}\n`);
    console.log(
      `Expected hash of the data (from name systems) :\n${expectedHash}\n`
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
    expectedHash as string,
    ip as string,
    junction,
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
