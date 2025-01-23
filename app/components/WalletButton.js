"use client";

import { useState } from "react";
import { ethers } from "ethers";
import baseChain from "../../config/networks";

const WalletButton = () => {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const network = await provider.getNetwork();

        // Check if the wallet is on the Base network
        if (network.chainId !== baseChain.id) {
          try {
            // Request to switch network
            await window.ethereum.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: ethers.utils.hexValue(baseChain.id) }],
            });
          } catch (switchError) {
            // If the network is not added, add it
            if (switchError.code === 4902) {
              await window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [
                  {
                    chainId: ethers.utils.hexValue(baseChain.id),
                    chainName: baseChain.name,
                    rpcUrls: baseChain.rpcUrls,
                    blockExplorerUrls: baseChain.blockExplorerUrls,
                    nativeCurrency: baseChain.nativeCurrency,
                  },
                ],
              });
            } else {
              throw switchError;
            }
          }
        }

        // Connect the wallet and get the account
        const accounts = await provider.send("eth_requestAccounts", []);
        setAccount(accounts[0]);
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      alert("MetaMask is not installed!");
    }
  };

  return (
    <button
      onClick={connectWallet}
      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
    >
      {account
        ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}`
        : "Connect Wallet"}
    </button>
  );
};

export default WalletButton;
