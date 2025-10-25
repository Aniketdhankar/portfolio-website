# 🌟 Aniket Singh Dhankar - Portfolio

A modern, responsive portfolio website showcasing my projects, skills, and achievements. Built with React and Vite for optimal performance.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=for-the-badge&logo=vite)

## 🚀 Live Demo

[View Live Site](https://aniketdhankarcse.netlify.app/) <!-- Update with your deployed URL -->

## ✨ Features

- 🎨 **Modern UI Design** - Clean, professional layout with gradient animations
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🎬 **Animated Background** - Dynamic galaxy video background
- 🔄 **Smooth Animations** - AOS (Animate On Scroll) integration
- 🤖 **3D Graphics** - Spline 3D model integration in hero section
- 📊 **Interactive Carousel** - Showcasing achievements and highlights
- 💼 **Project Showcase** - Detailed project cards with descriptions
- 📬 **Contact Form** - Easy way for visitors to get in touch
- ⚡ **Fast Performance** - Optimized build with Vite

## 🛠️ Tech Stack

- **Frontend Framework:** React 19.1.1
- **Build Tool:** Vite 7.1.7
- **Language:** JavaScript (JSX)
- **Styling:** CSS3 with custom animations
- **Animations:** AOS (Animate On Scroll) 2.3.1
- **Icons:** Boxicons 2.1.4
- **3D Graphics:** Spline Viewer

## 📂 Project Structure

```
aniket_portfolio/
├── public/
│   ├── images/          # Project screenshots, profile images
│   ├── videos/          # Background video (galaxy.webm)
│   └── docs/            # Documents folder
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx   # Navigation header
│   │   ├── Hero.jsx     # Hero section with 3D model
│   │   ├── About.jsx    # About section
│   │   ├── Skills.jsx   # Skills showcase
│   │   ├── Projects.jsx # Project cards
│   │   ├── Highlights.jsx # Achievement carousel
│   │   ├── Contact.jsx  # Contact form
│   │   └── Footer.jsx   # Footer section
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Aniketdhankar/aniket_portfolio.git
   cd aniket_portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**
   ```bash
   npm run build
   ```
   The optimized files will be in the `dist/` folder.

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |

## 🎨 Customization

### Update Personal Information
- Edit `src/components/About.jsx` for bio and personal details
- Edit `src/components/Contact.jsx` for contact information
- Update social links in `src/components/Header.jsx` and `Footer.jsx`

### Add/Update Projects
Edit the `projectsData` array in `src/components/Projects.jsx`:
```javascript
const projectsData = [
  {
    title: 'Project Title',
    image: '/images/project.png',
    points: [
      'Description point 1',
      'Description point 2',
    ],
  },
];
```

### Add/Update Skills
Edit the `skillsData` array in `src/components/Skills.jsx`.

### Change Colors
Modify color variables in `src/index.css` for global theme changes.

## 📱 Sections

1. **Header** - Navigation with responsive mobile menu
2. **Hero** - Introduction with 3D Spline model
3. **About** - Personal information and background
4. **Skills** - Technical skills organized by category
5. **Projects** - Portfolio projects with descriptions
6. **Highlights** - Recent achievements carousel
7. **Contact** - Contact form and information
8. **Footer** - Quick links and social media

## 🌐 Deployment

### Deploy to Netlify (Recommended)
1. Build the project: `npm run build`
2. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag and drop the `dist/` folder
4. Your site is live! 🎉

### Deploy to Vercel
```bash
npm install -g vercel
npm run build
vercel --prod
```

### Deploy to GitHub Pages
```bash
npm install --save-dev gh-pages
```
Add to `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```
Run: `npm run deploy`

## 📊 Performance

- ⚡ Fast load times with Vite optimization
- 🗜️ Minified and compressed assets
- 📦 Code splitting for optimal performance
- 🎯 SEO friendly structure

## 🤝 Connect With Me

- **Email:** work.aniketdhankar@gmail.com
- **LinkedIn:** [Aniket Singh Dhankar](https://linkedin.com/in/aniket-singh-dhankar-2b6489273)
- **GitHub:** [Aniketdhankar](https://github.com/Aniketdhankar)

## 📄 License

© 2025 Aniket Singh Dhankar. All Rights Reserved.

---

⭐ **If you like this project, please give it a star!**

**Made with ❤️ using React & Vite**
