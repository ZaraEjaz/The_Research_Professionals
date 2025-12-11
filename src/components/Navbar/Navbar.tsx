import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // 1. Import Router Hooks
import { Menu, X, MessageCircle, Smartphone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 2. Initialize Hooks
  const location = useLocation();
  const navigate = useNavigate();

  // --- WHATSAPP CONFIG ---
  const whatsappNumber = "923212625053"; 
  const whatsappMessage = "Hello Dr. Adnan, I would like to inquire about research guidance.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(whatsappUrl)}`;

  // 3. Smart Scroll Function
  const scrollToSection = (id: string) => {
    setIsOpen(false); 

    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-[#001f54] shadow-md z-40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            
            {/* Logo */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="relative h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden border-2 border-white/20 shadow-sm">
                <img 
                  src="/images/Logo.webp" 
                  alt="Dr. Adnan Logo" 
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-lg md:text-xl font-bold text-white tracking-tight">
                Prof. Dr. Adnan Anwar
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white font-medium transition-colors">
                Home
              </button>
              
              <button onClick={() => scrollToSection('training')} className="text-gray-300 hover:text-white font-medium transition-colors">
                Training
              </button>
              
              <button onClick={() => scrollToSection('courses')} className="text-gray-300 hover:text-white font-medium transition-colors">
                Courses
              </button>

              <button onClick={() => scrollToSection('publications')} className="text-gray-300 hover:text-white font-medium transition-colors">
                Publications
              </button>
              
              <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white font-medium transition-colors">
                Services
              </button>
              
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-green-600 text-white px-5 py-2.5 rounded-full hover:bg-green-700 transition-all shadow-md hover:shadow-lg flex items-center space-x-2 font-medium border border-transparent hover:border-green-400"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Connect</span>
              </button>
            </div>

            <button 
              className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-[#002a70] transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#001f54] border-t border-white/10 absolute w-full shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-3 text-gray-300 hover:bg-[#002a70] hover:text-white rounded-lg font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection('training')} className="block w-full text-left px-4 py-3 text-gray-300 hover:bg-[#002a70] hover:text-white rounded-lg font-medium">
                Training
              </button>
              <button onClick={() => scrollToSection('courses')} className="block w-full text-left px-4 py-3 text-gray-300 hover:bg-[#002a70] hover:text-white rounded-lg font-medium">
                Courses
              </button>
              <button onClick={() => scrollToSection('publications')} className="block w-full text-left px-4 py-3 text-gray-300 hover:bg-[#002a70] hover:text-white rounded-lg font-medium">
                Publications
              </button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-3 text-gray-300 hover:bg-[#002a70] hover:text-white rounded-lg font-medium">
                Services
              </button>
              
              
              <div className="pt-2 px-2">
                <button 
                  onClick={() => { setIsOpen(false); setIsModalOpen(true); }}
                  className="w-full bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-colors shadow-md flex items-center justify-center space-x-2 font-bold"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Connect on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Modal Code remains the same... */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden transform transition-all scale-100 animation-fade-in">
            <div className="bg-green-600 p-6 text-center relative">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-green-700 rounded-full p-1 transition-colors"
                title="Close modal"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-md">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Let's Connect</h3>
              <p className="text-green-100 text-sm mt-1">Chat with Dr. Adnan directly</p>
            </div>
            <div className="p-8 flex flex-col items-center">
              <div className="bg-white p-2 rounded-xl shadow-lg border border-gray-100 mb-6">
                <img src={qrCodeUrl} alt="WhatsApp QR Code" className="w-48 h-48 object-contain"/>
              </div>
              <p className="text-center text-gray-600 text-sm mb-6">Scan this code with your phone camera or WhatsApp to start a chat instantly.</p>
              <div className="w-full pt-4 border-t border-gray-100">
                 <p className="text-xs text-center text-gray-400 mb-3">On mobile? Click below</p>
                 <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full py-3 bg-gray-50 hover:bg-gray-100 text-gray-800 rounded-xl font-medium transition-colors gap-2">
                   <Smartphone className="w-4 h-4" />
                   Open WhatsApp App
                 </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;