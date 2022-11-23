# Junctions

A new syntax in the address bar, and service discovery system that allows web services to be endorsed by multiple parties, without trusted intermediary.

## Available resolvers

- [dappy](./src/lib/domainResolvers/dappy.ts):
  - `.d` domain names: domain names available on dappy d network (mainnet)
  - `.gamma` domain names: domain names available on dappy gamma network
- [dummy](./src/lib/domainResolvers/dummy.ts):
  - `.dummy` domain names: For test purposes, always resolve to [RecordA: 127.0.0.1, RecordTXT: HASH=7316723...]

## How to use it

Resolve junction between dummy domains

```
npx @fabcotech/junctions resolve -v 'foo.dummy & bar.dummy'
```

Resolve and then load data (likely html file) and chec hash

```
npx @fabcotech/junctions resolve -v --load 'foo.dummy & bar.dummy'
```

## Deploy NameSystem on BSC using NodeReal and Hardhat

```bash
npm install
PRIVATE_KEY=<your private key on bsc> npx hardhat run src/sol/scripts/deploy.ts --network bsctestnet
```

## CLI

### Description

```

npx @fabcotech/junctions [command] [options]

Commands :
npx @fabcotech/junctions resolve <junction> Resolve junction [alias : r]
npx @fabcotech/junctions dummyserver Start a dummy http server [alias : s]
npx @fabcotech/junctions hashandconfig <junction> Generate junction records [alias : c]
npx @fabcotech/junctions completion generate completion script

Options :
--help Affiche l'aide [booléen]
--version Affiche le numéro de version [booléen]

```

### Commands

Resolve a junction in verbose mode

```sh
npx @fabcotech/junctions resolve 'foo.dummy & bar.dummy' -v
```

Dummy server that returns "Hello World !" on localhost:3001.

```sh
npx @fabcotech/junctions dummyserver
```

Get the hash, and what the records must be for a given endpoint.

```sh
npx @fabcotech/junctions hashandconfig 'foo.dummy & bar.dummy' --ip 127.0.0.1 --host "foo&bar" --port 3001
```

## Start dev

```sh
npm run build & npm start
```

or

In a dedicated terminal

```sh
npm run build:watch
```

and another terminal

```sh
npm start
```

## Start server

```sh
npm run start:server
```

## Run tests

```sh
npm test
npm test:types
```

## Example files

```
11inch&ccurve&&uuniswap.html
42e85a5c3638e8b45e30d022d513f20841adda36699cabe9cfd0b105c6424c0f

aapple&aamazon.html
adb4191dc2e52913a359dcc2c8aaaacd8f7f4b541f0d4380b7c72b2aa182d9bf

ffrance&cchina&&iindia.html
cd146eb5b32f1df04e702bd9c4eaecb79ecd02e224d03df78d7190ae4382e5f6
```
