import WalletButton from './components/WalletButton';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-blue-500 text-white">
      <Image
        src="/boxbot-logo.png"
        alt="BoxBot Logo"
        width={200}
        height={200}
        className="mb-8"
      />
      <h1 className="text-3xl font-bold mb-4">Welcome to BoxBotAi</h1>
      <WalletButton />
      <div className="mt-8 space-y-4">
        <a
          href="/about"
          className="block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded"
        >
          About
        </a>
        <a
          href="/marketing"
          className="block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded"
        >
          Marketing
        </a>
        <a
          href="/revenue-tracking"
          className="block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded"
        >
          Revenue Tracking
        </a>
        <a
          href="/trade-films"
          className="block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded"
        >
          Trade Films
        </a>
      </div>
    </div>
  );
}

