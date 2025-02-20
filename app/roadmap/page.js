"use client";

import { useRouter } from "next/navigation";

export default function Roadmap() {
  const router = useRouter();

  const roadmap = [
    {
      title: "Phase 1: MVP Development",
      description:
        "We have successfully deployed an autonomous AI-powered Twitter agent using Virtuals, G.A.M.E. Protocol, and OpenAI. BoxBot provides unbiased, real-time film industry and box office data, positioning itself as a reliable and innovative resource for film enthusiasts and professionals.",
    },
    {
      title: "Phase 2: Token-Accessed Site Launch",
      description: `
        BoxBot is actively integrating blockchain tools to deliver a groundbreaking suite for indie filmmakers:
        - Blockchain-Audited Earnings Reports: Fully transparent, blockchain-audited reports combat distributor corruption and ensure fair compensation.
        - AI-Generated Honest Film Ratings: Leveraging AI algorithms to provide unbiased ratings based on audience data and box office performance.
        - Unbiased Film Reviews and Ratings: A decentralized platform for reviews, free from traditional industry bias.
        - Autonomous Film Marketing Service: An innovative, AI-driven marketing platform to create and execute promotional campaigns, streamlining film promotion for indie filmmakers.
      `,
    },
    {
      title: "Phase 3: Future-Focused Innovations",
      description: `
        BoxBot continues to disrupt the film industry with cutting-edge applications:
        - Film Futures Trading: Trade contracts on upcoming film releases, fostering new investment opportunities.
        - First Tokenized Film Release: Pioneering the world’s first tokenized film release for direct audience investment and fair revenue distribution.
      `,
    },
    {
      title: "Current Implementation Highlights",
      description: `
        - Autonomous AI Agent: Providing real-time industry insights.
        - Blockchain Integration: Developing blockchain-audited tools for indie filmmakers.
        - AI-Driven Analytics: Delivering unbiased ratings and reviews with advanced algorithms.
        - Autonomous Film Marketing Service: A dedicated service for streamlining film promotion with AI-driven marketing strategies.
      `,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 p-8">
      {/* Back to Home Button */}
      <div className="mb-8">
        <button
          onClick={() => router.push("/")}
          className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-500 transition"
        >
          Back to Home
        </button>
      </div>

      {/* Roadmap Heading */}
      <h1 className="text-4xl font-extrabold text-red-500 text-center mb-8">
        BoxBot Roadmap
      </h1>

      {/* Roadmap Content */}
      <div className="flex flex-col space-y-8">
        {roadmap.map((phase, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg p-6 border-l-4 border-red-500"
          >
            <h2 className="text-2xl font-bold text-blue-400 mb-2">
              {phase.title}
            </h2>
            <p className="text-gray-300 whitespace-pre-line">
              {phase.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
