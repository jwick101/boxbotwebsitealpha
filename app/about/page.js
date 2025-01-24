export default function About() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-300 px-6 py-12">
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold text-white mb-6 drop-shadow-lg">
            About BoxBot
          </h1>
          <p className="text-lg leading-relaxed">
            BoxBot is a revolutionary platform designed to empower filmmakers and
            industry professionals. Leveraging cutting-edge AI and blockchain
            technology, BoxBot offers tools such as tokenized film ownership,
            transparent earnings, and autonomous marketing solutions. Our
            strategic partnerships with industry leaders ensure BoxBot remains at
            the forefront of innovation.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Join us as we redefine the future of film financing, marketing, and
            transparency, setting new standards for fairness and creativity in the
            entertainment industry.
          </p>
        </div>
        <div className="mt-8">
          <a
            href="/"
            className="text-white bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }
  