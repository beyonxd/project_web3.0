// https://eth-rinkeby.alchemyapi.io/v2/fOOCoo2yKSaSROx2pTxl6TluXZxXKdwX

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/fOOCoo2yKSaSROx2pTxl6TluXZxXKdwX',
      accounts: [ 'b4c5c4773362b8626b6c38b145745f032a9c6d697860ce572adf57fc2bbbb326' ]
    }
  }
}