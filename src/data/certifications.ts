import { Certification } from '../types';

export const certificationsData: Certification[] = [
  {
    id: 'mongodb-associate-developer',
    title: 'MongoDB Certified Associate Developer',
    issuer: 'MongoDB, Inc.',
    issueDate: 'March 3, 2025',
    licenseId: 'MDB3z31vnkxrt',
    credentialUrl: '/certificates/MongoDB_Associate_Developer.pdf',
    certificatePdf: '/certificates/MongoDB_Associate_Developer.pdf',
    logo: 'SiMongodb',
    skills: ['MongoDB', 'Document Database', 'Indexing', 'Aggregation Pipeline', 'Data Modeling']
  },
  {
    id: 'java-se-17-developer',
    title: 'Oracle Certified Professional: Java SE 17 Developer',
    issuer: 'Oracle University',
    issueDate: 'May 13, 2026',
    licenseId: '103459865OCPJSE17',
    credentialUrl: '/certificates/Java_SE_17_Developer.pdf',
    certificatePdf: '/certificates/Java_SE_17_Developer.pdf',
    logo: 'FaJava',
    skills: ['Java SE 17', 'Object-Oriented Programming', 'JVM Architecture', 'Collections API', 'Multithreading & Concurrency']
  },
  {
    id: 'oracle-apex-cloud-developer',
    title: 'Oracle APEX Cloud Developer Certified Professional',
    issuer: 'Oracle University',
    issueDate: 'May 14, 2025',
    licenseId: '101634872APEX24CDOCP',
    credentialUrl: '/certificates/Oracle_APEX_Cloud_Developer.pdf',
    certificatePdf: '/certificates/Oracle_APEX_Cloud_Developer.pdf',
    logo: 'SiOracle',
    skills: ['Oracle APEX', 'PL/SQL', 'Cloud Applications', 'Database Management', 'Low-Code Architecture']
  }
];
