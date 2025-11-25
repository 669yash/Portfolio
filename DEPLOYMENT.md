# Deployment Guide - Vercel

This guide will walk you through deploying your portfolio website to Vercel.

## Prerequisites

- A GitHub account
- Your portfolio code pushed to a GitHub repository
- A Vercel account (free tier is sufficient)

## Step-by-Step Deployment

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio website"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Sign in to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up" or "Log In"
   - Choose "Continue with GitHub"

3. **Create New Project**
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Select the repository containing your portfolio

4. **Configure Project Settings**
   Vercel will auto-detect Vite, but verify these settings:
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

5. **Environment Variables** (if needed)
   - If you add any environment variables later, add them here
   - For now, you don't need any

6. **Deploy**
   - Click "Deploy"
   - Wait 1-2 minutes for the build to complete
   - Your site will be live at `https://your-project-name.vercel.app`

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Choose your settings
   - Your site will be deployed

4. **Production Deployment**
   ```bash
   vercel --prod
   ```

## Custom Domain Setup

1. **In Vercel Dashboard**
   - Go to your project
   - Click "Settings" → "Domains"
   - Click "Add Domain"

2. **Add Your Domain**
   - Enter your domain name (e.g., `yashmali.dev`)
   - Follow the DNS configuration instructions

3. **Update DNS Records**
   - Add the CNAME or A record as instructed
   - Wait for DNS propagation (can take up to 48 hours, usually much faster)

4. **SSL Certificate**
   - Vercel automatically provisions SSL certificates
   - Your site will be available over HTTPS

## Post-Deployment Checklist

- [ ] Test all links (GitHub, LinkedIn, email, phone)
- [ ] Verify all sections load correctly
- [ ] Test on mobile devices
- [ ] Check animations and transitions
- [ ] Update certification links with actual Google Drive URLs
- [ ] Upload actual resume.pdf to `public/` folder
- [ ] Test contact form (frontend only - shows alert)
- [ ] Verify smooth scrolling works
- [ ] Check dark mode (if applicable)

## Updating Your Site

1. **Make Changes Locally**
   ```bash
   # Make your edits
   git add .
   git commit -m "Update portfolio"
   git push
   ```

2. **Automatic Deployment**
   - Vercel automatically detects pushes to your main branch
   - It will rebuild and redeploy your site
   - Usually takes 1-2 minutes

3. **Preview Deployments**
   - Vercel creates preview deployments for pull requests
   - Test changes before merging to main

## Troubleshooting

### Build Fails

1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Verify Node.js version (Vercel uses Node 18+ by default)

### Assets Not Loading

1. Ensure all assets are in the `public/` folder
2. Use relative paths (e.g., `/resume.pdf` not `./resume.pdf`)
3. Check file names match exactly (case-sensitive)

### Animations Not Working

1. Clear browser cache
2. Check browser console for errors
3. Verify Framer Motion and GSAP are installed

## Performance Optimization

Vercel automatically optimizes your site, but you can:

1. **Enable Analytics** (Vercel Pro)
   - Go to Analytics tab
   - Monitor performance metrics

2. **Image Optimization**
   - Use Next.js Image component if migrating
   - Or optimize images before uploading

3. **Code Splitting**
   - Already handled by Vite
   - No additional configuration needed

## Support

- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Vercel Community: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

---

Your portfolio is now live! 🎉

