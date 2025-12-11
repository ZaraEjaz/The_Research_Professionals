import { Check, Smile, Frown, Meh } from 'lucide-react';

const VirtualCare = () => {
  const features = [
    'Virtual consultations from home',
    'Remote vital signs monitoring',
    '24/7 medical support',
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div className="inline-block">
              <span className="text-sm font-medium text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
                Virtual Care
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Comprehensive{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Telemedicine
              </span>{' '}
              Services
            </h2>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Virtual Care"
                className="w-full h-[500px] object-cover"
              />
            </div>

            <div className="absolute top-8 left-8 bg-white rounded-3xl shadow-2xl p-6 max-w-xs hover:scale-105 transition-transform">
              <h3 className="font-semibold text-gray-900 mb-4">How are you feeling today?</h3>

              <div className="flex justify-around items-center">
                <button className="flex flex-col items-center space-y-2 p-3 hover:bg-blue-50 rounded-xl transition-colors">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Smile className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-xs text-gray-600">Happy</span>
                </button>

                <button className="flex flex-col items-center space-y-2 p-3 hover:bg-yellow-50 rounded-xl transition-colors">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Meh className="w-6 h-6 text-yellow-600" />
                  </div>
                  <span className="text-xs text-gray-600">Okay</span>
                </button>

                <button className="flex flex-col items-center space-y-2 p-3 hover:bg-red-50 rounded-xl transition-colors">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Frown className="w-6 h-6 text-red-600" />
                  </div>
                  <span className="text-xs text-gray-600">Unwell</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualCare;
