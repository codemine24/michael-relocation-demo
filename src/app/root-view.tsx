"use client";
import Map from "@/components/map";

export const RootView = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Relocate</h1>
              <p className="text-gray-600">Find your perfect city</p>
            </div>
            <nav className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-500">
                Cities
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                About
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                Login
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Discover Your Next Home
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore cities around the world and find the perfect place that
            matches your lifestyle and budget.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-white rounded-full shadow-lg p-2 flex items-center">
            <input
              type="text"
              placeholder="Search cities..."
              className="flex-1 px-6 py-3 border-none outline-none rounded-full"
            />
            <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors">
              Search
            </button>
          </div>
        </div>

        {/* Interactive Map */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Explore Cities
            </h3>
            <p className="text-gray-600">
              Click on any marker to learn more about a city
            </p>
          </div>
          <Map />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose Relocate?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌎</span>
              </div>
              <h4 className="font-bold text-lg mb-2">Global Coverage</h4>
              <p className="text-gray-600">
                Explore cities from every corner of the world
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h4 className="font-bold text-lg mb-2">Cost Analysis</h4>
              <p className="text-gray-600">Compare living costs and budgets</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="font-bold text-lg mb-2">Detailed Insights</h4>
              <p className="text-gray-600">
                Get comprehensive city profiles and data
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Relocate. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
};
