import { HardhatUserConfig } from 'hardhat/config';
import process from 'process';
import '@nomicfoundation/hardhat-toolbox';

const config: HardhatUserConfig = {
  solidity: '0.8.17',
  networks: {
    localhost: {
      url: 'http://127.0.0.1:8545/',
    },
    bnbtestnet: {
      url: 'https://bsc-testnet.nodereal.io/v1/a49c22a98e96491085f76cfa15a3e901',
      accounts: [
        process.env.PRIVATE_KEY || '0x0000000000000000000000000000000000000000',
      ],
    },
  },
};

export default config;
