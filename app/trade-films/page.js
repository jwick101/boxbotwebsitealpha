"use client";

import { useEffect, useState } from "react";
import { ethers } from "ethers";

const films = [
  {
    name: "Inception",
    address: "0x1C4C...F463a3",
    marketCap: "$213.8m",
    change: "+0.06%",
    genre: "Sci-Fi",
    phase: "Post Production",
    poster: "/inception.jpg", // Placeholder poster
  },
  {
    name: "Avatar",
    address: "0x55CD...247ee4",
    marketCap: "$2.847b",
    change: "-1.5%",
    genre: "Adventure",
    phase: "Production",
    poster: "/avatar.jpg",
  },
  {
    name: "The Dark Knight",
    address: "0xab96...5d9c0D",
    marketCap: "$1.005b",
    change: "+2.3%",
    genre: "Action",
    phase: "Released",
    poster: "/dark-knight.jpg",
  },
  {
    name: "Titanic",
    address: "0x4F9F...d1A825",
    marketCap: "$2.187b",
    change: "-0.9%",
    genre: "Drama",
    phase: "Released",
    poster: "/titanic.jpg",
  },
  {
    name: "Avengers: Endgame",
    address: "0x7318...8F4870",
    marketCap: "$2.798b",
    change: "+0.5%",
    genre: "Superhero",
    phase: "Released",
    poster: "/endgame.jpg",
  },
  {
    name: "Interstellar",
    address: "0x64C5...5BBA8E",
    marketCap: "$701.7m",
    change: "+3.1%",
    genre: "Sci-Fi",
    phase: "Post Production",
    poster: "/interstellar.jpg",
  },
  {
    name: "Jurassic Park",
    address: "0x9187...77B42F",
    marketCap: "$1.033b",
    change: "-1.2%",
    genre: "Adventure",
    phase: "Coming Soon",
    poster: "/jurassic-park.jpg",
  },
];

export default function TradeFilmsPage() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const filmsPerPage = 6;

  // Fetch films from API (replace with your API endpoint)
  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await fetch("/api/films");
        const data = await response.json();
        setFilms(data);
      } catch (error) {
        console.error("Error fetching films:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFilms();
  }, []);

  // Filter films by phase
  const filterFilms = (phase) => {
    return phase === "All"
      ? films
      : films.filter((film) => film.phase === phase);
  };

  // Pagination logic
  const indexOfLastFilm = currentPage * filmsPerPage;
  const indexOfFirstFilm = indexOfLastFilm - filmsPerPage;
  const currentFilms = filterFilms(activeTab)
    .filter((film) =>
      film.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(indexOfFirstFilm, indexOfLastFilm);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Connect wallet
  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      setWalletAddress(address);
    } else {
      alert("Please install MetaMask!");
    }
  };

  // Buy film (integrate with your smart contract)
  const buyFilm = async (filmAddress) => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(filmAddress, filmTokenABI, signer);

      const tx = await contract.buyFilm({ value: ethers.utils.parseEther("0.1") }); // Replace with actual price
      await tx.wait();
      alert("Film purchased successfully!");
    } catch (error) {
      console.error("Error buying film:", error);
    }
  };

  if (loading) {
    return <div className="text-center text-gray-400">Loading films...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-blue-900 text-gray-200 p-4 md:p-8">
      {/* Navigation */}
      <div className="flex justify-between mb-8">
        <button
          onClick={() => (window.location.href = "/")}
          className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition text-sm md:text-base"
        >
          Return to Home
        </button>
        <button
          onClick={connectWallet}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition text-sm md:text-base"
        >
          {walletAddress ? `Connected: ${walletAddress.slice(0, 6)}...` : "Connect Wallet"}
        </button>
      </div>

      {/* Page Header */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white">
          Trade Films
        </h1>
        <p className="text-gray-400 mt-2 text-sm md:text-base">
          Discover and trade tokenized films on the BoxBot platform.
        </p>
      </header>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search films..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full md:w-64 px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 mb-8"
      />

      {/* Tabs */}
      <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 mb-8">
        {["All", "Development", "Production", "Post Production", "Coming Soon", "Released"].map(
          (phase) => (
            <button
              key={phase}
              onClick={() => setActiveTab(phase)}
              className={`px-4 py-2 text-sm md:text-base rounded-md ${
                activeTab === phase
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-blue-500"
              } transition`}
            >
              {phase}
            </button>
          )
        )}
      </div>

      {/* Film List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentFilms.map((film, idx) => (
          <div
            key={idx}
            className="flex flex-col p-4 bg-gray-800 rounded-lg shadow-lg"
          >
            {/* Poster */}
            <div className="w-full h-48 mb-4">
              <img
                src={film.poster}
                alt={`${film.name} Poster`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Film Details */}
            <div className="flex-1">
              <h2 className="text-lg font-bold">{film.name}</h2>
              <p className="text-sm text-gray-400">{film.address}</p>
              <p className="text-sm text-gray-500">{film.genre}</p>
            </div>

            {/* Market Cap and Change */}
            <div className="mt-4">
              <p className="text-lg font-semibold">{film.marketCap}</p>
              <p
                className={`text-sm ${
                  film.change.startsWith("+") ? "text-green-400" : "text-red-400"
                }`}
              >
                {film.change}
              </p>
            </div>

            {/* Buy and Sell Buttons */}
            <div className="flex justify-between mt-4">
              <button
                onClick={() => buyFilm(film.address)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 text-sm"
              >
                Buy
              </button>
              <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 text-sm">
                Sell
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: Math.ceil(filterFilms(activeTab).length / filmsPerPage) }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => paginate(idx + 1)}
            className={`px-4 py-2 text-sm rounded-md ${
              currentPage === idx + 1 ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-blue-500"
            }`}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
