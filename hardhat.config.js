require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config({ path: __dirname + '/.env.local' });

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: '0.8.18',
	networks: {
		hardhat: {},
		sepolia: {
			url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.SEPOLIA_KEY}`,
			accounts: [process.env.WALLET_PK],
		},
	},
};
