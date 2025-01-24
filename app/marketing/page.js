export default function MarketingPage() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-blue-900 text-gray-200 p-8">
        {/* Page Header */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-white">BoxBot Marketing Agent</h1>
          <p className="text-gray-400 mt-2">
            Launch AI-driven marketing campaigns to promote your film.
          </p>
        </header>
  
        {/* Campaign Details Section */}
        <section className="mb-8 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Campaign Details</h2>
          <form className="space-y-4">
            <div>
              <label className="block font-semibold mb-1">Campaign Name</label>
              <input
                type="text"
                placeholder="Enter campaign name"
                className="w-full p-2 rounded bg-gray-700 text-gray-200"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Goal</label>
              <select className="w-full p-2 rounded bg-gray-700 text-gray-200">
                <option>Awareness</option>
                <option>Engagement</option>
                <option>Ticket Sales</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-1">Platforms</label>
              <div className="flex space-x-4">
                {['Twitter', 'Instagram', 'Facebook', 'TikTok', 'YouTube'].map((platform) => (
                  <label key={platform} className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                    />
                    {platform}
                  </label>
                ))}
              </div>
            </div>
          </form>
        </section>
  
        {/* Title, Logline, Cast, and Crew Section */}
        <section className="mb-8 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Title, Logline, Cast, and Crew</h2>
          <form className="space-y-4">
            <div>
              <label className="block font-semibold mb-1">Title</label>
              <input
                type="text"
                placeholder="Enter film title"
                className="w-full p-2 rounded bg-gray-700 text-gray-200"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Logline</label>
              <textarea
                placeholder="Enter a brief description of the story"
                className="w-full p-2 rounded bg-gray-700 text-gray-200"
              ></textarea>
            </div>
            <div>
              <label className="block font-semibold mb-1">Cast and Crew</label>
              <textarea
                placeholder="Highlight notable names"
                className="w-full p-2 rounded bg-gray-700 text-gray-200"
              ></textarea>
            </div>
          </form>
        </section>
  
        {/* Content Library Section */}
        <section className="mb-8 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Content Library</h2>
          <form>
            <input
              type="file"
              multiple
              className="block w-full p-2 mb-4 rounded bg-gray-700 text-gray-200"
            />
            <p className="text-sm text-gray-400">
              Supported formats: Videos, Images, Text.
            </p>
          </form>
        </section>
  
        {/* API Credentials Section */}
        <section className="mb-8 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">API Credentials</h2>
          <form className="space-y-4">
            {['Twitter', 'Instagram', 'Facebook', 'TikTok', 'YouTube'].map((platform) => (
              <div key={platform}>
                <label className="block font-semibold mb-1">{platform} API Key</label>
                <input
                  type="text"
                  placeholder={`Enter ${platform} API Key`}
                  className="w-full p-2 rounded bg-gray-700 text-gray-200"
                />
              </div>
            ))}
          </form>
        </section>
  
        {/* Launch Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Launch Campaign</h2>
          <div className="flex justify-between items-center">
            <p className="text-gray-400">Cost: 50 BB Tokens</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-500">
              Launch
            </button>
          </div>
        </section>
      </div>
    );
  }
  