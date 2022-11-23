import { resolve } from '../lib';

export const resolveJunction = async (argv: {
  junction: string;
  verbose: boolean;
}) => {
  const { junction, verbose } = argv;
  const r = await resolve(junction, verbose);

  if (r.ok) {
    console.log();
    console.log(`Junction IP: ${r.result[0].data}`);
    console.log(`Junction Hash : ${r.result[1].data}`);
  }

  if (!r.ok) {
    console.log();
    console.log(`Error(${r.error.code}): ${r.error.message}`);
  }
};