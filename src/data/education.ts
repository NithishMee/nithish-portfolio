import { EducationItem } from '../types';

export const educationData: EducationItem[] = [
  {
    id: 'engineering',
    degree: 'Bachelor of Engineering – Computer Science and Engineering',
    institution: 'Kongu Engineering College',
    location: 'Perundurai, Erode, India',
    period: '2023 – 2027 (Expected)',
    scoreLabel: 'CGPA',
    scoreValue: '7.94',
    highlights: [
      'Focusing on Data Structures, Algorithms, Database Management Systems, and Web Architecture.',
      'Active participant in technical symposiums, hackathons, and software engineering projects.',
      'Developed hands-on full-stack, IoT, and mobile applications as part of practical coursework.'
    ]
  },
  {
    id: 'higher-secondary',
    degree: 'Higher Secondary (XII) – Computer Science Stream',
    institution: 'SVM Higher Secondary School',
    location: 'Naal road, Tirupur, India',
    period: 'Completed 2023',
    scoreLabel: 'Percentage',
    scoreValue: '88.33%',
    highlights: [
      'Specialized in Computer Science, Mathematics, Physics, and Chemistry.',
      'Demonstrated academic excellence with 88.33% aggregate mark in state board examinations.',
      'Built early foundational skills in C, C++, and basic programming concepts.'
    ]
  }
];
