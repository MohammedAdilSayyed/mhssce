import { Check, ClipboardList, Mail } from 'lucide-react';

export default function Registration() {

  return (
    <section id="registration" className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Registration
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
            Register now to secure your spot at SmartSSD 2026
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 p-10 text-white text-center">
              <div className="flex justify-center mb-5">
                <ClipboardList className="w-12 h-12" />
              </div>
              <h3 className="text-3xl font-bold mb-3">Registration Fees</h3>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <div>
                  <p className="text-sm uppercase tracking-wide opacity-80">Standard Fee</p>
                  <p className="text-4xl font-extrabold">₹4,500</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wide opacity-80">Early Bird</p>
                  <p className="text-4xl font-extrabold text-amber-200">₹4,000</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <ul className="space-y-4">
                {[
                  "Access to all technical sessions, keynote talks, and workshops",
                  "Conference kit, materials, and e-proceedings",
                  "Lunch, refreshments, and networking dinner",
                  "Certificate of participation and presentation (if applicable)",
                  "Exhibition and poster gallery access"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-8 px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                Register Now
              </button>
              <p className="text-xs text-gray-500 mt-3 text-center">
                *Early bird rates valid until Coming soon, 2026. Final fee schedule to be announced shortly.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Registration Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-3">For Authors</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                  <span>yet to decide</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                  <span>yet to decide</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                  <span>yet to decide</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Mail className="w-5 h-5 text-cyan-600" />
                Payment & Support
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2"></span>
                  <span>yet to decide</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2"></span>
                  <span>yet to decide</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2"></span>
                  <span>yet to decide</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
