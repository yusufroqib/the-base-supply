const { vars } = require("hardhat/config");

require("@nomicfoundation/hardhat-toolbox");






const ALCHEMY_API_KEY = vars.get("ALCHEMY_API_KEY");


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    baseSepolia: {
      url: `https://base-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: vars.has("PIVATE_KEY") ? [vars.get("PIVATE_KEY")] : [],
    },
    baseMainnet: {
      url: `https://base-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: vars.has("PIVATE_KEY") ? [vars.get("PIVATE_KEY")] : [],
    },
  },
};
