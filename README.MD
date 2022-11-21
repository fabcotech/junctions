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

Dummy server that returns "Hello World !" on localhost:3001.

```sh
npm run start:cli dummyserver
```

Get the hash, and what the records must be for a given endpoint.

```sh
npm run start:cli hashandconfig -- --ip 127.0.0.1 --host "apple&amazon" --port 3001
```
