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
        <h1 className="text-4xl font-extrabold text-red-600 mb-4 drop-shadow-sm">
          Welcome to BoxBot
        </h1>
        <p className="text-center text-lg max-w-2xl text-gray-700 leading-relaxed mb-8">
          Revolutionizing the film industry with cutting-edge AI and blockchain tools.
          Discover tokenized film ownership, transparent earnings, and autonomous marketing
          solutions.
        </p>
      </div>

      {/* Buttons Section */}
      <div className="mt-8 space-y-4">
        {[
          { label: 'About', href: '/about' },
          { label: 'Roadmap', href: '/roadmap' },
          { label: 'BoxBot Industry Data', href: 'https://x.com/boxbotai', external: true },
          { label: 'BoxBot Marketing', href: '/marketing' },
          { label: 'BoxBot Rev Track', href: '/revenue-tracking' },
          { label: 'Trade Films', href: '/trade-films' },
          { label: 'Mint Film', href: '/mint-film' },
        ].map((button, idx) => (
          <a
            key={idx}
            href={button.href}
            target={button.external ? '_blank' : '_self'}
            rel={button.external ? 'noopener noreferrer' : ''}
            className="block w-64 text-center bg-black text-white font-semibold py-2 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
          >
            {button.label}
          </a>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-16 w-full text-center py-4 bg-gray-800 text-white">
        <div className="flex justify-center space-x-4">
          <a href="/about" className="hover:underline">
            About
          </a>
          <a href="/roadmap" className="hover:underline">
            Roadmap
          </a>
          <a href="/trade-films" className="hover:underline">
            Trade Films
          </a>
        </div>
        <p className="text-sm mt-2">© 2025 BoxBot. All rights reserved.</p>
      </footer>
    </div>
  );
}
