## Junctions

A radically new and simple way to address content that need multiparty endorsement or validation, without intermediary.

### Problem

Every naming system in the digital world like DNS, or even blockchain name systems ENS or Unstoppable Domains work with unique targets, for example you visit _apple.com_, _uniswap.org_ or _apple.com_.

Let's say Apple and Amazon want to run a special communication or campaign together, they want to mutually endorse or assert a file or even an entire front-end application, how are they supposed to do it ? And how can users easily and without trusted intermediaries know about this campaign and who endorses it ?

- _apple.com/amazonandapple_ is bad, apple is in control, can change the content unilateraly.
- _amazon.com/amazonandapple_ has the same issue, the other way around.
- _amazonandapple.com_ this website is controlled by a trusted third party, or by both parties, this is bad in either case. **Signatories/parties cannot be directly verified by end user**, plus the DNS/webPKI is not secure.
- _amazonandapple.eth_ pointing to a smart contract / DAO / multisig : **Blockchain name systems do not change the deal at all**, users cannot verify who endorses the resource / data / HTML page that is resolved.

This is a problem, or a great limitation of expressiveness and innovation. Thousands, if not millions of legal structures, events, business consortiums, online communications, web3 projects have a collaborative dimension. Today this collaborative dimension cannot be expressed with the naming technologies that are available.

### Solution

Today in the context of the hackaton, we're presenting junctions. Junctions are a new and simple way to expose web services or any kind digital documents that need mutual endorsement, or validation by multiple parties.

Junctions can be verified directly on screen by the user, without intermediary.

We think junctions will be a brick of the decentralized future for web3 as well as many legacy industries. In DeFi for example, wouldn't you prefer to do multi-million dollars swap on a front-end **that you know is endorsed by two security companies plus three respected web3 companies** ?

Junctions make this possible, and make it very easy to do.

Junctions are agnostic vis-à-vis the name system that is used, we are the dappy team so junctions are compatible with our secure name system (\*.d), but also with BNB Chain and eventually the DNS. A junction can include hosts that point to different name system protocols.

Junctions also have a great security benefit, they remove single point of failure, because by definition multiple identities must agree on a web page, for it to load on the screen.

#### How do junctions work

`amazon.bsc & apple.bsc`

Junction is materialized by a new syntax in the address bar, and a "&" separator between the hosts/domains/identities. The user just lists the domains in the address bar and presses Enter (ex: "amazon.bsc & apple.bsc").

Then the browser, or whichever program wants to load a file through a junction address will put domains in alphabetical order, generate a 16 characters hash, and resolve all addresses through whichever name system the domain points to (currently dappy or BNB Chain).

For example `"amazon.bsc & apple.bsc"` hash is `6c1eb916b6a37488`, the browser will try to find two records for addresses `6c1eb916b6a37488.amazon.bsc` and `6c1eb916b6a37488.apple.bsc`.

We stick to conventions of the DNS, the browser will try to find a TXT record that contains the hash of the content, and a A record that contain the IP address from which the content will be loaded. **If all members of the junction have configured the same subdomain, and exactly the same records**, then content is loaded and checked against the hash.

### Facility

You just need nodeJS + npm (recent) installed.

### Tutorial (hackaton)

The tuto written for hackaton examination consists in :

- (1) Setting up the junction by choosing two `.bsc` domains, choosing HTML file to serve.
- (2) Registering two domains to simulate two parties registering a junction.
- (3) Resolution and check that everything works.

```
git clone https://github.com/fabcotech/junctions.git
cd junctions
npm i
```

#### (1) Setting up junction and hashes

Pick up two domains that you want (ex: `bob.bsc` and `alice.bsc`). And choose the html file that will be exposed through the junction (ex: `./examples/helloworld.html`).

```
npm run cli -- hashandconfig "alice.bsc & bob.bsc" --file ./examples/helloworld.html
```

You can see that a subdomain hash is displayed, it is unique for this junction. A data hash has also been created, and the two records are in `records.json` that need to be registered onchain alongside both domains.

#### (2) Domains registration

We'll use BNB Chain (testnet) and NodeReal provider to register our domain on the name system smart contract. Binance Name Service lacked documentation, we've created a minimal name system with ERC721. Note that it could also work on the dappy name system, and a junction may even include different name systems (ex: `bob.d & alice.bsc & jack.com`).

```

```

#### (3) Resolution

This steps simulates what a browser would do before displaying a HTML to the user. It is the most critical step. Under the hood it will :

- Parse the junction : `bob.bsc & alice.bsc -> ["bob.bsc", "alice.bsc]`.
- Fetch the records for each domain
- Make sure they match
- Load the file with HTTP (insecure)
- Check hash of the file
- Display HTML in the browser, or in the command line

To set a domain on BNB Testnet Chain, you will need an wallet with some BNB. Wallet private key will be needed and referenced as `<PRIVATE_KEY>` in script below. You can use this [faucet](https://testnet.bnbchain.org/faucet-smart) to get some BNB.

Run the dummy server that will serve your HTML
file on port 3001 (default)

```sh
npm run cli -- dummyserver --file ./examples/helloworld.html
```

Push records on BNB Testnet chain

```sh
npm run cli -- setbnbrecords <PRIVATE_KEY> bob.bsc --verbose
npm run cli -- setbnbrecords <PRIVATE_KEY> alice.bsc --verbose
```

Only resolution

```sh
npm run cli -- resolve "bob.bsc & alice.bsc" --verbose
```

Resolution + check of the HTML file + display on screen

```sh
npm run cli -- resolve "bob.bsc & alice.bsc" --verbose --load
```

You should see two "Successful" green logs, and see the HTML file printed on screen. It means that the data/file has been resolved, and the two members of the junction mutually endorse/attest it.

Congratulations !

### Team and comments

I'm Raph, lead dev of dappy project, we're a team passionate about security of web services, web3 and decentralized technologies. The last two years we've created a unique name system and webPKI technology that aim at addressing industry-wide security and privacy issues and limitations of current protocols. Junctions is an additional innovation above what we've already built.

The dev team is composed of myself and Paul Musso (dappy team).

```

```
