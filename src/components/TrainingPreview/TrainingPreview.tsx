import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { trainingData } from '../../data/trainingData';

const TrainingPreview = () => {
  const latestSessions = trainingData.slice(0, 3);

  return (
    <section id = "training" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
              Professional Development
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Training Sessions & Resources
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access our comprehensive library of medical training materials and educational resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {latestSessions.map((session) => (
            <div
              key={session.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-48 md:h-56 overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50">
                <img
                  src={session.thumbnail}
                  alt={session.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(session.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                    {session.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {session.insight}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/trainings"
            className="inline-flex items-center space-x-2 bg-[#001f54] text-white px-8 py-3.5 rounded-full hover:bg-[#001333] transition-all shadow-lg hover:shadow-xl group font-medium"
          >
            <span>View All Training Sessions</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrainingPreview;
