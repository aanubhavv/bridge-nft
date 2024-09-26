require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    amoy: {
      url: 'https://rpc-amoy.polygon.technology/',
      accounts: ['0xedf372768b22aefe6ec422559f5d15026da3e34a2007c4524dd300e5c749f8b4'],
    },
    sepolia: {
      url: 'https://sepolia.infura.io/v3/4b2d65bf55dc4d6bb85ca9786bdf191f',
      accounts: ['0xedf372768b22aefe6ec422559f5d15026da3e34a2007c4524dd300e5c749f8b4'],
    },
  }
};
