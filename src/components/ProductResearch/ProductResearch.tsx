import { motion } from 'framer-motion';
import { Download, FileText, CheckCircle2, TrendingUp } from 'lucide-react';

const marketingPoints = [
  "Product Validation & Credibility",
  "Content Marketing",
  "Thought Leadership & Relationship",
  "Sales Enablement",
  "Stakeholder Engagement",
  "Brand Positioning",
  "Regulatory & Policy Support",
  "Market Expansion & New Product Launches",
  "Post-Marketing & Lifecycle Management",
  "Digital Campaigns",
  "Educational & Patient-Focused Campaigns",
  "Investor & Partner Communications",
  "Internal Marketing & Culture",
  "Corporate Social Responsibility"
];

const ProductResearch = () => {
  // Filename as per your request (ensure it's inside public/pdfs/)
  const pdfUrl = "/pdfs/Product_Research_Plan_and_Significance.pdf";

  return (
    <motion.section
      id="product-research"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }} // Lazy rendering: Activates only when in view
      transition={{ duration: 0.8 }}
      className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* --- LEFT COLUMN: PDF DOWNLOAD --- */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 text-blue-700 text-sm font-semibold mb-4">
                <TrendingUp className="w-4 h-4" />
                <span>Strategic Growth</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                Product Research
              </h2>
              {/* UPDATED: Added 'text-justify' */}
              <p className="text-lg text-gray-600 leading-relaxed text-justify">
                A medical research proposal is the intellectual foundation of scientific investigation. 
                Download our comprehensive plan covering conceptualization, ethics, data management, 
                and publication processes.
              </p>
            </div>

            {/* Download Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 flex items-start gap-5 max-w-lg group"
            >
              <div className="p-4 bg-blue-50 rounded-xl duration-300">
                <FileText className="w-8 h-8 text-blue-600 duration-300" />
              </div>
              
              <div className="flex-1">
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  Product Research Plan
                </h4>
                <p className="text-sm text-gray-500 mb-4">
                  Complete guide on significance, timeline, and methodology.
                </p>
                <a 
                  href={pdfUrl}
                  download="Product_Research_Plan_and_Significance.pdf"
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <span>Download PDF</span>
                  <Download className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT COLUMN: 14 IMPORTANCE POINTS (BADGES) --- */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Importance of Research for Marketing
            </h3>
            
            {/* UPDATED: Changed from flex to grid for 2 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {marketingPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  // UPDATED: Changed 'inline-flex' to 'flex' and added 'w-full' for uniform grid alignment
                  className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 text-sm font-medium hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-all duration-300 cursor-default select-none shadow-sm w-full"
                >
                  <CheckCircle2 className="w-4 h-4 shrink-0 opacity-50" />
                  <span className="leading-tight">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default ProductResearch;