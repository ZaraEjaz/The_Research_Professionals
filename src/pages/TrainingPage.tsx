import { useState, useEffect } from "react";
import { Search, Calendar, Download, MapPin, Globe } from "lucide-react";
import { trainingData } from "../data/trainingData"; 
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

// Array of client images located in public/images/
const bannerImages = [
  "/images/g_image_1.webp",
  "/images/g_image_2.webp",
  "/images/g_image_3.webp",
  "/images/g_image_4.webp",
  "/images/g_image_5.webp",
  "/images/g_image_6.webp",
  "/images/g_image_7.webp",
  "/images/g_image_8.webp",
];

const TrainingPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('national');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Carousel Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const filteredSessions = trainingData.filter(
    (session) =>
      session.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      session.insight.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* --- 1. HERO & CAROUSEL SECTION --- */}
      <section className="pt-24 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Training Sessions <br />
                & Resources
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                Explore our comprehensive library of medical education materials,
                seminar recordings, and professional development resources tailored for you.
              </p>
              
              <div className="relative max-w-md w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search PDFs & topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full focus:border-transparent transition-all shadow-sm"
                />
              </div>
            </div>

            {/* Optimized Image Carousel */}
            <div className="relative h-[250px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
              {bannerImages.map((src, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                    index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <img
                    src={src}
                    alt={`Training Seminar ${index + 1}`}
                    loading={index === 0 ? "eager" : "lazy"} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. COMPACT REGION TOGGLE (STICKY) --- */}
      <section className="sticky top-16 z-30 bg-white/90 backdrop-blur-md border-b border-gray-200 py-3 shadow-sm">
         <div className="max-w-7xl mx-auto px-4 md:mt-5 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center">
                {/* The Toggle Container */}
                <div className="inline-flex bg-gray-100 p-1.5 rounded-xl relative w-full sm:w-auto">
                    {/* National Tab */}
                    <button 
                        onClick={() => setActiveTab('national')}
                        className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                            activeTab === 'national' 
                            ? 'bg-white text-green-700 shadow-sm ring-1 ring-black/5' 
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        <MapPin className="w-4 h-4" />
                        <span>Pakistan</span>
                    </button>

                    {/* International Tab */}
                    <button 
                        onClick={() => setActiveTab('international')}
                        className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                            activeTab === 'international' 
                            ? 'bg-white text-[#001f54] shadow-sm ring-1 ring-black/5' 
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        <Globe className="w-4 h-4" />
                        <span>International</span>
                    </button>
                </div>

            </div>
         </div>
      </section>

      {/* Helper Text */}
      <div className="bg-gray-50 pt-4 text-center">
        <p className="text-xs md:text-sm text-gray-500">
            Current Currency: 
            <span className={`font-bold ml-1 ${activeTab === 'national' ? 'text-green-700' : 'text-[#001f54]'}`}>
                {activeTab === 'national' ? 'PKR (Pakistani Rupee)' : 'INTL (USD/SAR)'}
            </span>
        </p>
      </div>

      {/* --- 3. LIST SECTION --- */}
      <section className="pb-12 md:pb-16 pt-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-2">
              Available Resources
            </h2>
            <span className="text-xs md:text-sm text-gray-500 bg-white px-3 py-1 rounded-full shadow-sm border">
              {filteredSessions.length} Files
            </span>
          </div>

          {filteredSessions.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-dashed border-gray-300">
              <p className="text-lg text-gray-500">
                No resources found matching "{searchTerm}".
              </p>
              <button 
                onClick={() => setSearchTerm("")}
                className="mt-4 text-[#001f54] font-medium hover:underline"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredSessions.map((session) => (
                <div
                  key={session.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col md:flex-row group"
                >
                  {/* Thumbnail */}
                  <div className="w-full md:w-56 h-48 md:h-auto flex-shrink-0 relative overflow-hidden bg-gray-100">
                    <img
                      src={session.thumbnail}
                      alt={session.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute top-2 left-2 px-2 py-1 rounded-md text-[10px] font-bold text-white shadow-sm ${activeTab === 'national' ? 'bg-green-600' : 'bg-[#001f54]'}`}>
                        {activeTab === 'national' ? 'PKR' : 'INTL'}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-grow flex flex-col justify-center">
                    <div className={`flex items-center space-x-2 text-xs font-bold mb-2 uppercase tracking-wide ${activeTab === 'national' ? 'text-green-600' : 'text-[#001f54]'}`}>
                      <Calendar className="w-3 h-3" />
                      <span>
                        {new Date(session.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                      {session.title}
                    </h3>
                    
                    <p className="text-xs md:text-sm text-gray-500 italic mb-2">
                      {session.insight}
                    </p>
                    
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {session.description}
                    </p>
                  </div>

                  {/* Action Button */}
                  <div className="p-5 md:w-48 flex-shrink-0 flex items-center justify-center border-t md:border-t-0 md:border-l border-gray-50 bg-gray-50/50">
                    <a
                      href={activeTab === 'national' ? session.pdfUrlNational : session.pdfUrlInternational}
                      download
                      className={`w-full md:w-auto flex items-center justify-center gap-2 border-2 text-white px-4 py-2.5 rounded-lg transition-all duration-300 font-semibold shadow-sm hover:shadow-lg text-sm ${
                          activeTab === 'national'
                          ? 'bg-green-600 border-green-600 hover:bg-green-700 hover:border-green-700'
                          : 'bg-[#001f54] border-[#001f54] hover:bg-blue-700 hover:border-blue-700'
                      }`}
                    >
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrainingPage;