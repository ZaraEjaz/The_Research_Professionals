import { Link } from 'react-router-dom';
import { ArrowRight, BookOpenCheck } from 'lucide-react';
import { publicationsData } from '../../data/publicationsData';
import PublicationCard from './PublicationCard';

const PublicationsPreview = () => {
  // Only show the first 3 items on home page
  const previewItems = publicationsData.slice(0, 3);

  return (
    <section id = "publications" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium text-blue-600 bg-blue-100/50 px-4 py-2 rounded-full">
              Academic Contributions
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Publications
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Contributing to the medical field through extensive research and peer-reviewed studies.
          </p>
        </div>

        {/* Grid of 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {previewItems.map((pub, index) => (
            <PublicationCard key={pub.id} publication={pub} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            to="/publications"
            className="inline-flex items-center space-x-2 bg-[#001f54] text-white px-8 py-3.5 rounded-full hover:bg-[#001333] transition-all shadow-lg hover:shadow-xl font-medium group"
          >
            <BookOpenCheck className="w-5 h-5" />
            <span>View All 85+ Publications</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PublicationsPreview;