import { Check, Users, GraduationCap, Building2 } from 'lucide-react';

export default function Registration() {
  const pricingPlans = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Student",
      price: "₹2,500",
      earlyBird: "₹2,000",
      features: [
        "Access to all sessions",
        "Conference kit & materials",
        "Lunch & refreshments",
        "Certificate of participation",
        "E-proceedings"
      ],
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Academic",
      price: "₹4,500",
      earlyBird: "₹4,000",
      features: [
        "Access to all sessions",
        "Conference kit & materials",
        "Lunch & refreshments",
        "Certificate of participation",
        "E-proceedings",
        "Networking dinner"
      ],
      color: "from-cyan-600 to-cyan-700",
      highlighted: true
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Industry",
      price: "₹6,500",
      earlyBird: "₹6,000",
      features: [
        "Access to all sessions",
        "Conference kit & materials",
        "Lunch & refreshments",
        "Certificate of participation",
        "E-proceedings",
        "Networking dinner",
        "Exhibition booth access"
      ],
      color: "from-teal-600 to-teal-700"
    }
  ];

  return (
    <section id="registration" className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Registration
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
            Register now to secure your spot at ICSET 2025
          </p>
          <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold">
            Early Bird Discount: Save up to 20% before March 1, 2025
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl ${
                plan.highlighted ? 'ring-4 ring-cyan-500 ring-opacity-50' : ''
              }`}
            >
              {plan.highlighted && (
                <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white text-center py-2 font-semibold text-sm">
                  Most Popular
                </div>
              )}
              <div className={`bg-gradient-to-r ${plan.color} p-8 text-white text-center`}>
                <div className="flex justify-center mb-4">
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                <div className="mb-2">
                  <span className="text-sm opacity-80 line-through">{plan.price}</span>
                </div>
                <div className="text-4xl font-bold mb-2">{plan.earlyBird}</div>
                <div className="text-sm opacity-90">Early Bird Price</div>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full mt-8 px-6 py-3 bg-gradient-to-r ${plan.color} text-white rounded-lg font-semibold hover:shadow-lg transition-all`}>
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Registration Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-3">For Authors</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                  <span>At least one author must register for each accepted paper</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                  <span>Registration must be completed before the camera-ready submission</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                  <span>One registration covers up to two papers</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-3">Payment Methods</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2"></span>
                  <span>Bank transfer / NEFT / RTGS</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2"></span>
                  <span>Online payment via credit/debit card</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2"></span>
                  <span>UPI payment accepted</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
