import { cp } from 'fs';
import { resolve } from '../lib';

export const resolveJunction = async (argv: { junction: string }) => {
  const { junction } = argv;

  console.log(`Resolving junction ${junction}`);
  console.log();

  const r = await resolve(junction);

  if (r.ok) {
    console.log(`Junction IP: ${r.result[0].data}`);
    console.log(`Junction Hash : ${r.result[1].data}`);
  }

  if (!r.ok) {
    console.log(`Error(${r.error.code}): ${r.error.message}`);
  }
};
