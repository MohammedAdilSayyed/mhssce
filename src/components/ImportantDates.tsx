import { Calendar, FileText, CheckCircle, Users } from 'lucide-react';

export default function ImportantDates() {
  const dates = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Abstract Submission",
      date: "Coming soon, 2026",
      status: "upcoming",
      color: "from-green-600 to-green-700"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Acceptance Notification",
      date: "Coming soon, 2026",
      status: "upcoming",
      color: "from-emerald-600 to-emerald-700"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Full Paper Submission",
      date: "Coming soon, 2026",
      status: "upcoming",
      color: "from-teal-600 to-teal-700"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Early Bird Registration",
      date: "Coming soon, 2026",
      status: "upcoming",
      color: "from-emerald-600 to-emerald-700"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Conference Dates",
      date: "Coming soon, 2026",
      status: "highlighted",
      color: "from-orange-600 to-red-600"
    }
  ];

  return (
    <section id="dates" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Important Dates
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Mark your calendars with these crucial dates for the conference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {dates.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl ${
                item.status === 'highlighted' ? 'ring-4 ring-orange-500 ring-opacity-50' : ''
              }`}
            >
              <div className={`bg-gradient-to-r ${item.color} p-6 text-white`}>
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-center font-bold text-lg mb-2">
                  {item.title}
                </h3>
              </div>
              <div className="p-6 text-center">
                <p className="text-2xl font-bold text-gray-900">{item.date}</p>
                {item.status === 'highlighted' && (
                  <span className="inline-block mt-3 px-3 py-1 bg-orange-100 text-orange-800 text-sm font-semibold rounded-full">
                    Main Event
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

          <div className="mt-12 bg-gradient-to-r from-green-600 to-emerald-500 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated!</h3>
          <p className="mb-6 text-lg">
            Subscribe to our newsletter to receive notifications about deadline extensions and conference updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/50"
            />
            <button className="px-8 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
