import { Calendar, MapPin, Download } from 'lucide-react';
import heroBackground from './mhssce-bg.jpeg';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
            International Conference 2025
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
          ICSET 2025
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl mb-4 font-light">
          International Conference on Sustainable Engineering & Technology
        </p>

        <div className="mb-8">
          <p className="text-lg sm:text-xl font-medium">
            M.H. Saboo Siddik College of Engineering
          </p>
          <p className="text-base sm:text-lg opacity-90">
            Mumbai, India
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
            <Calendar className="w-5 h-5" />
            <span className="font-semibold">March 15-17, 2025</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
            <MapPin className="w-5 h-5" />
            <span className="font-semibold">Mumbai, Maharashtra</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
            Submit Paper
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all transform hover:scale-105">
            Register Now
          </button>
          <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white rounded-lg font-semibold hover:bg-white/20 transition-all transform hover:scale-105 flex items-center gap-2 justify-center">
            <Download className="w-5 h-5" />
            Brochure
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-sm opacity-90">Expected Participants</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="text-sm opacity-90">Keynote Speakers</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl font-bold mb-2">30+</div>
            <div className="text-sm opacity-90">Technical Sessions</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
