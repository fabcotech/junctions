# Junctions

A new syntax in the address bar, and service discovery system that allows web services to be endorsed by multiple parties, without trusted intermediary.

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

## CLI

### Description

```
junction [command] [options]

Commands :
  junctions resolve <junction>  Resolve junction                     [alias : r]
  junctions dummyserver         Start a dummy http server            [alias : s]
  junctions hashandconfig       Generate junction records for Dappy  [alias : c]
  junctions completion          generate completion script

Options :
  --help     Affiche l'aide                                            [boolean]
  --version  Affiche le numéro de version                              [boolean]
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
junctions hashandconfig --ip 127.0.0.1 --host "apple&amazon" --port 3001
```

## Run tests

```sh
npm test
npm test:types
```
