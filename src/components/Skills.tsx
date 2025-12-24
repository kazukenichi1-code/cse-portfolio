import { Code2, Database, Cloud, Cpu, Globe, GitBranch } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code2 size={28} />,
      title: 'Programming Languages',
      skills: ['Python', 'Java', 'JavaScript/TypeScript', 'C++', 'SQL'],
      color: 'blue',
    },
    {
      icon: <Globe size={28} />,
      title: 'Web Development',
      skills: ['React', 'Node.js', 'HTML/CSS', 'Tailwind CSS', 'REST APIs'],
      color: 'cyan',
    },
    {
      icon: <Database size={28} />,
      title: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Supabase', 'Firebase'],
      color: 'blue',
    },
    {
      icon: <Cpu size={28} />,
      title: 'AI/ML & Data Science',
      skills: ['Machine Learning', 'TensorFlow', 'Pandas', 'NumPy', 'Data Analysis'],
      color: 'cyan',
    },
    {
      icon: <Cloud size={28} />,
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Docker', 'Git', 'Linux', 'CI/CD'],
      color: 'blue',
    },
    {
      icon: <GitBranch size={28} />,
      title: 'Other Technologies',
      skills: ['Data Structures', 'Algorithms', 'System Design', 'Agile', 'Problem Solving'],
      color: 'cyan',
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Skills & <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Expertise</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-12 rounded-full"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className={`inline-flex p-3 rounded-lg bg-${category.color}-100 mb-4`}>
                <div className={`text-${category.color}-600`}>
                  {category.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center shadow-2xl">
          <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
          <p className="text-white/90 max-w-2xl mx-auto">
            Technology is constantly evolving, and so am I. I'm committed to continuous learning
            and staying updated with the latest industry trends and best practices.
          </p>
        </div>
      </div>
    </div>
  );
}
