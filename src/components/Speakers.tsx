import { ShieldCheck, Users, Briefcase, Layers } from 'lucide-react';

type CommitteeEntry = {
  members: string[];
  label?: string;
};

type CommitteeSection = {
  title: string;
  icon: typeof ShieldCheck;
  description: string;
  entries: CommitteeEntry[];
};

export default function Speakers() {
  const committeeSections: CommitteeSection[] = [
    {
      title: "Committee Members",
      icon: ShieldCheck,
      description: "Leadership and coordination team steering ICCSSD 2026.",
      entries: [
        {
          label: "Chief Patron",
          members: ["Padmshree Dr. Zahir I Kazi, President, Anuman-I-Islam"]
        },
        {
          label: "Patron",
          members: ["yet to announce"]
        },
        {
          label: "Conveners",
          members: ["Dr. Shafi Pathan, Principal", "Dr. Ganesh Kame"]
        },
        {
          label: "Organizing Secretary",
          members: ["Dr. Irfan A. Landge"]
        },
        {
          label: "Organising Co-Secretary",
          members: ["Dr. Mohammed Ahmed Shaikh", "Prof. Samana Jafri"]
        },
        {
          label: "Members (IT & Technical Support)",
          members: ["Prof. Waseem Shaikh", "Mr. Sher Afghan", "Mr. Rehan"]
        }
      ]
    },
    {
      title: "Advisory Committee",
      icon: Users,
      description: "Strategic advisors guiding the conference vision.",
      entries: [
        { members: ["Dr. M. Tanveere"] },
        { members: ["Dr. Parikshit N. Mahalle"] },
        { members: ["Dr. Nilanajan Dey"] },
        { members: ["Dr. Abdullah Bahattab"] }
      ]
    },
    {
      title: "Technical Program & Publication Committee",
      icon: Briefcase,
      description: "Driving the technical content, review, and publications.",
      entries: [
        { members: ["Dr. Ashfaq Shaikh, HoD Computer Engineering"] },
        { members: ["Dr. Ravindra Patil, Associate Professor EXTC"] },
        { members: ["Dr. Nilesh Ghongade, HoD Mechanical"] },
        { members: ["Dr. Shagufta S. Sayed, Associate Professor Civil"] }
      ]
    },
    {
      title: "Registration, Publicity & Promotion Committee",
      icon: Layers,
      description: "Managing outreach, registrations, and promotional activities.",
      entries: [
        { members: ["Prof. Ahlam Shakeel Ansari, Assistant Professor (Computer)"] },
        { members: ["Prof. Arshi Khan, Assistant Professor (AIML)"] }
      ]
    },
    {
      title: "Finance Committee",
      icon: ShieldCheck,
      description: "Oversight on budgeting, expenses, and financial compliance.",
      entries: [
        { members: ["Dr. Zainab Mirza, HoD IT"] },
        { members: ["Er. Ujwal G. Chaudhary, Associate Professor"] },
        { members: ["Dr. Iqbal Shaikh, I/C FE"] },
        { members: ["Mr. Wajihuddin, Registrar"] }
      ]
    },
    {
      title: "Sponsorship & Fundraising Committee",
      icon: Users,
      description: "Building partnerships and ensuring sustainable funding.",
      entries: [
        { members: ["Dr. Sha Husain S. Maghrabi, TPO"] },
        { members: ["All Department TPOs (Training & Placement Officers)"] }
      ]
    },
    {
      title: "Hospitality & Accommodation Committee",
      icon: Briefcase,
      description: "Ensuring seamless hospitality for dignitaries and delegates.",
      entries: [
        { members: ["Prof. Abdul Sayeed, HoD EXTC"] },
        { members: ["Dr. Asrar Taher Pathan, Assistant Professor"] }
      ]
    },
    {
      title: "Department Session Management Committee",
      icon: Layers,
      description: "Coordinating sessions across all engineering departments.",
      entries: [
        { members: ["HoD, Computer Engineering"] },
        { members: ["HoD, Computer Science & Engineering (AI & ML)"] },
        { members: ["HoD, Computer Science & Engineering (IoT & Cyber Security including Blockchain Technology)"] },
        { members: ["HoD, Information Technology"] },
        { members: ["HoD, Civil Engineering"] },
        { members: ["HoD, Mechanical Engineering"] },
        { members: ["HoD, Mechanical Engineering (Automobile)"] },
        { members: ["HoD, Electronics & Telecommunication Engineering"] },
        { members: ["HoD, Basic Science and Humanities"] }
      ]
    }
  ];

  return (
    <section id="speakers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Conference Committees
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Official committee roster for ICCSSD 2026 covering leadership, advisory, technical, operational, and hospitality roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {committeeSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 flex flex-col min-h-[360px]"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-600/10 text-blue-700 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                    <p className="text-sm text-gray-500">{section.description}</p>
                  </div>
                </div>

                <div className="space-y-4 flex-1">
                  {section.entries.map((entry, entryIndex) => (
                    <div
                      key={entryIndex}
                      className="border border-gray-200 rounded-xl p-4 bg-white/70 backdrop-blur-sm"
                    >
                      {entry.label && (
                        <p className="text-xs font-semibold text-blue-700 mb-2 uppercase tracking-wide">
                          {entry.label}
                        </p>
                      )}
                      <ul className="text-gray-800 text-sm space-y-1">
                        {entry.members.map((member, memberIndex) => (
                          <li key={memberIndex} className="leading-relaxed">
                            {member}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-6 h-1 rounded-full bg-gradient-to-r from-blue-600/40 to-cyan-500/40"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
