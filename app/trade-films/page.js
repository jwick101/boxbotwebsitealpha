"use client";

import { useState } from "react";

const films = [
  {
    name: "Inception",
    address: "0x1C4C...F463a3",
    marketCap: "$213.8m",
    change: "+0.06%",
    genre: "Sci-Fi",
    phase: "Post Production",
    poster: "/inception.jpg",
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
  const [activeTab, setActiveTab] = useState("All");

  const filterFilms = (phase) => {
    return phase === "All"
      ? films
      : films.filter((film) => film.phase === phase);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-blue-900 text-gray-200 p-8">
      {/* Navigation */}
      <div className="flex justify-between mb-8">
        <button
          onClick={() => (window.location.href = "/")}
          className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
        >
          Return to Home
        </button>
        <button
          onClick={() => (window.location.href = "/mint-film")}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition"
        >
          Mint Your Film
        </button>
      </div>

      {/* Page Header */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-white">Trade Films</h1>
        <p className="text-gray-400 mt-2">
          Discover and trade tokenized films on the BoxBot platform.
        </p>
      </header>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-8">
        {["All", "Development", "Production", "Post Production", "Coming Soon", "Released"].map(
          (phase) => (
            <button
              key={phase}
              onClick={() => setActiveTab(phase)}
              className={`px-4 py-2 rounded-md ${
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
      <div className="space-y-4">
        {filterFilms(activeTab).map((film, idx) => (
          <div
            key={idx}
            className="flex items-center p-4 bg-gray-800 rounded-lg shadow-lg"
          >
            {/* Poster */}
            <div className="w-20 h-28 flex-shrink-0 mr-4">
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
            <div className="text-center mr-4">
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
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500">
                Buy
              </button>
              <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500">
                Sell
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
