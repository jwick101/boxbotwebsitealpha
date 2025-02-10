require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_PROJECT_ID}`, // Update to match Infura URL
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
};
//