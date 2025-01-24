'use client';

import { useState } from 'react';
import { BrowserProvider } from 'ethers';
import baseChain from '../../config/networks';

const WalletButton = () => {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const provider = new BrowserProvider(window.ethereum);
        const accounts = await provider.send('eth_requestAccounts', []);
        setAccount(accounts[0]);

        // Check if the wallet is on the Base network
        const network = await provider.getNetwork();
        if (network.chainId !== baseChain.chainId) {
          alert(`Please switch to the Base network in your wallet.`);
        }
      } catch (error) {
        console.error('Error connecting to wallet:', error);
      }
    } else {
      alert('MetaMask is not installed. Please install it to use this feature.');
    }
  };

  return (
    <button onClick={connectWallet} className="bg-blue-500 text-white p-2 rounded">
      {account ? `Connected: ${account}` : 'Connect Wallet'}
    </button>
  );
};

export default WalletButton;

