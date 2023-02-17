"use client";
import { useState, useEffect } from 'react';
// import Web3 from 'web3';
import { ethers } from 'ethers';

import { mainnet, polygon } from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { WagmiConfig, createClient, configureChains } from 'wagmi'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { Profile } from './profile'; 
import { SendTransaction } from './sendTransaction';

// // Set up Web3 using MetaMask provider
// const web3 = new Web3(window.ethereum);

// // Define payment amount and payment address
const paymentAmount = 1; // in USDC
const paymentAddress = '0xBD57BE43cCA68B987A42872FE8E5338cb2c3C22f'; // replace with your own payment address
const { chains, provider, webSocketProvider  } = configureChains(
  [mainnet, polygon],
  [alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ETHER_RPC }),alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_MATIC_RPC })],
)

const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
  ],
  provider,
  webSocketProvider,
})
export default function CryptoPayment(){

  return (
    <div>
    <WagmiConfig client={client}>
      <Profile />
      <SendTransaction/>
    </WagmiConfig>
    </div>
  )
}
// export default function CryptoPayment() {
//   // State for storing user's selected cryptocurrency
//   // State for storing user's selected cryptocurrency
//   const [userAccount, setUserAccount] = useState("Not Connected");
//   const [selectedCurrency, setSelectedCurrency] = useState('USDC');


//   const usdtokenAddress = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
//   let minABI = [
//   // transfer
//                                     {
//                             "constant": false,
//                             "inputs": [
//                               {
//                                 "name": "_to",
//                                 "type": "address"
//                               },
//                               {
//                                 "name": "_value",
//                                 "type": "uint256"
//                               }
//                             ],
//                             "name": "transfer",
//                             "outputs": [
//                               {
//                                 "name": "",
//                                 "type": "bool"
//                               }
//                             ],
//                             "type": "function"
//                           }
//                         ];
// const USDC_ABI =[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_account","type":"address"}],"name":"unBlacklist","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"minter","type":"address"}],"name":"removeMinter","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_currency","type":"string"},{"name":"_decimals","type":"uint8"},{"name":"_masterMinter","type":"address"},{"name":"_pauser","type":"address"},{"name":"_blacklister","type":"address"},{"name":"_owner","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"masterMinter","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"minter","type":"address"},{"name":"minterAllowedAmount","type":"uint256"}],"name":"configureMinter","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newPauser","type":"address"}],"name":"updatePauser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"minter","type":"address"}],"name":"minterAllowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pauser","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newMasterMinter","type":"address"}],"name":"updateMasterMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"isMinter","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newBlacklister","type":"address"}],"name":"updateBlacklister","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"blacklister","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"currency","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_account","type":"address"}],"name":"blacklist","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_account","type":"address"}],"name":"isBlacklisted","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"minter","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"burner","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"minter","type":"address"},{"indexed":false,"name":"minterAllowedAmount","type":"uint256"}],"name":"MinterConfigured","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"oldMinter","type":"address"}],"name":"MinterRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"newMasterMinter","type":"address"}],"name":"MasterMinterChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_account","type":"address"}],"name":"Blacklisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_account","type":"address"}],"name":"UnBlacklisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"newBlacklister","type":"address"}],"name":"BlacklisterChanged","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"newAddress","type":"address"}],"name":"PauserChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"previousOwner","type":"address"},{"indexed":false,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}];
//   let myTokenContract = new web3.eth.Contract(minABI, usdtokenAddress);
// //   async function sendTokens(recipientAddress, amount) {
// //   try {
// //     const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
// //     const fromAddress = accounts[0];
// //     const gasPrice = await web3.eth.getGasPrice();
// //     const gasLimit = "300000"; // Replace with the appropriate gas limit
// //     console.log(amount)
// //     const tx = myTokenContract.methods.transfer(recipientAddress, `${amount}`);

// //     const data = tx.encodeABI();
    

// //     const txData = {
// //       from: fromAddress,
// //       to: recipientAddress,
// //       data: data,
// //       gas: gasLimit,
// //       gasPrice: gasPrice,
// //     };
// //     console.log(txData)

// //     const txHash = await window.ethereum.request({
// //       method: "eth_sendTransaction",
// //       params: [txData],
// //     });

// //     console.log(`Transaction hash: ${txHash}`);
// //   } catch (error) {
// //     console.error(error);
// //   }
// // }


  
//     async function sendTokens(recipientAddress:string|undefined, amount:string|undefined,RPC:string|undefined) {
//   try {
//     const provider = new ethers.providers.JsonRpcProvider(RPC)
//     await window.ethereum.request()//Change chain
    
//     const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
//     const fromAddress = accounts[0];
//     let myTokenContract = new ethers.Contract(USDC_ABI, usdtokenAddress,fromAddress);
    

//     console.log(amount)
//     const tx = myTokenContract.transfer(recipientAddress, `${amount}`);

//     const receipt = await tx.wait()
//   } catch (error) {
//     console.error(error);
//   }
// }
//   const checkIfAccountExist = async ()=>{
//     try{
//         if(!window.ethereum) return console.log(`please install metamask`);
//         const accounts = await window.ethereum.request({method:"eth_requestAccounts"});
//         if (accounts[0]){
//             setUserAccount(accounts[0]);
            
//         }
//         else{
//             console.log(`No user Account`)
//             // console.log(accounts[0])
//         }
//     }
//     catch (e){
//         console.log(e)
//     }
// }

// // Connect Wallet
// const connectWallet = async ()=>{
//     try{
//         if(!window.ethereum) return console.log(`please install metamask`);
//         const accounts = await window.ethereum.request({method:"eth_requestAccounts"});
//         if (accounts[0]){
//             setUserAccount(accounts[0]);
//         }
//         else{
//             console.log(`No user Account`)
//             // console.log(accounts[0])
//         }
//     }
//     catch (e){
//         console.log(e)
//     }
// }
//   useEffect( () => {
//     // Request access to MetaMask if not already authorized
    
//     connectWallet()
//     checkIfAccountExist()
//   }, []);

//   // Handle payment submission
//   const handlePaymentSubmit = async () => {
//     if (selectedCurrency === 'USDC') {
//       // Initiate USDC payment transaction using Web3
//       // const usdcContractAddress = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48';
//       // const usdcContract = new web3.eth.Contract(USDC_ABI, usdcContractAddress);

//       const paymentInWei = web3.utils.toWei(paymentAmount.toString(), 'ether');
//       // await usdcContract.methods.transfer(  paymentAddress, paymentInWei).send();
//       await sendTokens(paymentAddress,paymentInWei , process.env.NEXT_PUBLIC_ETHER_RPC)
      
//     } else if (selectedCurrency === 'MATIC') {
//       // Initiate Matic payment transaction using Web3
//       const paymentInWei = web3.utils.toWei(paymentAmount.toString(), 'ether');
//       await web3.eth.sendTransaction({from:userAccount, to: paymentAddress, value: paymentInWei });
//     }
//   };

//   return (
//     <div>
//       <h1>Payment Page</h1>
//       <p>Select your preferred cryptocurrency:</p>
//       <button onClick={()=>connectWallet()}>
//                                     Connect Wallet
//       </button>
//       <div>
//         <button onClick={() => setSelectedCurrency('USDC')}>USDC</button>
//         <button onClick={() => setSelectedCurrency('MATIC')}>MATIC</button>
//       </div>
//       {selectedCurrency && (
//         <div>
//           <p>Payment amount: {paymentAmount} {selectedCurrency}</p>
//           <p>Payment address: {paymentAddress}</p>
//           <p>aldjnjac {userAccount}</p>
//           <button onClick={handlePaymentSubmit}>Submit Payment</button>
//         </div>
//       )}
//     </div>
//   );
// }
