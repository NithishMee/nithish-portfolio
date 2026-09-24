import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', iconName: 'SiPython', proficiency: 90, color: '#3776AB' },
      { name: 'C', iconName: 'SiC', proficiency: 82, color: '#A8B9CC' },
      { name: 'Java', iconName: 'FaJava', proficiency: 85, color: '#007396' },
      { name: 'JavaScript', iconName: 'SiJavascript', proficiency: 88, color: '#F7DF1E' }
    ]
  },
  {
    title: 'AI / ML & Deep Learning',
    skills: [
      { name: 'Machine Learning', iconName: 'FaBrain', proficiency: 88, color: '#8B5CF6' },
      { name: 'Deep Learning (CNN, RNN)', iconName: 'FaBrain', proficiency: 86, color: '#EC4899' },
      { name: 'PyTorch', iconName: 'SiPytorch', proficiency: 85, color: '#EE4C2C' },
      { name: 'TensorFlow', iconName: 'SiTensorflow', proficiency: 82, color: '#FF6F00' }
    ]
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', iconName: 'SiHtml5', proficiency: 92, color: '#E34F26' },
      { name: 'CSS', iconName: 'SiCss3', proficiency: 88, color: '#1572B6' },
      { name: 'React', iconName: 'SiReact', proficiency: 88, color: '#61DAFB' }
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', iconName: 'SiNodedotjs', proficiency: 84, color: '#339933' },
      { name: 'Express.js', iconName: 'SiExpress', proficiency: 82, color: '#68A063' },
      { name: 'Django', iconName: 'SiDjango', proficiency: 80, color: '#092E20' },
      { name: 'FastAPI', iconName: 'SiFastapi', proficiency: 82, color: '#009688' }
    ]
  },
  {
    title: 'Database',
    skills: [
      { name: 'MySQL', iconName: 'SiMysql', proficiency: 84, color: '#4479A1' },
      { name: 'MongoDB', iconName: 'SiMongodb', proficiency: 88, color: '#47A248' }
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', iconName: 'SiGit', proficiency: 88, color: '#F05032' },
      { name: 'AWS', iconName: 'SiAmazonaws', proficiency: 76, color: '#FF9900' },
      { name: 'Docker', iconName: 'SiDocker', proficiency: 78, color: '#2496ED' }
    ]
  }
];
