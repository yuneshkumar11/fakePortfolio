import React from 'react';
import { motion } from 'framer-motion';
import { Code, Award, BarChart, ExternalLink } from 'lucide-react';

const CompetitiveProgrammingSection: React.FC = () => {
  const platforms = [
    {
      name: 'LeetCode',
      icon: <Code className="text-white" size={24} />,
      username: 'Yunesh-leetcode',
      link: 'https://leetcode.com/u/Yunesh/',
      stats: [
        { label: 'Problems Solved', value: '260+' },
        { label: 'Contest Rating', value: '--' },
      ],
      color: 'from-white to-gray-400',
    },
    {
      name: 'CodeForces',
      icon: <BarChart className="text-white" size={24} />,
      username: 'Yunesh-codeforces',
      link: 'https://codeforces.com/profile/koi_coder_in',
      stats: [
        { label: 'Problems Solved', value: '--' },
        { label: 'Max Rating', value: '--' },
      ],
      color: 'from-gray-200 to-gray-500',
    },
    {
      name: 'HackerRank',
      icon: <Award className="text-white" size={24} />,
      username: 'Yunesh-hackerrank',
      link: 'https://www.hackerrank.com/profile/ZYUVNESHKUMAR11',
      stats: [
        { label: 'Skills', value: '--' },
        { label: 'Badges', value: '--' },
      ],
      color: 'from-gray-500 to-gray-800',
    },
  ];

  return (
    <section id="competitive-programming" className="py-20 relative">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="section-title mx-auto">Competitive Programming</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My coding profiles and achievements across various competitive programming platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="card p-6 h-full">
                {/* Header with gradient */}
                <div className={`h-16 -mt-6 -mx-6 mb-6 rounded-t-lg bg-gradient-to-r ${platform.color} flex items-center justify-center`}>
                  <h3 className="text-xl font-bold text-white">{platform.name}</h3>
                </div>

                <div className="flex items-center mb-4">
                  <span className="mr-3">{platform.icon}</span>
                  <span className="text-lg font-medium">{platform.username}</span>
                </div>

                {/* Stats */}
                <div className="space-y-3 mb-6">
                  {platform.stats.map((stat, i) => (
                    <div key={i} className="flex justify-between">
                      <span className="text-gray-400">{stat.label}:</span>
                      <span className="font-medium">{stat.value}</span>
                    </div>
                  ))}
                </div>

                {/* View Profile Link */}
                <a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 mt-auto w-full py-2 bg-dark-200 hover:bg-dark-100 rounded-md transition-colors text-sm"
                >
                  <span>View Profile</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitiveProgrammingSection;
