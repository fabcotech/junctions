## Junctions

![Junctions, by dappy team](https://raw.githubusercontent.com/fabcotech/junctions/master/image.png)

`riot.d & epicgames.bsn & blizzard.d`
`bob.com & alice.d & mark.us`
`uniswap.d & dydx.d`

A radically new and simple way to expose content and front-ends with multiple endorsement, (validation by multiple ideneities), without intermediary.

You may want to check the [video with slides](https://www.youtube.com/watch?v=d7I0-0riRh8). The video is not mandatory for understanding the project, this document is self-suffiscient. Also the video does not include Facility / Tutorial.

Our implementation uses two name systems : [dappy](https://dappy.tech/) and a custom name system deployed on **BNB Chain**. **NodeReal** is used for sending EVM transactions, and **Starton** API system for the ERC721 template, and reading the records from BNB Chain.

### Problem

Every naming system in the digital world like DNS, or even blockchain name systems like dappy, ENS or Unstoppable Domains points to unique targets, for example you visit _apple.com_, _uniswap.org_ or _us.gov_.

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

`amazon.bns & apple.bns`

Junction is materialized by a new syntax in the address bar, and a "&" separator between the hosts/domains/identities. The user just lists the domains in the address bar and presses Enter (ex: "amazon.bns & apple.bns").

Then the browser, or whichever program wants to load a file through a junction address will put domains in alphabetical order, generate a 16 characters hash, and resolve all addresses through whichever name system the domain points to (currently dappy or BNB Chain).

For example `"amazon.bns & apple.bns"` hash is `6c1eb916b6a37488`, the browser will try to find two records for addresses `6c1eb916b6a37488.amazon.bns` and `6c1eb916b6a37488.apple.bns`.

We stick to conventions of the DNS, the browser will try to find a TXT record that contains the hash of the content, and a A record that contain the IP address from which the content will be loaded. **If all members of the junction have configured exactly the same records**, then content is loaded and checked against the hash.

Our examples, and the following tutorial works with two identities, junctions can scale to infinity, **20 companies can co-endorse a front-end application**. We can speculate that in some areas like web3, DeFi or critical B2B web portals distribution through junction can even become a mandatory feature for web apps to be trusted.

### Facility

You (1) need nodeJS(18) + npm (recent) installed, (2) a private key with funds on BNB chain (testnet).

### Tutorial (hackaton)

The tuto written for hackaton examination consists in :

- (1) Setting up the junction by choosing two `.bns` domains, choosing HTML file to serve.
- (2) Registering two domains to simulate two parties registering a junction.
- (3) Resolution and check that everything works.

```
git clone https://github.com/fabcotech/junctions.git
cd junctions
npm i
npm run build:all
```

#### (1) Setting up junction and hashes

Pick up two domains that you want (ex: `bob.bns` and `alice.bns`). And choose the html file that will be exposed through the junction (ex: `./examples/helloworld.html`).

```
npm run cli -- hashandconfig "alice.bns & bob.bns" --file ./examples/helloworld.html
```

You can see that a subdomain hash is displayed, it is unique for this junction. A data hash has also been created, and the two records are in `records.json` that need to be registered onchain alongside both domains.

#### (2) Domains registration

We'll use BNB Chain (testnet) and NodeReal provider to register our domain on the name system smart contract. Binance Name Service lacked documentation, we've created a minimal name system with ERC721. Note that it could also work on the dappy name system, and a junction may even include different name systems (ex: `bob.d & alice.bns & jack.com`).

To set a domain on BNB Testnet Chain, you will need an wallet with some BNB. Wallet private key will be needed and referenced as `<PRIVATE_KEY>` in script below. You can use this [faucet](https://testnet.bnbchain.org/faucet-smart) to get some BNB.

```sh
npm run cli -- setbnbrecords <PRIVATE_KEY> bob.bns --verbose
npm run cli -- setbnbrecords <PRIVATE_KEY> alice.bns --verbose

# Check that domain exists (and data)
npm run cli -- getbnbrecords bob.bns
```

#### (3) Resolution

This steps simulates what a browser would do before displaying a HTML to the user. It is the most critical step. Under the hood it will :

- Parse the junction : `bob.bns & alice.bns -> ["bob.bns", "alice.bns]`.
- Fetch the records for each domain
- Make sure they match
- Load the file with HTTP (insecure)
- Check hash of the file
- Display HTML in the browser, or in the command line

Run the dummy server that will serve your HTML
file on port 3001 (default)

```sh
npm run cli -- dummyserver --file ./examples/helloworld.html
```

Just resolve the junction, and see of all members match

```sh
npm run cli -- resolve "bob.bns & alice.bns" --verbose
```

Resolution + check of the HTML file + display on screen + open file in browser

```sh
npm run cli -- resolve "bob.bns & alice.bns" --verbose --load --open
```

You should see two "Successful" green logs, and see the HTML file printed on screen. It means that the data/file has been resolved, and the two members of the junction mutually endorse/attest it.

Congratulations !

### Business model, tokenomics, potential of growth

Junctions do not strictly have or need a token, nor do they have a direct business model, they have an indirect one. Junctions is a technology that can plug on existing name systems.

Junctions provide superior accuracy, security, and new levels of expressiveness for online services and content addressing. If people, companies and associations want to use junctions, they'll need domain names. Whatever is the tokenisation, renewal policy, and pricing of the underlying name systems, they will benefit from plugging onto this new standard.

We're happy to discuss the economic aspect anytime, nevertheless it may be out of scope to extend too much in this document.

### Team and comments

I'm Raph, lead dev of dappy project, we're a team passionate about security of web services, web3 and decentralized technologies. The last two years (dappy team) we've created a unique name system and webPKI technology that aims at addressing industry-wide security, privacy issues and limitations of current protocols. Junctions is an additional innovation above what we've already built.

The dev team is composed of myself and Paul Musso (dappy team).
