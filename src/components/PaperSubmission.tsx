import { X } from 'lucide-react';

export default function PaperSubmission() {
  return (
    <section id="paper-submission" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Paper Submission Guidelines
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
            Submit your research paper for SmartSSD 2026
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="mt-6 text-red-600 text-lg">
            <strong>CMT Acknowledgement:</strong> The Microsoft CMT service was used for managing the peer-review process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-3">For Authors</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2"></span>
                  <span>All manuscripts must be the original work of authors and not plagiarism.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2"></span>
                  <span>Authorship of a manuscript should be limited to authors who have made significant contributions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2"></span>
                  <span>Authors must properly and accurately acknowledge the work of others.</span>
                </li>
              </ul>
            </div>
            <div>
              
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></span>
                  <span>Authors should disclose any financial or other substantive conflict of interest that might influence the results or interpretation of their manuscript and acknowledge individuals or organizations that have provided financial support for research.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></span>
                  <span>Authors may be asked to provide the raw data in connection with manuscripts for editorial review, and should prepare to provide public access to such data if possible.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></span>
                  <span>All manuscripts must be previously unpublished, and not under consideration for publication elsewhere.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold text-lg rounded-lg hover:shadow-lg transition-all transform hover:scale-105">
              Submit Paper
            </button>
          </div>
        </div>
     
      </div>
    </section>
  );
}
