#!/usr/bin/env node

import yargs from 'yargs';
import chalk from 'chalk';
import { dummyServer } from './dummyServer';
import { hashAndConfig } from './hashAndConfig';
import { resolveJunction } from './resolveJunction';
import { setRecordsOnBNB } from './setRecordsBNB';
import { getRecordsOnBNB } from './getRecordsBNB';

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
        })
        .option('load', {
          alias: 'l',
          default: false,
          type: 'boolean',
          describe: 'after resolve, load the website and check hash',
        })
        .option('open', {
          alias: 'o',
          default: false,
          type: 'boolean',
          describe: 'open file in browser',
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
        .option('file', {
          default: './examples/helloworld.html',
          describe: 'file to server',
          type: 'string',
          alias: 'f',
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
    describe: 'Generate junction records',
    builder: (yargs) => {
      return yargs
        .option('junction', {
          demandOption: true,
          alias: 'j',
          describe: 'junction (ex: "foo.d & bar.d")',
          type: 'string',
        })
        .option('file', {
          describe: 'file for which you want to know the hash',
          type: 'string',
          alias: 'f',
        })
        .option('host', {
          default: 'localhost',
          describe: 'host, often the subdomain hash',
          type: 'string',
          alias: 'h',
        })
        .option('ip', {
          default: '127.0.0.1',
          describe: 'IP address',
          type: 'string',
          alias: 'i',
        })
        .option('port', {
          default: 3001,
          describe: 'port',
          type: 'number',
          alias: 'p',
        })
        .option('recordsFilePath', {
          default: './records.json',
          type: 'string',
          describe: 'path to records file',
          alias: 'r',
        });
    },
    handler(argv) {
      hashAndConfig(argv);
    },
  })
  .command({
    command: 'setbnbrecords <privateKey> <domain>',
    aliases: ['r'],
    describe: 'create domain and push records on BNB Chain Testnet',
    builder: (yargs) => {
      return yargs
        .option('privateKey', {
          demandOption: true,
          alias: 'k',
          describe: 'private key',
          type: 'string',
        })
        .option('domain', {
          demandOption: true,
          alias: 'd',
          describe: 'domain',
          type: 'string',
        })
        .option('filePath', {
          demandOption: true,
          default: './records.json',
          alias: 'f',
          describe: 'file path to records file',
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
      setRecordsOnBNB(argv);
    },
  })
  .command({
    command: 'getbnbrecords <domain>',
    aliases: ['r'],
    describe: 'get domain records on BNB Chain',
    builder: (yargs) => {
      return yargs
        .option('domain', {
          demandOption: true,
          alias: 'd',
          describe: 'domain',
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
      getRecordsOnBNB(argv);
    },
  })
  .demandCommand()
  .completion();

yargs.parse();
