interface TokenDetails {
  address: string
  symbol: string
  decimals: number
  image: string
}

function token2Wallet(provider: any, tokens: TokenDetails[]) {
  try {
    for (let i = 0; i < tokens.length; i += 1) {
      provider.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: tokens[i].address,
            symbol: tokens[i].symbol,
            decimals: tokens[i].decimals,
            image: tokens[i].image,
          },
        },
      });
    }
  }
  catch (e) {
    // console.error(e);
    // throw e;
  }
}

export default token2Wallet;
