#!/usr/bin/env node

import yargs from 'yargs';
import chalk from 'chalk';
import { dummyServer } from './dummyServer';
import { hashAndConfig } from './hashAndConfig';

const title = chalk.yellow('CLI junction');

yargs(process.argv.slice(2))
  .usage(
    `${title}
junction [command] [options]`
  )
  .command({
    command: 'dummyserver',
    aliases: ['ds'],
    describe: 'Start a dummy server',
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
    command: 'hashandconfig',
    aliases: ['hc'],
    describe: 'Generate junction records for Dappy',
    builder: (yargs) => {
      return yargs
        .option('host', {
          default: '127.0.0.1',
          alias: 'h',
          describe: 'Host',
          type: 'string',
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
  .demandCommand();

yargs.parse();
