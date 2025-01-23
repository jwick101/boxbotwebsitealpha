import WalletButton from './components/WalletButton';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 via-white to-gray-100 text-gray-800 font-sans">
      <header className="absolute top-4 right-4">
        <WalletButton />
      </header>

      <div className="flex flex-col items-center">
        <Image
          src="/boxbot-logo.png"
          alt="BoxBot Logo"
          width={200}
          height={200}
          className="mb-4 drop-shadow-xl"
        />
        <h1 className="text-4xl font-extrabold text-red-600 mb-4 drop-shadow-sm">BoxBot</h1>
        <p className="text-center text-lg max-w-2xl text-gray-700 leading-relaxed">
          The revolutionary AI-powered and blockchain-driven platform transforming film
          financing and marketing through tokenized ownership, transparent revenue tracking,
          and autonomous campaign management.
        </p>
      </div>

      <div className="mt-8 space-y-4">
        <a
          href="/about"
          className="block w-64 text-center bg-black text-white font-semibold py-2 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
        >
          About
        </a>
        <a
          href="/roadmap"
          className="block w-64 text-center bg-black text-white font-semibold py-2 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Roadmap
        </a>
        <a
          href="https://x.com/boxbotai"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-64 text-center bg-black text-white font-semibold py-2 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
        >
          BoxBot Industry Data
        </a>
        <a
          href="/marketing"
          className="block w-64 text-center bg-black text-white font-semibold py-2 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
        >
          BoxBot Marketing
        </a>
        <a
          href="/revenue-tracking"
          className="block w-64 text-center bg-black text-white font-semibold py-2 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
        >
          BoxBot Rev Track
        </a>
        <a
          href="/trade-films"
          className="block w-64 text-center bg-black text-white font-semibold py-2 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Trade Films
        </a>
        <a
          href="/mint-film"
          className="block w-64 text-center bg-black text-white font-semibold py-2 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Mint Film
        </a>
      </div>
    </div>
  );
}
