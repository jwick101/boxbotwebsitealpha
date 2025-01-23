"use client";

export default function Roadmap() {
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
