# Junctions

A new syntax in the address bar, and service discovery system that allows web services to be endorsed by multiple parties, without trusted intermediary.

## How to install

```
npm i -g @fabcotech/junctions
```

## CLI

### Description

```
junction [command] [options]

Commandes :
  junctions resolve <junction>        Resolve junction               [alias : r]
  junctions dummyserver               Start a dummy http server      [alias : s]
  junctions hashandconfig <junction>  Generate junction records      [alias : c]
  junctions completion                generate completion script

Options :
  --help     Affiche l'aide                                            [booléen]
  --version  Affiche le numéro de version                              [booléen]
```

### Commands

Resolve a junction in verbose mode

```sh
junctions resolve 'foo.dummy & bar.dummy' -v
```

Dummy server that returns "Hello World !" on localhost:3001.

```sh
junctions dummyserver
```

Get the hash, and what the records must be for a given endpoint.

```sh
junctions hashandconfig 'foo.dummy & bar.dummy' --ip 127.0.0.1 --host "foo&bar" --port 3001
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
