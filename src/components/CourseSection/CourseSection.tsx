import { motion, Variants } from 'framer-motion';
import { Clock, BookOpen, Monitor, Award, Download, Zap, BarChart3, PenTool, Sparkles, FileText } from 'lucide-react';

const CourseSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  const curriculum = [
    { icon: Zap, label: 'SPSS Analysis' },
    { icon: PenTool, label: 'Thesis Writing' },
    { icon: BarChart3, label: 'Biostatistics' },
    { icon: Sparkles, label: 'AI in Research' },
    { icon: FileText, label: 'Article Writing' },
  ];

  const stats = [
    { icon: Clock, label: '2 Months', value: 'Duration' },
    { icon: BookOpen, label: '40 Hours', value: 'Contact Hours' },
    { icon: Monitor, label: 'Online', value: 'Mode' },
    { icon: Award, label: '10', value: 'Certificates' },
  ];

  return (
    <section id = "courses" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
              Premium Training
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Specialized Training
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access our flagship medical research course designed for professionals
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-slate-700 rounded-3xl p-0.5 pointer-events-none" />

          <div className="relative bg-white rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 p-8 md:p-12">
              {/* Thumbnail */}
              <motion.div
                variants={itemVariants}
                className="lg:col-span-2"
              >
                <div className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-96 lg:h-auto">
                  {/* --- LAZY LOADING IMPLEMENTED HERE --- */}
                  <img
                    src="/thumbnails/course_1.webp"
                    alt="Comprehensive Medical Research Course"
                    loading="lazy"     // <--- Delays loading until scrolled into view
                    decoding="async"   // <--- Decodes image off main thread
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                variants={itemVariants}
                className="lg:col-span-3 flex flex-col space-y-6"
              >
                {/* Header */}
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    Comprehensive Medical Research Course
                  </h3>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <motion.div
                        key={stat.label}
                        variants={itemVariants}
                        className="rounded-xl p-4 text-center"
                      >
                        <Icon className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                        <p className="font-semibold text-gray-900 text-sm">{stat.label}</p>
                        <p className="text-xs text-gray-600">{stat.value}</p>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Overview */}
                <motion.p
                  variants={itemVariants}
                  className="text-gray-700 leading-relaxed"
                >
                  A comprehensive crash course designed for medical professionals planning careers in Pakistan or abroad. This intensive program covers the fundamentals of medical research methodology, biostatistics, and practical SPSS training to prepare you for advanced research endeavors.
                </motion.p>

                {/* Curriculum Highlights */}
                <motion.div
                  variants={itemVariants}
                  className="space-y-3"
                >
                  <p className="font-semibold text-gray-900">Curriculum Highlights:</p>
                  <div className="flex flex-wrap gap-2">
                    {curriculum.map((item) => {
                      const Icon = item.icon;
                      return (
                        <motion.div
                          key={item.label}
                          whileHover={{ scale: 1.05 }}
                          className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 hover:bg-blue-100 transition-colors"
                        >
                          <Icon className="w-4 h-4 text-blue-600" />
                          <span className="text-sm font-medium text-blue-600">{item.label}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Brochure Options */}
                <motion.div
                  variants={itemVariants}
                  className="border-t pt-6 mt-2"
                >
                  <p className="font-semibold text-gray-900 mb-4">Download Brochure:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    {/* National Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-5"
                    >
                      <div className="mb-3">
                        <h4 className="font-semibold text-gray-900 mb-1">National Students</h4>
                        <p className="text-sm text-gray-600">
                          <span className="font-semibold text-green-700">20,000 - 50,000 PKR</span>
                          <br />
                          <span className="text-xs">Group packages available</span>
                        </p>
                      </div>
                      
                      <a 
                        href="/pdfs/for-pak-national.pdf" 
                        download="National-Brochure.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-3 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2 font-semibold">
                          <Download className="w-5 h-5" />
                          <span>Download National</span>
                        </button>
                      </a>
                    </motion.div>

                    {/* International Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-5"
                    >
                      <div className="mb-3">
                        <h4 className="font-semibold text-gray-900 mb-1">International Students</h4>
                        <p className="text-sm text-gray-600">
                          <span className="font-semibold text-amber-700">1,000 - 3,000 SAR</span>
                          <br />
                          <span className="text-xs">Group packages available</span>
                        </p>
                      </div>

                       <a 
                        href="/pdfs/for-saudia-arabia.pdf" 
                        download="International-Brochure.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-3 rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2 font-semibold">
                          <Download className="w-5 h-5" />
                          <span>Download International</span>
                        </button>
                      </a>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseSection;