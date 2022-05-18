import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { BigNumber, ethers } from 'ethers';
import dotenv from 'dotenv';
import Web3 from "web3";

dotenv.config();

// const provider = new ethers.Wallet(
//     // Your wallet private key
//     process.env.PRIVATE_KEY,
//     // RPC URL FROM QUICKNODE ENTER HERE👇
//     ethers.getDefaultProvider(
//       ''
//     )
//   );
const provider = ''
const sdk = new ThirdwebSDK(provider);
const contract = await sdk.getContract("0xE0ab3D51a3374c371c5D8a39Dc1418FE399ae2EE");

async function waves () {
    const thhis = await contract.functions.getTotalWaves()
    // console.log(Web3.utils.hexToNumberString(thhis._hex))
    console.log(BigNumber.from(thhis).toString())
}


waves()

async function wavescreate () {
    
    const thhis = await contract.functions.wave()
}

// wavescreate()