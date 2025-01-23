import WalletButton from '../components/WalletButton';

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-blue-500 text-white">
      <h1 className="text-3xl font-bold mb-4">Hello, Tailwind is working!</h1>
      <WalletButton />
    </div>
  );
}
