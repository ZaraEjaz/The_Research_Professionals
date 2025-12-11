import { useState, useEffect } from 'react';
import { Search, FileText } from 'lucide-react';
import { publicationsData } from '../data/publicationsData';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import PublicationCard from '../components/Publications/PublicationCard';

const PublicationsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter logic
  const filteredPublications = publicationsData.filter((pub) => 
    pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pub.journal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header Section */}
      <section className="bg-[#001f54] pt-32 pb-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Research Publications</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            A complete archive of peer-reviewed articles, case reports, and studies authored by Prof. Dr. Adnan Anwar.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text"
              placeholder="Search by title or journal..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-500/30"
            />
          </div>
        </div>
      </section>

      {/* List Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#001f54]" />
              <span className="font-semibold text-gray-900">Total Publications: {filteredPublications.length}</span>
            </div>
          </div>

          {filteredPublications.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPublications.map((pub, index) => (
                <PublicationCard key={pub.id} publication={pub} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
              <p className="text-gray-500">No publications found matching your search.</p>
              <button 
                onClick={() => setSearchTerm('')}
                className="mt-4 text-blue-600 font-medium hover:underline"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PublicationsPage;