# Nithish G - Personal Portfolio Website

A world-class, responsive, high-performance personal portfolio website engineered for **Nithish G** (Computer Science & Engineering Student / Full Stack Developer). Built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, and EmailJS.

![Portfolio Preview](/public/Nithish_G.png)

## 🌟 Key Features

- **Personalized Resume Data Integration**: Strictly built around authentic achievements from `NithishG-Resume.pdf`.
- **Modern Design Aesthetics**: Glassmorphism cards, ambient glowing mesh blobs, customizable theme mode (Dark & Light mode), and smooth typography.
- **Dynamic Framer Motion Animations**: Smooth page reveals, staggered card transitions, hover micro-interactions, and role title switcher.
- **Interactive Project Showcase**: Filterable project gallery (`All`, `Web`, `IoT`, `Mobile`) with expandable modal case studies detailing Problem Statements, Technical Solutions, Engineering Challenges, and Lessons Learned.
- **Live GitHub API Synchronization**: Automatically fetches public repositories, stargazers, forks, and followers from `@NithishMee` with graceful offline fallbacks.
- **EmailJS Contact Engine**: Live contact form with validation, loading states, error handling, and `canvas-confetti` success celebration.
- **Resume Preview & Download**: Interactive modal PDF viewer for `NithishG-Resume.pdf` with direct download action.
- **Custom Cursor & Top Scroll Indicator**: Smooth trailing cursor for desktop viewports and thin gradient scroll progress indicator.
- **Accessibility & SEO**: Semantic HTML5 elements, ARIA labels, keyboard focus styling, Open Graph social cards, and mobile-first responsiveness.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS Variables
- **Animations**: Framer Motion
- **Icons**: React Icons (`react-icons`)
- **Contact Service**: EmailJS (`@emailjs/browser`)
- **Effects**: Canvas Confetti (`canvas-confetti`)

---

## 📁 Scalable Architecture & Folder Structure

```
src/
├── assets/             # Static images and media assets
├── components/
│   ├── common/         # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── ScrollProgress.tsx
│   │   ├── GlassCard.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── ProjectModal.tsx
│   │   ├── ResumeModal.tsx
│   │   └── AnimatedBackground.tsx
│   └── sections/       # Primary portfolio page sections
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── SkillsSection.tsx
│       ├── ProjectsSection.tsx
│       ├── AchievementsSection.tsx
│       ├── CertificationsSection.tsx
│       ├── EducationSection.tsx
│       ├── GitHubSection.tsx
│       ├── CodingProfilesSection.tsx
│       ├── ResumeSection.tsx
│       └── ContactSection.tsx
├── constants/          # Design tokens and theme settings
├── data/               # Centralized data files for instant updating
│   ├── personal.ts     # Bio, contact info, stats, and languages
│   ├── projects.ts     # Project details, features, and case studies
│   ├── skills.ts       # Categorized technical skills & learning status
│   ├── achievements.ts # Hackathons, IEEE presentations, and awards
│   ├── certifications.ts # MongoDB & Oracle certifications
│   ├── education.ts    # Engineering CGPA & school milestones
│   ├── codingProfiles.ts # GitHub, LinkedIn, LeetCode, HackerRank
│   └── socials.ts      # Social media handles & quick links
├── hooks/              # Custom React hooks
│   ├── useTheme.ts     # Dark/Light theme state with localStorage
│   ├── useActiveSection.ts # IntersectionObserver active tab hook
│   ├── useScrollProgress.ts # Top scroll bar calculator
│   └── useGitHub.ts    # Dynamic GitHub API hook with fallback
├── types/              # TypeScript interface definitions
├── index.css           # Custom CSS variables, glassmorphism, fonts
├── App.tsx             # Main application layout
└── main.tsx            # Entry point
```

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18.x or higher)
- npm / yarn / pnpm

### 2. Installation
```bash
git clone https://github.com/NithishMee/portfolio.git
cd portfolio
npm install
```

### 3. Running Locally
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Building for Production
```bash
npm run build
```

---

## ✏️ Customization Guide

### Updating Personal Information
Modify `src/data/personal.ts` to change your name, role titles, contact information, CGPA, or summary:
```typescript
export const personalInfo = {
  name: 'Nithish G',
  email: 'iamnithish08@gmail.com',
  // ...
};
```

### Adding New Projects
Add a new object to the `projectsData` array in `src/data/projects.ts`:
```typescript
{
  id: 'my-new-project',
  title: 'My New App',
  category: 'Web',
  shortDescription: 'Quick description',
  fullDescription: 'Detailed case study description',
  problemStatement: 'Problem solved',
  solution: 'Engineering solution',
  technologies: ['React', 'TypeScript', 'Tailwind'],
  features: ['Feature 1', 'Feature 2'],
  challenges: ['Challenge 1'],
  lessonsLearned: ['Lesson 1'],
  githubUrl: 'https://github.com/username/repo',
  image: 'https://images.unsplash.com/...',
  featured: true
}
```

### Configuring EmailJS for Contact Form
1. Create a free account at [EmailJS](https://www.emailjs.com/).
2. Create an Email Service and Email Template.
3. Create a `.env` file in the project root:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Replacing Resume PDF
Replace `public/NithishG-Resume.pdf` with your updated PDF file while keeping the filename intact.

---

## 🌐 Deployment Options

### Deploying to Vercel (Recommended)
1. Push your code to GitHub.
2. Go to [Vercel](https://vercel.com/) and click **New Project**.
3. Import your GitHub repository.
4. Click **Deploy**. Vercel will automatically detect Vite and configure the build settings (`npm run build`, output dir: `dist`).

### Deploying to Netlify
1. Connect your repository on [Netlify](https://www.netlify.com/).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **Deploy Site**.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
