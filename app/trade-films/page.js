export default function TradeFilmsPage() {
    const films = [
      {
        title: "Ready Player One",
        symbol: "$RP1",
        address: "0x1C4C...F463a3",
        genre: "Productivity",
        marketCap: "$213.8m",
        change: "+0.06%",
        thumbnail: "/path-to-thumbnail1.jpg",
      },
      {
        title: "aixbt",
        symbol: "$AIXBT",
        address: "0x4F9F...d1A825",
        genre: "Productivity",
        marketCap: "$407.19m",
        change: "-12.3%",
        thumbnail: "/path-to-thumbnail2.jpg",
      },
      // Add more film data here...
    ];
  
    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-blue-900 text-gray-200 p-8">
        {/* Page Header */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-white">Trade Films</h1>
          <p className="text-gray-400 mt-2">
            Explore and trade tokenized films on the BoxBot marketplace.
          </p>
        </header>
  
        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex space-x-4">
            <button className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Market Cap
            </button>
            <button className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Volume
            </button>
            <button className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Top Performers
            </button>
          </div>
          <input
            type="text"
            placeholder="Search films..."
            className="w-full md:w-1/3 p-2 rounded bg-gray-800 text-gray-200 mt-4 md:mt-0"
          />
        </div>
  
        {/* Film List */}
        <div className="space-y-4">
          {films.map((film, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-lg"
            >
              {/* Film Details */}
              <div className="flex items-center space-x-4">
                <img
                  src={film.thumbnail}
                  alt={film.title}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div>
                  <h2 className="font-bold">{film.title}</h2>
                  <p className="text-gray-400 text-sm">{film.symbol}</p>
                  <p className="text-sm text-blue-400">{film.address}</p>
                  <p className="text-sm text-gray-500">{film.genre}</p>
                </div>
              </div>
  
              {/* Market Data */}
              <div className="text-right">
                <p className="font-bold">{film.marketCap}</p>
                <p
                  className={`text-sm ${
                    film.change.startsWith("+") ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {film.change}
                </p>
              </div>
  
              {/* Actions */}
              <div className="flex space-x-2">
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500">
                  Buy
                </button>
                <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500">
                  Sell
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  