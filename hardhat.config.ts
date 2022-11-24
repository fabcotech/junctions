import { HardhatUserConfig } from 'hardhat/config';
import process from 'process';
import '@nomicfoundation/hardhat-toolbox';

const fakePrivateKey =
  '4c6650536294b532dbd71e703622a59e5d1745b3d2861797ef653e620a03bd65';

const config: HardhatUserConfig = {
  solidity: '0.8.17',
  networks: {
    localhost: {
      url: 'http://127.0.0.1:8545/',
    },
    bnbtestnet: {
      url: 'https://bsc-testnet.nodereal.io/v1/a49c22a98e96491085f76cfa15a3e901',
      accounts: [process.env.PRIVATE_KEY || fakePrivateKey],
    },
  },
};

export default config;
