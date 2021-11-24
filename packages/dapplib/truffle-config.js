require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glide fringe skull drift response rifle hospital install crew fresh speed'; 
let testAccounts = [
"0x76de612879c09a3c3287c72506900cd2a627470cdac1192bd1cda7bb514a2a40",
"0x9d0dff2dc2479dd3e323616a0c202fdd21caaf11aed86920279866a0e2adaf5f",
"0xda0b0e58909fdc56570cfd4aba1577d9e1689b0e455d68cdae6c9ce42fa37345",
"0x6b4dedbfd3647f92a325327111da80928de5b3ad0dc5e07e1c5075ed9f3fac01",
"0x86e56ca6264e7ccf56ac635e7e53d82ef3c409bec3e9c7303b244a680b5fce66",
"0xcec828bbafccc07682d8f8cdc1db7c1c1e552bbd4499b7a87652173d83cc2683",
"0x4cf90b34ba3a4f9fdb38e11421f73f613577f55b51dd72fbf6b8d021b5d077eb",
"0x6e8afbc9784317cb90496d97949adeb1b8fbb45b1a9fedd62adeb98523651f71",
"0xffad346fd8146d86a6dac0901733689ea1100511685c968c48862b6c14294243",
"0x5432976414fad2854aad1d2afe41cd0d5907fd8ebed5d1a2c985ba8c0819f64b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


