import { CertificationType, AwardType, AchievementType } from '../types';

interface AchievementsDataType {
  certifications: CertificationType[];
  awards: AwardType[];
  otherAchievements: AchievementType[];
}

export const achievementsData: AchievementsDataType = {
  certifications: [
    {
      name: 'Programming Fundamentals in Kotlin',
      issuer: 'Meta(Coursera)',
      date: 'Apr 2025',
      skills: ['Kotlin', 'XML', 'android application Development'],
      link: 'https://coursera.org/share/3d4d5f79f5f3563bc69595d0086985e2'
    },
    {
      name: 'Supervised Machine Learning: Regression',
      issuer: 'Coursera',
      date: 'May 2024',
      skills: ['CNN', 'openCv', 'pyTorch',"TenserFlow"],
      link: 'https://coursera.org/verify/Z2WPLLT5C9PZ'
    },
    {
      name: 'Mastering Data Structures & Algorithms using C and C++',
      issuer: 'Udimy',
      date: 'May 2024',
      skills: ['Data Structure & Algorithum', 'c++', 'c'],
      link: 'http://ude.my/UC-5f51528b-ad85-4c4c-b667-0e88fed7ec4a'
    },
    {
      name: 'Mastering Data Insights - Data Analysis and Visualization Using Python.',
      issuer: 'Lovely Proferssional University',
      date: 'July 2024',
      skills: ['Python', 'Pandas', 'MatploatLib'],
      link: 'https://raw.githubusercontent.com/YUNESHKUMAR11/Cerfificates/refs/heads/main/lpu_cer.png'
    }
  ],
  awards: [
    // {
    //   name: 'Dean\'s List - Academic Excellence',
    //   presenter: 'University of Technology',
    //   date: '2022-2023',
    //   description: 'Recognized for outstanding academic achievement with a GPA in the top 5% of the Computer Science department.'
    // },
    // {
    //   name: 'Best Technical Innovation Award',
    //   presenter: 'National Engineering Symposium',
    //   date: 'Nov 2022',
    //   description: 'Awarded for developing an innovative blockchain-based solution for supply chain transparency.'
    // },
    // {
    //   name: 'Google Code-In Finalist',
    //   presenter: 'Google',
    //   date: 'Jan 2022',
    //   description: 'Selected as a regional finalist for contributions to open source projects during the Google Code-In competition.'
    // }
  ],
  otherAchievements: [
    {
      title: 'Published Research Paper',
      description: 'Co-authored a research paper on "Named Entity Recognization" published in the International Journal of Machine Learning.'
    },
    {
      title: 'Open Source Contributor',
      description: 'Active contributor to several open-source projects with over 3 pull requests merged on GitHub.'
    },
    {
      title: 'Tech Community Leader',
      description: 'Founded and led a local tech community "AYF" with over 3 Member\'s, organizing monthly meetups and workshops.'
    },
    {
      title: 'Hackathon Mentor',
      description: 'Served as a mentor at 1 university hackathons, guiding student teams on technical challenges and project development based on machine learning.'
    }
  ]
};