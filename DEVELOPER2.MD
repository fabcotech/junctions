# Junctions, by dappy team

**Track: Security**

A new syntax in the address bar, and service discovery system that allows web services to be endorsed by multiple parties, without trusted intermediary.

You can resolve those junctions that we have set up for demo purpose.

```
npm run cli -- resolve "aapple.d & aamazon.d" -v -l
npm run cli -- resolve "uuniswap.d & ccurve.d & iinch.d" -v -l
npm run cli -- resolve "cchina.d & iindia.d & ffrance.d" -v -l
```

## Available resolvers

- [dappy](./src/lib/domainResolvers/dappy.ts):
  - `.d` domain names: domain names available on dappy d network (mainnet)
  - `.gamma` domain names: domain names available on dappy gamma network
- [dummy](./src/lib/domainResolvers/dummy.ts):
  - `.dummy` domain names: For test purposes, always resolve to [RecordA: 127.0.0.1, RecordTXT: HASH=7316723...]

## How to use it

Resolve junction between dummy domains

```
npm run cli -- resolve -v 'foo.dummy & bar.dummy'
```

Resolve and then load data (likely html file) and chec hash

```
npm run cli -- resolve -v --load 'foo.dummy & bar.dummy'
```

## Deploy NameSystem on BNB chain using NodeReal and Hardhat

```bash
npm install
PRIVATE_KEY=<your private key on bnb chain> npx hardhat run scripts/deploy.ts --network bnbtestnet
```

## CLI

#### Know hash and config

Two hashes must be known to create a junction :

- the subdomain hash, a 16 charaters long string that is unique for a given junction. For example hash of `"foo.d & bar.d"` is `"1dca7ed1f458746c"`.
- the data hash, a full hash of the data (often a html page).

This command outputs everything you need to know for setting up the junction. You can then update the records in dappy name system or any other name system.

```
# Get subdomain hash of a junction, and
# data hash of ./examples/helloworld.html file

npm run cli -- hashandconfig 'foo.d & bar.d' --file ./examples/helloworld.html

# Get subdomain hash of another junction, and
# data hash of myfile.html

npm run cli -- hashandconfig 'bob.d & alice.bns' --file ./myfile.html
```

#### Dummy server

This script helps you ge things tested quickly. It runs a dev/local web server that serves a html file.

```sh
# Serve default ./example/helloworld.html on port 3001
npm run cli -- dummyserver

# Serve ./example/aappleandaamazon.html on port 3001
npm run cli -- dummyserver --file "./examples/aappleandaamazon.html"
```

#### Resolve

Resolve a junction in verbose mode

```sh
# Check if foo.dummy and bar.dummy have configured the junction
npm run cli -- resolve 'foo.dummy & bar.dummy' -v

# Check if apple.d and aamazon.d have configured the junction
npm run cli -- resolve 'apple.d & aamazon.d' -v

# In addition, try to load the html file and check hash
npm run cli -- resolve 'apple.d & aamazon.d' --load -v
```

## Start dev

```sh
npm run build:all & npm start
```

or

In a dedicated terminal

```sh
npm run build:all
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
