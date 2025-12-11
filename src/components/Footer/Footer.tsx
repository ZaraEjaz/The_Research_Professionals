import { Mail, Phone, MapPin, Linkedin} from 'lucide-react';

const Footer = () => {
  
  return (
    <footer id="contact" className="bg-[#001f54] text-white py-12 md:py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-white/20 shadow-sm">
                <img 
                  src="/images/Logo.webp" 
                  alt="Prof. Dr. Adnan Anwar Logo" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight">Prof. Dr. Adnan</h3>
                <p className="text-xs text-blue-200 uppercase tracking-wider">Director, Research Professionals</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Bridging the gap between complex data and successful publication with expert thesis guidance and statistical analysis.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Content</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#gallery" className="hover:text-blue-400 transition-colors">Medical Research and Traning Gallery</a></li>
              <li><a href="#training" className="hover:text-blue-400 transition-colors">Training Sessions</a></li>
              <li><a href="#courses" className="hover:text-blue-400 transition-colors">Courses</a></li>
              <li><a href="#courses" className="hover:text-blue-400 transition-colors">Publications</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Services</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
                <span className="text-gray-300 text-sm">Karachi, Pakistan</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                <a href="mailto:anwaradnan32@gmail.com" className="text-gray-300 text-sm hover:text-white transition-colors">
                  anwaradnan32@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 shrink-0" />
                <a href="tel:+923212625053" className="text-gray-300 text-sm hover:text-white transition-colors">
                  +92 321 2625053
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Prof. Dr. Adnan Anwar. All rights reserved.
          </p>

          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/in/adnan-anwar-42826b103/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;