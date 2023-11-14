const chainId = process.env.REACT_APP_CHAIN_ID;
const faucetURL = process.env.REACT_APP_FAUCET_API_URL;

export const networks = [
  {
    chainId: chainId,
    faucetUrl: faucetURL,
  },
];
