import WalletButton from './components/WalletButton';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 text-gray-800 font-sans">
      <header className="absolute top-4 right-4">
        <WalletButton />
      </header>

      <div className="flex flex-col items-center">
        <Image
          src="/boxbot-logo.png"
          alt="BoxBot Logo"
          width={200}
          height={200}
          className="mb-4"
        />
        <h1 className="text-4xl font-bold text-red-600 mb-4">BoxBot</h1>
        <p className="text-center text-lg max-w-2xl text-gray-700">
          The revolutionary AI-powered and blockchain-driven platform transforming film
          financing and marketing through tokenized ownership, transparent revenue tracking,
          and autonomous campaign management.
        </p>
      </div>

      <div className="mt-8 space-y-4">
        <a
          href="/about"
          className="block w-64 text-center bg-black text-white font-semibold py-2 rounded-lg hover:bg-gray-800"
        >
          About
        </a>
        <a
          href="/industry-data"
          className="block w-64 text-center bg-black text-white font-semibold py-2 rounded-lg hover:bg-gray-800"
        >
          BoxBot Industry Data
        </a>
        <a
          href="/marketing"
          className="block w-64 text-center bg-black text-white font-semibold py-2 rounded-lg hover:bg-gray-800"
        >
          BoxBot Marketing
        </a>
        <a
          href="/revenue-tracking"
          className="block w-64 text-center bg-black text-white font-semibold py-2 rounded-lg hover:bg-gray-800"
        >
          BoxBot Rev Track
        </a>
        <a
          href="/trade-films"
          className="block w-64 text-center bg-black text-white font-semibold py-2 rounded-lg hover:bg-gray-800"
        >
          Trade Films
        </a>
        <a
          href="/mint-film"
          className="block w-64 text-center bg-black text-white font-semibold py-2 rounded-lg hover:bg-gray-800"
        >
          Mint Film
        </a>
      </div>
    </div>
  );
}

