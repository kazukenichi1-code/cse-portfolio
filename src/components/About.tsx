import { GraduationCap, BookOpen, Award, Target } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          About <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Me</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-12 rounded-full"></div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <GraduationCap className="text-blue-600" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Education</h3>
                <p className="text-gray-600 font-semibold">Computer Science Engineering</p>
                <p className="text-gray-500">GITAM University, Hyderabad</p>
                <p className="text-gray-400 text-sm mt-1">Pursuing B.Tech degree</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-cyan-100 rounded-lg">
                <Target className="text-cyan-600" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Focus Areas</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Full-Stack Web Development</li>
                  <li>• Machine Learning & AI</li>
                  <li>• Cloud Computing</li>
                  <li>• Data Structures & Algorithms</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <BookOpen className="text-blue-600" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Learning Journey</h3>
                <p className="text-gray-600">
                  Continuously expanding my knowledge in emerging technologies,
                  participating in hackathons, and contributing to open-source projects.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-cyan-100 rounded-lg">
                <Award className="text-cyan-600" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Achievements</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Active in coding competitions</li>
                  <li>• Building real-world projects</li>
                  <li>• Strong academic performance</li>
                  <li>• Team collaboration experience</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">About GITAM University</h3>
          <p className="text-white/90 mb-4 leading-relaxed">
            GITAM (Gandhi Institute of Technology and Management) University, Hyderabad is a leading
            institution known for its excellence in engineering and technology education. The university
            provides state-of-the-art facilities, experienced faculty, and a vibrant campus life that
            fosters innovation and learning.
          </p>
          <p className="text-white/90 leading-relaxed">
            The Computer Science Engineering program at GITAM focuses on building strong fundamentals
            while keeping pace with industry trends. The curriculum encompasses software development,
            artificial intelligence, data science, cybersecurity, and cloud technologies, preparing
            students for successful careers in the tech industry.
          </p>
        </div>
      </div>
    </div>
  );
}
