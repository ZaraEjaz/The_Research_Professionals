interface DoctorCardProps {
  name: string;
  specialty: string;
  image: string;
}

const DoctorCard = ({ name, specialty, image }: DoctorCardProps) => {
  return (
    <div className="group relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="absolute top-6 left-6 z-10">
        <span className="bg-white text-gray-900 text-xs font-medium px-4 py-2 rounded-full shadow-md">
          {specialty}
        </span>
      </div>

      <div className="pt-16 pb-6 px-6">
        <div className="aspect-[3/4] rounded-[2rem] overflow-hidden mb-4">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <h3 className="text-xl font-semibold text-gray-900 text-center">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default DoctorCard;
