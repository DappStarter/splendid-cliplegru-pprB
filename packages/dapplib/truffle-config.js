require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lock bone system educate rare remain horn harvest lock bone soda'; 
let testAccounts = [
"0x32992ffdc106fd3f375190b62f9f50dd51195fa1a0933da84f24c6d5821dd6b3",
"0xd53072f37dd7f13d582eccc27631d96e808efce6e3a3c69a16f53c5447f20607",
"0x662696ea9189348fb283ac402e14f9354306cf59b5b80897ac2687d9fd6f65ac",
"0xf2dda4e3ef6caadc176d9e1a50d162d1cbe9f94b71a232338671f33b295219a9",
"0x3fc13aa5dd30bdb87e5a1a4b8467e46fab9f31662653bc11abdd18e475eb6c2f",
"0x02389af82ca0af18555bc5f7746db1ead3fc6165be889f74432770b606dacf38",
"0xdf18e09f9760ec6ef16054814522045efd2cf4ce339d981a2934cb2af39f0987",
"0xc26c46623db61966f93391cf69cac76d2a350444d7d77d8466d3010b9950a63f",
"0x14864e8c5bae09c299fbb91e34666d56ff6faee088f22ae2767bdf22af8238ca",
"0xb752e2e04d307b8897a000d800363daef0c735fc13c7efe6da076fc4ea913a9d"
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


