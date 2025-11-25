# Yash Anil Mali - Portfolio Website

A modern, responsive, and animated portfolio website showcasing my work as a Machine Learning Engineer, Generative AI Developer, and Data Analytics Specialist.

## 🚀 Features

- **Modern Premium UI** - Beautiful, clean design with gradient accents
- **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- **Smooth Animations** - Powered by Framer Motion and GSAP
- **Interactive Components** - Hover effects, transitions, and micro-interactions
- **Dark Mode Support** - Built-in dark mode styling
- **Performance Optimized** - Fast loading and smooth scrolling

## 🛠 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **GSAP** - Advanced animations
- **Lucide React** - Icon library

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗 Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

## 📝 Configuration

### Update Certification Links

Edit `src/sections/Certifications.jsx` and replace the placeholder Google Drive links with your actual certificate URLs:

```javascript
{
  title: 'AWS Cloud Foundations',
  link: 'https://drive.google.com/file/d/YOUR_ACTUAL_FILE_ID/view',
  // ...
}
```

### Add Resume PDF

1. Place your resume PDF file in the `public/` folder
2. Name it `resume.pdf`
3. The download link in the Hero section will automatically work

### Update Project Links

Edit `src/sections/Projects.jsx` to add your actual GitHub and demo links.

## 🚀 Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts to complete deployment.

### Option 2: Deploy via GitHub

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Go to [vercel.com](https://vercel.com) and sign in with GitHub

3. Click "New Project"

4. Import your GitHub repository

5. Vercel will automatically detect Vite and configure the build settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

6. Click "Deploy"

7. Your site will be live in minutes!

### Custom Domain (Optional)

1. In your Vercel project dashboard, go to Settings → Domains
2. Add your custom domain
3. Follow the DNS configuration instructions

## 📱 Sections

- **Hero** - Animated introduction with typing effect
- **About** - Personal information and education timeline
- **Skills** - Technical skills with animated cards
- **Experience** - Work experience and internships
- **Projects** - Portfolio projects with links
- **Achievements** - Competition results and awards
- **Publications** - Research and patents
- **Leadership** - Leadership roles and activities
- **Certifications** - Professional certifications
- **Contact** - Contact form and social links

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme.

### Animations

Adjust animation timings and effects in individual component files using Framer Motion props.

### Content

All content is in the section files under `src/sections/`. Update them with your information.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Yash Anil Mali**
- GitHub: [@669yash](https://github.com/669yash)
- LinkedIn: [yashanilmali](https://linkedin.com/in/yashanilmali)
- Email: maliyash1050@gmail.com

---

Made with ❤️ using React, Vite, and Tailwind CSS

