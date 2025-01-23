"use client";

export default function Roadmap() {
  const roadmap = [
    {
      title: "Phase 1: MVP Development",
      description:
        "Successfully deployed an autonomous AI-powered Twitter agent using Virtuals, G.A.M.E. Protocol, and OpenAI. BoxBot provides unbiased, real-time film industry and box office data.",
    },
    {
      title: "Phase 2: Token-Accessed Site Launch",
      description: `
        BoxBot is actively integrating blockchain tools for indie filmmakers:
        - Blockchain-Audited Earnings Reports
        - AI-Generated Honest Film Ratings
        - Decentralized, Unbiased Film Reviews
      `,
    },
    {
      title: "Phase 3: Future-Focused Innovations",
      description: `
        BoxBot continues to disrupt the industry:
        - Film Futures Trading
        - First Tokenized Film Release
      `,
    },
    {
      title: "Current Highlights",
      description: `
        - Autonomous AI Agent
        - Blockchain Integration
        - AI-Driven Analytics
        - Autonomous Film Marketing Service
      `,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-800 p-8">
      <h1 className="text-4xl font-extrabold text-red-600 text-center mb-8">
        BoxBot Roadmap
      </h1>
      <div className="flex flex-col space-y-8">
        {roadmap.map((phase, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500"
          >
            <h2 className="text-2xl font-bold mb-2">{phase.title}</h2>
            <p className="text-gray-700 whitespace-pre-line">{phase.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
