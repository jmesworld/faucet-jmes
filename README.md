# JMES Testnet Faucet


JMES Testnet Faucet is a client tool that allows anyone to easily request a nominal amount of JMES assets for testing purposes. 

**WARNING**: Tokens recieved over the faucet are not real assets and have no market value.


## Get tokens on JMES testnets

Using the testnets is really easy. Simply go to https://faucet.jmes.cloud, chose your network and input your testnet address. 

## Usage

Build the docker image.

```bash
docker build -t faucet .
```

Run it with the mnemonic and recaptcha key as env vars.

```bash
docker run -p 3000:3000 \
    -e MNEMONIC=$MY_MNEMONIC \
    -e RECAPTCHA_KEY=$RECAPTCHA_KEY \
    -e PORT=8080 \  # default to 3000
    -e LCD_URL=$LCD_URL \
    -e CHAIN_ID=$CHAIN_ID \
    faucet
```
