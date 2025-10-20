import { User, Building2, Award } from 'lucide-react';

export default function Speakers() {
  const speakers = [
    {
      name: "Dr. Rajesh Kumar",
      title: "Professor of Computer Science",
      organization: "IIT Bombay",
      expertise: "Artificial Intelligence",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Dr. Priya Sharma",
      title: "Director, Research & Development",
      organization: "Tata Consultancy Services",
      expertise: "Sustainable Technologies",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Prof. Anil Desai",
      title: "Head of Department",
      organization: "MIT, Pune",
      expertise: "Renewable Energy",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Dr. Sarah Johnson",
      title: "Research Scientist",
      organization: "Google Research",
      expertise: "Machine Learning",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Dr. Vikram Singh",
      title: "Chief Technology Officer",
      organization: "Infosys",
      expertise: "IoT & Smart Cities",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Prof. Meena Patel",
      title: "Dean of Engineering",
      organization: "BITS Pilani",
      expertise: "Environmental Engineering",
      image: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section id="speakers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Keynote Speakers
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn from distinguished experts and thought leaders in the field of sustainable engineering and technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-100 rounded-xl overflow-hidden hover:border-blue-600 hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Keynote
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{speaker.name}</h3>
                <div className="flex items-start gap-2 text-gray-600 mb-2">
                  <Award className="w-4 h-4 mt-1 flex-shrink-0" />
                  <p className="text-sm">{speaker.title}</p>
                </div>
                <div className="flex items-start gap-2 text-gray-600 mb-3">
                  <Building2 className="w-4 h-4 mt-1 flex-shrink-0" />
                  <p className="text-sm">{speaker.organization}</p>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {speaker.expertise}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">More speakers to be announced soon!</p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105">
            View Full Speaker List
          </button>
        </div>
      </div>
    </section>
  );
}
