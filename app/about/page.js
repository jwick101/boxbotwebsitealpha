"use client";

import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-800 p-8">
      {/* Back to Home Button */}
      <div className="mb-8">
        <button
          onClick={() => router.push("/")}
          className="bg-red-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-red-500 transition"
        >
          Back to Home
        </button>
      </div>

      {/* About Content */}
      <h1 className="text-4xl font-extrabold text-red-600 text-center mb-8">
        About BoxBot
      </h1>
      <div className="max-w-3xl mx-auto text-lg leading-relaxed">
        <p className="mb-4">
          BoxBot is revolutionizing the film industry with cutting-edge AI and
          blockchain technologies. As a trailblazing platform, we empower
          filmmakers, studios, and film enthusiasts with tools to create,
          market, and trade tokenized films while ensuring transparency and
          fairness in earnings and reviews.
        </p>
        <p className="mb-4">
          Our core features include:
          <ul className="list-disc list-inside mt-2">
            <li>
              <strong>Autonomous AI-Powered Marketing:</strong> AI-driven tools
              for personalized and impactful marketing campaigns.
            </li>
            <li>
              <strong>Blockchain-Audited Earnings Reports:</strong> A
              transparent system to track and report film revenue, ensuring fair
              compensation.
            </li>
            <li>
              <strong>Film Tokenization and Trading:</strong> Enabling
              fractional ownership and a dynamic marketplace for trading
              tokenized films.
            </li>
            <li>
              <strong>AI-Driven Analytics:</strong> Unbiased film ratings and
              reviews based on advanced algorithms and verified data.
            </li>
          </ul>
        </p>
        <p>
          With strategic partnerships underway with leading players in the film
          industry, BoxBot is positioned to redefine how films are financed,
          marketed, and distributed. Whether you’re an indie filmmaker or a
          major studio, BoxBot provides innovative solutions to meet the
          challenges of a rapidly evolving industry.
        </p>
      </div>
    </div>
  );
}
