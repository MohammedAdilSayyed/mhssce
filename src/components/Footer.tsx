import { Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';
import mhssceLogo from './mhssccelogo.jpg';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-14 h-14 rounded-xl overflow-hidden bg-white/5 flex items-center justify-center">
                <img src={mhssceLogo} alt="MHSSCE Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-lg font-bold">MHSSCE</h3>
                <p className="text-xs text-gray-400">SmartSSD 2026</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              M.H. Saboo Siddik College of Engineering - Advancing excellence in engineering education and research.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Conference</a>
              </li>
              <li>
                <a href="#dates" className="hover:text-white transition-colors">Important Dates</a>
              </li>
              <li>
                <a href="#speakers" className="hover:text-white transition-colors">Speakers</a>
              </li>
              <li>
                <a href="#registration" className="hover:text-white transition-colors">Registration</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">For Authors</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">Call for Papers</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Submission Guidelines</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Paper Template</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Review Process</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Publication</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>smartssd2026@mhssce.ac.in</span>
              </li>
              <li>
                M.H. Saboo Siddik College<br />
                Byculla, Mumbai - 400008<br />
                Maharashtra, India
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 M.H. Saboo Siddik College of Engineering. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
