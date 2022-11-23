Miro

https://miro.com/app/board/uXjVPB0Z1NA=/?share_link_id=96595191908

#### (1) Parser

NodeJS component that takes a string, an return an array of hosts that can be resolved by resolvers.

```ts
Parser: (search: string) => host[]

// "bob.d & alice.d" => ["bob.d", "alice.d"]
// "bob.com & alice.d" => throw Error
// "bob.com && alice.d" => throw Error
// "bob.d & alice.d /path/" => throw Error
```

Example zone file :

```json
{
    "origin": "amazon",
    "records": [
        { "name": "amazon.com&apple.d", "type": "TXT", "data": "HASH=abddef" },
        { "name": "amazon.com&apple.d", "type": "A", "data": "12.13.14.15" }
    ]
},
```

#### (2) Resolvers

##### Resolver dappy

```ts
ResolverDappy: (host: string) => [RecordA, RecordTXT];
```

##### Resolver BNS

```ts
ResolverBNS: (host: string) => [RecordA, RecordTXT];
```

##### Resolver DNS

```ts
ResolverDNS: (host: string) => [RecordA, RecordTXT];
```

#### (3) Reconciler

Check if all hosts have resolved to exactly same hash (TXT) record and A record.

```ts
Reconciler: ([RecordA, RecordTXT][]) => boolean
```

#### (4) Requester

Do the request, check hash of whatever is sent back.

```ts
// pseudo code
Requester: (junctionhost: string) => {
    HTTP.get(
        headers: {
            host: junctionhost,
        },
        host: RecordA.data,
        path: '/,
    ).then(resp => {
        // resp
        /*
            <html>hello world</html>
        */
        // now check hash
        try {
            checkHash(RecordTXT.data, resp);
            // hash verified
        } catch (err) {
            // junction error, could not verify hash
        }
    })
}
```
