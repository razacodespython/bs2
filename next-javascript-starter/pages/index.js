import { useAddress, useDisconnect, useMetamask, useContract } from '@thirdweb-dev/react';
import { useEffect, useState } from 'react';
import { BigNumber } from 'ethers';
import Web3 from "web3";

export default function Home() {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();
  const { contract } = useContract("0xE0ab3D51a3374c371c5D8a39Dc1418FE399ae2EE");
  const [myWaves, setMywaves] = useState("");


useEffect(() => {
  if (contract) {
    (async () => {
      const totalWaves = await contract?.functions?.getTotalWaves();
      setMywaves(Web3.utils.hexToNumberString(totalWaves?._hex));
    })();
  }
}, );

const createWave = async () => {
  try{
    console.log("trying")
    await contract?.functions?.wave()
    console.log(contract)
    // getWaves()
    console.log("trying again")
  } catch(error){
    console.log("error:", error)
  }
}

  return (
    <div>
      {address ? (
        <>
          <button onClick={disconnectWallet}>Disconnect Wallet</button>
          <p>Your address: {address}</p>
          <h1> {myWaves} </h1>
          <button onClick={createWave}>create a wave</button>
        </>
      ) : (
        <button onClick={connectWithMetamask}>Connect with Metamask</button>
      )}
    </div>
  );
}
