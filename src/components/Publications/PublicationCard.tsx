import { motion } from 'framer-motion';
import { ExternalLink, BookOpen, Users } from 'lucide-react';

interface Publication {
  id: string | number;
  title: string;
  authors: string;
  journal: string;
  link: string;
}

interface PublicationCardProps {
  publication: Publication;
  index: number;
}

const PublicationCard = ({ publication, index }: PublicationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index % 5 * 0.1 }}
      // Responsive Padding: p-5 for mobile, p-6 for desktop
      className="bg-white rounded-xl p-5 md:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wide bg-blue-50 px-3 py-1 rounded-full">
          <BookOpen className="w-3 h-3" />
          <span className="hidden sm:inline">Research Paper</span>
          <span className="sm:hidden">Paper</span> {/* Shorter text for very small screens */}
        </div>
        <span className="text-xs text-gray-400 font-mono">#{publication.id}</span>
      </div>

      {/* Responsive Title Size */}
      <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-snug mb-3">
        {publication.title}
      </h3>

      <div className="space-y-3 flex-grow">
        <div className="flex items-start gap-2">
          <Users className="w-4 h-4 text-gray-400 mt-1 shrink-0" />
          <p className="text-sm text-gray-600 italic line-clamp-3 md:line-clamp-2">
            {publication.authors}
          </p>
        </div>
        
        <p className="text-xs text-gray-500 font-medium">
          Published in: <span className="text-gray-700 block mt-1 md:inline md:mt-0">{publication.journal}</span>
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-50">
        <a 
          href={publication.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-semibold text-[#001f54] hover:text-blue-600 transition-colors group w-full sm:w-auto justify-center sm:justify-start"
        >
          Read Publication
          <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
};

export default PublicationCard;