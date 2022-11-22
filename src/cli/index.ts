#!/usr/bin/env node

import yargs from 'yargs';
import chalk from 'chalk';
import { dummyServer } from './dummyServer';
import { hashAndConfig } from './hashAndConfig';
import { resolveJunction } from './resolveJunction';

const title = chalk.yellow('CLI junction');

yargs(process.argv.slice(2))
  .strict()
  .scriptName('junctions')
  .usage(
    `${title}
junction [command] [options]`
  )
  .command({
    command: 'resolve <junction>',
    aliases: ['r'],
    describe: 'Resolve junction',
    builder: (yargs) => {
      return yargs
        .option('junction', {
          demandOption: true,
          alias: 'j',
          describe: 'junction to resolve',
          type: 'string',
        })
        .option('verbose', {
          alias: 'v',
          default: false,
          type: 'boolean',
          describe: 'verbose output',
        });
    },
    handler: (argv) => {
      resolveJunction(argv);
    },
  })
  .command({
    command: 'dummyserver',
    aliases: ['s'],
    describe: 'Start a dummy http server',
    builder: (yargs) => {
      return yargs
        .option('ip', {
          default: '127.0.0.1',
          describe: 'ip',
          type: 'string',
          alias: 'i',
        })
        .option('port', {
          default: 3001,
          describe: 'port',
          type: 'number',
          alias: 'p',
        });
    },
    handler(argv) {
      dummyServer(argv);
    },
  })
  .command({
    command: 'hashandconfig <junction>',
    aliases: ['c'],
    describe: 'Generate junction records for Dappy',
    builder: (yargs) => {
      return yargs
        .option('junction', {
          demandOption: true,
          alias: 'j',
          describe: 'junction',
          type: 'string',
        })
        .option('host', {
          default: '127.0.0.1',
          describe: 'host',
          type: 'string',
          alias: 'h',
        })
        .option('ip', {
          default: '127.0.0.1',
          describe: 'ip',
          type: 'string',
          alias: 'i',
        })
        .option('port', {
          default: 3001,
          describe: 'port',
          type: 'number',
          alias: 'p',
        });
    },
    handler(argv) {
      hashAndConfig(argv);
    },
  })
  .demandCommand()
  .completion();

yargs.parse();
