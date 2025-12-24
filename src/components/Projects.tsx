import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with user authentication, product management, and payment integration.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'AI Chatbot Application',
      description: 'Intelligent chatbot using natural language processing to provide automated customer support and assistance.',
      tech: ['Python', 'TensorFlow', 'NLP', 'Flask'],
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Task Management System',
      description: 'Collaborative project management tool with real-time updates, task tracking, and team communication features.',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      title: 'Weather Forecast App',
      description: 'Real-time weather application with location-based forecasts, interactive maps, and weather alerts.',
      tech: ['JavaScript', 'React', 'Weather API', 'Charts.js'],
      gradient: 'from-cyan-600 to-blue-600',
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing projects, skills, and professional experience with modern design.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for visualizing and analyzing large datasets with customizable charts and reports.',
      tech: ['Python', 'Pandas', 'Plotly', 'Streamlit'],
      gradient: 'from-cyan-500 to-blue-500',
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          My <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-12 rounded-full"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-100 rounded-full text-xs text-gray-700 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 transition-colors">
                    <Github size={18} />
                    <span>Code</span>
                  </button>
                  <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-cyan-600 transition-colors">
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            These are some of my recent projects. Check out my GitHub for more!
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
          >
            <Github size={20} />
            <span>View All Projects</span>
          </a>
        </div>
      </div>
    </div>
  );
}
