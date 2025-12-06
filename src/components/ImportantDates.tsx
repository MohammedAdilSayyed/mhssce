import { Calendar, FileText, CheckCircle, Users } from 'lucide-react';

export default function ImportantDates() {
  const dates = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Submission Open",
      date: "1",
      month: "January 2026",
      status: "upcoming",
      color: "from-green-600 to-green-700"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Last Date of Submission",
      date: "15",
      month: "February 2026",
      status: "upcoming",
      color: "from-green-600 to-green-700"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Acceptance",
      date: "5",
      month: "March 2026",
      status: "upcoming",
      color: "from-emerald-600 to-emerald-700"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Camera Ready Paper Submission",
      date: "10",
      month: "March 2026",
      status: "upcoming",
      color: "from-emerald-600 to-emerald-700"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Date of Conference",
      date: "4 & 5",
      month: "April 2026",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {dates.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105 hover:shadow-lg ${
                item.status === 'highlighted' ? 'ring-2 ring-orange-500 ring-opacity-50' : ''
              }`}
            >
              <div className={`bg-gradient-to-r ${item.color} p-4 text-white`}>
                <div className="flex justify-center mb-3">
                  {item.icon}
                </div>
                <h3 className="text-center font-semibold text-base mb-1">
                  {item.title}
                </h3>
              </div>
              <div className="p-4 text-center">
                <p className="text-lg font-bold text-gray-900">
                  {item.date.includes(' & ') ? (
                    <>
                      {item.date.split(' & ')[0]}
                      <span className="text-xs align-super font-semibold ml-0.5">
                        {(() => {
                          const day = parseInt(item.date.split(' & ')[0]);
                          if (day % 10 === 1 && day !== 11) return 'st';
                          if (day % 10 === 2 && day !== 12) return 'nd';
                          if (day % 10 === 3 && day !== 13) return 'rd';
                          return 'th';
                        })()}
                      </span>
                      {' & '}
                      {item.date.split(' & ')[1]}
                      <span className="text-xs align-super font-semibold ml-0.5">
                        {(() => {
                          const day = parseInt(item.date.split(' & ')[1]);
                          if (day % 10 === 1 && day !== 11) return 'st';
                          if (day % 10 === 2 && day !== 12) return 'nd';
                          if (day % 10 === 3 && day !== 13) return 'rd';
                          return 'th';
                        })()}
                      </span>
                    </>
                  ) : (
                    <>
                      {item.date}
                      <span className="text-xs align-super font-semibold ml-0.5">
                        {(() => {
                          const day = parseInt(item.date);
                          if (day % 10 === 1 && day !== 11) return 'st';
                          if (day % 10 === 2 && day !== 12) return 'nd';
                          if (day % 10 === 3 && day !== 13) return 'rd';
                          return 'th';
                        })()}
                      </span>
                    </>
                  )}
                </p>
                <p className="text-sm text-gray-600 mt-1">{item.month}</p>
                {item.status === 'highlighted' && (
                  <span className="inline-block mt-2 px-2 py-1 bg-orange-100 text-orange-800 text-xs font-semibold rounded-full">
                    Main Event
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
