import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white text-5xl font-bold shadow-2xl">
            SS
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Shivesh Singh
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-4 animate-slide-up animation-delay-200">
          Computer Science Engineering Student
        </p>

        <p className="text-lg md:text-xl text-gray-500 mb-8 animate-slide-up animation-delay-300">
          GITAM University, Hyderabad
        </p>

        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-10 animate-slide-up animation-delay-400">
          Passionate about building innovative solutions and exploring cutting-edge technologies.
          Specializing in full-stack development, AI/ML, and cloud computing.
        </p>

        <div className="flex justify-center space-x-4 mb-12 animate-slide-up animation-delay-500">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
          >
            <Github className="text-gray-700" size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
          >
            <Linkedin className="text-blue-600" size={24} />
          </a>
          <a
            href="mailto:shivesh.singh@example.com"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
          >
            <Mail className="text-red-500" size={24} />
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce-slow"
        >
          <ChevronDown className="text-gray-400 mx-auto" size={32} />
        </button>
      </div>
    </div>
  );
}
