"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import WalletButton from "../components/WalletButton";
import { Modal, Backdrop, Fade } from "@mui/material";

// Sample film data
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
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  // Filter films by phase
  const filterFilms = (phase) => {
    return phase === "All"
      ? films
      : films.filter((film) => film.phase === phase);
  };

  // Open film modal
  const openFilmModal = (film) => {
    setSelectedFilm(film);
    setOpenModal(true);
  };

  // Close film modal
  const closeFilmModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-blue-900 text-gray-200 font-sans p-6">
      {/* Header with WalletButton */}
      <header className="absolute top-4 right-4">
        <WalletButton />
      </header>

      {/* Page Header */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white">
          Trade Films
        </h1>
        <p className="text-gray-400 mt-2 text-sm md:text-base">
          Discover and trade tokenized films on the BoxBot platform.
        </p>
      </header>

      {/* Filters and Search Bar */}
      <div className="flex flex-wrap justify-between items-center mb-8">
        {/* Filters */}
        <div className="flex space-x-4">
          <select
            onChange={(e) => setActiveTab(e.target.value)}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg"
          >
            {["All", "Development", "Production", "Post Production", "Coming Soon", "Released"].map(
              (phase) => (
                <option key={phase} value={phase}>
                  {phase}
                </option>
              )
            )}
          </select>
        </div>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search films..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-64 px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      {/* Film Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filterFilms(activeTab)
          .filter((film) =>
            film.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((film, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer"
              onClick={() => openFilmModal(film)}
            >
              {/* Film Poster */}
              <div className="w-full h-48 relative">
                <Image
                  src={film.poster}
                  alt={`${film.name} Poster`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>

              {/* Film Details */}
              <div className="p-4">
                <h2 className="text-lg font-bold text-white">{film.name}</h2>
                <p className="text-sm text-gray-400">{film.genre}</p>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-lg font-semibold text-blue-500">{film.marketCap}</p>
                  <p
                    className={`text-sm ${
                      film.change.startsWith("+") ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {film.change}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
      </div>

      {/* Film Modal */}
      <Modal
        open={openModal}
        onClose={closeFilmModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={openModal}>
          <div className="bg-gray-800 rounded-lg p-6 max-w-2xl mx-auto my-12">
            {selectedFilm && (
              <>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                  {/* Film Poster */}
                  <div className="w-full md:w-1/3">
                    <Image
                      src={selectedFilm.poster}
                      alt={`${selectedFilm.name} Poster`}
                      width={300}
                      height={450}
                      className="rounded-lg"
                    />
                  </div>

                  {/* Film Details */}
                  <div className="w-full md:w-2/3">
                    <h2 className="text-2xl font-bold text-white">{selectedFilm.name}</h2>
                    <p className="text-sm text-gray-400">{selectedFilm.address}</p>
                    <p className="text-sm text-gray-500">{selectedFilm.genre}</p>
                    <div className="mt-4">
                      <p className="text-lg font-semibold">{selectedFilm.marketCap}</p>
                      <p
                        className={`text-sm ${
                          selectedFilm.change.startsWith("+") ? "text-green-400" : "text-red-400"
                        }`}
                      >
                        {selectedFilm.change}
                      </p>
                    </div>
                    <div className="mt-6 space-x-4">
                      <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500">
                        Buy
                      </button>
                      <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500">
                        Sell
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
