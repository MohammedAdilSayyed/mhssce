import { Target, Users, Award, BookOpen } from 'lucide-react';

export default function About() {
  const objectives = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation & Research",
      description: "Foster cutting-edge research in sustainable engineering and technology solutions for global challenges."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Bring together researchers, industry experts, and academicians to share knowledge and best practices."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "Recognize and celebrate outstanding contributions in the field of sustainable engineering and technology."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Knowledge Dissemination",
      description: "Provide a platform for presenting research findings and facilitating academic discourse."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About the Conference
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ICSET 2025 is a premier international conference that brings together leading researchers,
            engineers, and industry professionals to discuss the latest advances in sustainable engineering
            and technology.
          </p>
        </div>

        <div className="mb-16">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Conference Theme</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The conference focuses on advancing sustainable engineering practices and innovative technologies
              that address contemporary global challenges. We invite original research papers, case studies,
              and review articles in various domains including:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                  <span>Renewable Energy Systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                  <span>Green Building Technologies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                  <span>Smart Cities & IoT</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                  <span>Environmental Engineering</span>
                </li>
              </ul>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></span>
                  <span>Artificial Intelligence & Machine Learning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></span>
                  <span>Sustainable Manufacturing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></span>
                  <span>Water Resource Management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></span>
                  <span>Blockchain & Cybersecurity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">Conference Objectives</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-green-600 hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-500 rounded-lg flex items-center justify-center text-white mb-4">
                  {objective.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{objective.title}</h4>
                <p className="text-gray-600 leading-relaxed">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
