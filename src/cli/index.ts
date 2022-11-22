import { dummyServer } from './dummyServer';
import { hashAndConfig } from './hashAndConfig';
import process from 'process';

function argvInclude(cmd: string) {
  return process.argv.includes(cmd);
}

async function run() {
  const commands: [boolean, () => void][] = [
    [argvInclude('hashandconfig'), hashAndConfig],
    [argvInclude('dummyserver'), dummyServer],
  ];

  const command = commands.find(([cond]) => cond);
  if (!command) {
    throw new Error('Unrecognized command');
  }
  command[1]();
}

run();
