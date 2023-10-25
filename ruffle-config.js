const HDWalletProvider = require('truffle-hdwallet-provider');

// Replace with your Infura project ID and wallet mnemonic
const infuraProjectId = 'YOUR_INFURA_PROJECT_ID';
const mnemonic = 'YOUR_WALLET_MNEMONIC';

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraProjectId}`),
      network_id: 4,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },
  compilers: {
    solc: {
      version: '^0.8.0', // Use a suitable Solidity version
    },
  },
};