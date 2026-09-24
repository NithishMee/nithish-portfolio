import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'skinguard-ai',
    title: 'SkinGuard AI – Skin Cancer Detection',
    category: 'AI/ML',
    shortDescription:
      'A deep-learning system to classify skin lesions into 7 categories using dermoscopic images with PyTorch and CNN-based models.',
    fullDescription:
      'Developed an intelligent deep-learning diagnostic assistive system engineered to classify dermoscopic skin lesion images into 7 distinct diagnostic categories. Built using PyTorch and Convolutional Neural Networks (CNNs), the model provides high-precision classification, lesion feature maps, and probability distributions to assist in early detection of melanoma and other skin malignancies.',
    problemStatement:
      'Skin cancer is among the most widespread malignancies worldwide. Early and accurate detection drastically increases survival rates, yet manual visual inspection is time-consuming, prone to human error, and less accessible in underserved regions.',
    solution:
      'Engineered an end-to-end computer vision pipeline that preprocesses dermoscopic images, performs feature extraction with deep CNN models in PyTorch, and delivers instant multi-class lesion classification with high confidence scores.',
    technologies: ['PyTorch', 'Hybrid CNN + ViT-B/16', 'Grad-CAM Saliency', 'Python', 'Computer Vision', 'FastAPI', 'ISIC Dataset'],
    features: [
      'Multi-modal clinical record integration (Case ID, patient age, biological sex, lesion anatomical site)',
      'Tier-1 neural rejection gating to safely detect and reject non-skin/out-of-distribution uploads',
      'Hybrid CNN + Vision Transformer (ViT-B/16) fusion head for deep feature extraction',
      'Grad-CAM explainable AI attention overlay and morphological saliency mapping',
      'ISIC multi-class probability distribution spectrum across 7+ dermatological categories',
      'Tier-2 neural gating for healthy cutaneous tissue vs malignant neoplasm detection',
      'Automated, tamper-evident HTML clinical diagnostic report generation and export'
    ],
    challenges: [
      'Handling severe dataset class imbalance across different rare skin lesion types',
      'Maintaining high sensitivity for malignant cases while minimizing false positives'
    ],
    lessonsLearned: [
      'Implemented weighted cross-entropy loss and data augmentation techniques in PyTorch',
      'Developed deep expertise in medical image preprocessing, CNN feature maps, and model optimization'
    ],
    githubUrl: 'https://github.com/NithishMee/SkinGuard-AI',
    liveUrl: 'https://github.com/NithishMee',
    image: '/projects/icons/skinguard-ai.png',
    screenshots: [
      '/projects/skinguard-ai/1-clinical-input-form.png',
      '/projects/skinguard-ai/2-specimen-upload-preview.png',
      '/projects/skinguard-ai/3-basal-cell-carcinoma-diagnosis.png',
      '/projects/skinguard-ai/4-gradcam-saliency-spectrum.png',
      '/projects/skinguard-ai/5-healthy-skin-report.png',
      '/projects/skinguard-ai/6-tier1-non-skin-rejection.png'
    ],
    featured: true
  },
  {
    id: 'blood-donation-website',
    title: 'Blood Donation Website',
    category: 'Web',
    shortDescription:
      'A web platform to connect blood donors and receivers quickly during critical medical emergencies.',
    fullDescription:
      'Developed a comprehensive web application designed to bridge the gap between urgent blood requirements and willing donors. The platform streamlines emergency requests by filtering donors based on blood group, geographic location, and real-time availability status.',
    problemStatement:
      'During medical emergencies, families often struggle to find matching blood donors quickly. Manual coordination across messaging groups causes dangerous delays in life-critical situations.',
    solution:
      'Created an intuitive digital ecosystem with quick donor registration, location-based donor search, verified blood group matching, and instant emergency broadcast request notifications.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Real-time blood group & district search filter',
      'Donor registration with availability toggle',
      'Instant emergency broadcast request module',
      'Verified donor profiles & contact confidentiality',
      'Responsive design for seamless mobile & desktop access'
    ],
    challenges: [
      'Ensuring donor privacy while providing instant contact methods during emergencies',
      'Managing real-time status updates efficiently without overloading database connections'
    ],
    lessonsLearned: [
      'Designed efficient MongoDB indexing strategies for location and blood group queries',
      'Implemented clean RESTful API structures and modular React state management'
    ],
    githubUrl: 'https://github.com/NithishMee/blood-donation-website',
    liveUrl: 'https://github.com/NithishMee',
    image: '/projects/icons/blood-donation.png',
    screenshots: [
      '/projects/blood-donation/Screenshot 2026-02-17 110742.png',
      '/projects/blood-donation/Screenshot 2026-02-17 112352.png',
      '/projects/blood-donation/Screenshot 2026-02-17 113945.png',
      '/projects/blood-donation/Screenshot 2026-02-17 114001.png',
      '/projects/blood-donation/Screenshot 2026-02-17 114532.png'
    ],
    featured: true
  },
  {
    id: 'maritime-boundary-alert-system',
    title: 'Maritime Boundary Alert System',
    category: 'IoT',
    shortDescription:
      'An IoT-based system using GPS to alert fishermen when approaching restricted international maritime boundaries.',
    fullDescription:
      'Designed and engineered an IoT coastal security solution that tracks fishing vessel coordinates in real-time. Using GPS modules and geofencing algorithms, the system delivers immediate multi-stage warnings to prevent accidental crossing into international waters.',
    problemStatement:
      'Fishermen often unknowingly cross maritime borders due to harsh sea conditions and lack of real-time positioning feedback, resulting in arrest, vessel confiscation, and security risks.',
    solution:
      'Engineered an embedded hardware and software device equipped with GPS location tracking, boundary geofencing, multi-tone audio alarms, and emergency radio/GSM alert transmission to shore monitoring posts.',
    technologies: ['Python', 'C', 'IoT Hardware', 'GPS Sensor Module', 'Microcontroller', 'Geofencing Algorithm'],
    features: [
      'Real-time vessel GPS coordinate computation using Haversine formula',
      'Multi-zone warning buffer (Safe, Warning, Danger zones)',
      'High-decibel audio alarm and LED visual alerts for crew',
      'Emergency SOS trigger transmitting location to shore control',
      'Low-power embedded code execution for prolonged battery durability'
    ],
    challenges: [
      'Maintaining reliable sensor communication and GPS accuracy amidst harsh ocean weather',
      'Optimizing firmware memory and processing loops on resource-constrained microcontrollers'
    ],
    lessonsLearned: [
      'Gained deep experience in geospatial mathematical calculations (Haversine formula)',
      'Showcased at KPR College project presentation for coastal security innovation'
    ],
    githubUrl: 'https://github.com/NithishMee/maritime-boundary-alert',
    liveUrl: 'https://github.com/NithishMee',
    image: '/projects/icons/maritime-alert.png',
    featured: true
  },
  {
    id: 'bike-showroom-app',
    title: 'Bike Showroom Mobile App',
    category: 'Mobile',
    shortDescription:
      'A mobile application allowing users to browse bikes, compare specifications, and book bikes online.',
    fullDescription:
      'Built an end-to-end interactive mobile showroom experience (RPT Motors) where automobile enthusiasts can explore latest bike models, compare specs side-by-side, view dynamic pricing breakdowns, select preferred date & time slots, and schedule online test rides or purchases.',
    problemStatement:
      'Traditional bike buying requires multiple physical showroom visits to compare models, check color variants, and inquire about test ride availability.',
    solution:
      'Developed a feature-packed mobile app providing 360-degree model viewing, instant specification comparison tables, financial EMI calculators, and seamless booking reservation.',
    technologies: ['React Native / Mobile UI', 'JavaScript', 'Node.js', 'Express.js', 'MySQL', 'MongoDB'],
    features: [
      'Authentication flow (Sign In, Create Account & Email Verification)',
      'Interactive bike model showcase (Hero XPulse 200 4V, Hero HF Deluxe, Xtreme 125R)',
      'Side-by-side technical specification comparison tool (Price, Engine, Mileage)',
      'Online test ride appointment booking with date & time slot selection',
      'Membership offers, GoodLife deals, and showroom directions'
    ],
    challenges: [
      'Optimizing dynamic image lists and catalog scrolling performance on low-end mobile devices',
      'Structuring flexible database schemas to support varying motorcycle specification fields'
    ],
    lessonsLearned: [
      'Mastered mobile UX patterns, fluid component transitions, and dynamic spec filtering',
      'Integrated relational MySQL queries alongside flexible MongoDB document models'
    ],
    githubUrl: 'https://github.com/NithishMee/bike-showroom-app',
    liveUrl: 'https://github.com/NithishMee',
    image: '/projects/icons/bike-showroom.png',
    screenshots: [
      '/projects/bike-showroom/1.jpeg',
      '/projects/bike-showroom/2.jpeg',
      '/projects/bike-showroom/3.jpeg',
      '/projects/bike-showroom/4.jpeg',
      '/projects/bike-showroom/5.jpeg',
      '/projects/bike-showroom/6.jpeg',
      '/projects/bike-showroom/7.jpeg',
      '/projects/bike-showroom/8.jpeg',
      '/projects/bike-showroom/9.jpeg',
      '/projects/bike-showroom/10.jpeg',
      '/projects/bike-showroom/11.jpeg'
    ],
    featured: true
  }
];
