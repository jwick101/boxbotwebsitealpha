import WalletButton from './components/WalletButton';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-blue-900 text-gray-200 font-sans">
      <header className="absolute top-4 right-4">
        <WalletButton />
      </header>

      {/* Content Section */}
      <div className="flex flex-col items-center mt-20">
        <Image
          src="/boxbot-logo.png"
          alt="BoxBot Logo"
          width={200}
          height={200}
          className="mb-8 drop-shadow-lg"
        />
       <div className="flex flex-col items-center mt-20 text-center px-4">
  <Image
    src="/boxbot-logo.png"
    alt="BoxBot Logo"
    width={200}
    height={200}
    className="mb-8 drop-shadow-lg"
  />
  <h1 className="text-5xl font-extrabold text-white mb-4 leading-tight md:text-6xl">
    Welcome to BoxBot
  </h1>
  <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
    Revolutionizing the film industry with cutting-edge AI and blockchain tools. Discover tokenized film ownership, transparent earnings, and autonomous marketing solutions.
  </p>
</div>

      {/* Buttons Section */}
      <div className="space-y-4">
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
            className="block w-64 text-center bg-gray-800 text-gray-200 font-semibold py-3 rounded-lg hover:bg-blue-600 hover:shadow-lg hover:text-white transition-all duration-300 shadow-md"
          >
            {button.label}
          </a>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-20 w-full py-6 bg-gray-900 text-gray-300">
  <div className="flex justify-between items-center px-8">
    {/* Navigation Links */}
    <div className="flex space-x-6">
      <a href="/about" className="hover:text-blue-500">
        About
      </a>
      <a href="/roadmap" className="hover:text-blue-500">
        Roadmap
      </a>
      <a href="/trade-films" className="hover:text-blue-500">
        Trade Films
      </a>
    </div>
    {/* Base Logo */}
    <div className="flex items-center">
      <img
        src="/baselogo.png"
        alt="Base Logo"
        className="w-auto h-12 object-contain"
      />
    </div>
  </div>
  <p className="text-center text-sm mt-2">© 2025 BoxBot. All rights reserved.</p>
</footer>
    </div>
  );
}

