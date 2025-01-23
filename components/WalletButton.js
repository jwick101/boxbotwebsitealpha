"use client"; // This marks the file as a Client Component

import { useState } from 'react';

const WalletButton = () => {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setAccount(accounts[0]);
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    } else {
      alert('MetaMask is not installed!');
    }
  };

  return (
    <button
      onClick={connectWallet}
      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
    >
      {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : 'Connect Wallet'}
    </button>
  );
};

export default WalletButton;
