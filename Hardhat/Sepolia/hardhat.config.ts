import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const { ETHERSCAN_API_KEY, PRIVATE_KEY, SEPOLIA_URL_KEY, CORE_SCAN } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.30",
  networks: {
    sepolia: {
      url: SEPOLIA_URL_KEY,
      accounts: [`${PRIVATE_KEY}`],
      chainId: 11155111,
    },
    coreDao: {
      url: "https://rpc.test2.btcs.network",
      accounts: [`${PRIVATE_KEY}`],
      chainId: 1114,
      gasPrice: 1000000000,
    }
  },
  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_API_KEY?.toString() || "",
      coreDao: ETHERSCAN_API_KEY?.toString() || "",
    },
    customChains: [
      {
        network: "coreDao",
        chainId: 1114,
        urls: {
          apiURL: "https://api.test2.btcs.network/api",
          browserURL: "https://scan.test2.btcs.network",
        },
      },
    ],
  },
};

export default config;
