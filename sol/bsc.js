const Web3 = require('web3');
const fs = require('fs');
const path = require('path');
const solc = require('solc');
const {
  privateKey,
  address,
  web3ProviderHttps,
  contractAddress,
} = require('./env.js');

const web3BSCTestnet = new Web3(web3ProviderHttps);

web3BSCTestnet.eth.getBalance(address).then((b) => {
  console.log('balance ', b);
});
web3BSCTestnet.eth.getTransactionCount(address).then((b) => {
  console.log('transaction count ', b);
});
web3BSCTestnet.eth.accounts.wallet.add(privateKey);
web3BSCTestnet.eth.getGasPrice().then((b) => {
  console.log('gas price ', b);
});

const sol = fs.readFileSync(path.join(__dirname, './namesystem.sol'), 'utf8');
const input = {
  language: 'Solidity',
  sources: {
    'namesystem.sol': { content: sol },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*'],
      },
    },
  },
};
const output = JSON.parse(solc.compile(JSON.stringify(input)));

const abi = output.contracts['namesystem.sol'].NameSystem.abi;

const deploy = async () => {
  const bytecode =
    output.contracts['namesystem.sol'].NameSystem.evm.bytecode.object;

  notorizedContract = new web3BSCTestnet.eth.Contract(abi);

  const signedTransaction = await web3BSCTestnet.eth.accounts.signTransaction(
    {
      from: address,
      gasPrice: '12000000000',
      gas: '1000000',
      data: bytecode,
    },
    privateKey
  );

  const sentTx = web3BSCTestnet.eth.sendSignedTransaction(
    signedTransaction.rawTransaction
  );

  sentTx.on('confirmation', function (confirmation) {
    console.log('on confirmation');
    console.log(confirmation);
    if (confirmation === 4) {
      process.exit(0);
    }
  });

  sentTx.on('transactionHash', function (hash) {
    console.log('on transactionHash');
    console.log(hash);
  });

  sentTx.on('receipt', (receipt) => {
    console.log('on receipt');
    console.log(receipt);
    console.log('contract address (to put in env.js');
    console.log(receipt.contractAddress);
  });
  sentTx.on('error', (err) => {
    console.log('on error');
    console.log(err);
  });
};

const read = async () => {
  if (typeof contractAddress !== 'string') {
    console.log('missing env.contractAddress');
    process.exit(1);
  }

  const contract = new web3BSCTestnet.eth.Contract(abi, contractAddress);
  let val;
  try {
    val = await contract.methods.getMessage().call();
  } catch (err) {
    console.log('Failed to get USDT Ethereum balance');
    throw err;
  }
  console.log(val);
};

if (process.argv.includes('--deploy')) {
  deploy();
} else if (process.argv.includes('--read')) {
  read();
}
