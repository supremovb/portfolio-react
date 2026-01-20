# Primo Velasquez Portfolio - React Version

A modern, glassmorphism-themed portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Glassmorphism + Aurora Theme** - Frosted glass effects with animated aurora gradients
- **Framer Motion Animations** - Smooth page transitions, scroll animations, and interactive elements
- **Fully Responsive** - Optimized for all screen sizes
- **TypeScript** - Type-safe code for better maintainability
- **Tailwind CSS** - Utility-first CSS for rapid styling
- **SEO Optimized** - Meta tags and structured data

## 🛠️ Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- React Icons
- React Intersection Observer

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
portfolio-react/
├── public/
│   ├── favicon.svg
│   ├── profile.jpg          # Add your profile picture
│   ├── profile2.png         # Add your secondary profile picture
│   ├── resume.pdf           # Add your resume
│   └── projects/            # Add project screenshots
│       ├── barangay-incident.jpg
│       ├── ceso-mobile.jpg
│       └── ... (other project images)
├── src/
│   ├── components/
│   │   ├── AuroraBackground.tsx
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── Preloader.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## 🖼️ Adding Your Images

1. **Profile Pictures**: Place `profile.jpg` and `profile2.png` in the `public/` folder
2. **Project Screenshots**: Create a `public/projects/` folder and add your project images
3. **Resume**: Add your `resume.pdf` to the `public/` folder

## 🎨 Theme Customization

The theme colors can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#7c3aed',  // Main purple
    light: '#a78bfa',
    dark: '#5b21b6',
  },
  secondary: {
    DEFAULT: '#06b6d4',  // Cyan accent
    light: '#22d3ee',
    dark: '#0891b2',
  },
  // ... more colors
}
```

## 📱 Contact Form Setup

To enable the contact form, you can integrate with:

- [EmailJS](https://www.emailjs.com/)
- [Formspree](https://formspree.io/)
- Custom backend API

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com/)
3. Deploy automatically

### Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com/)
3. Set build command: `npm run build`
4. Set publish directory: `dist`

## 👤 Author

**Primo Velasquez**

- GitHub: [@supremovb](https://github.com/supremovb)
- Facebook: [@supremovb](https://facebook.com/supremovb)
- Email: primokenjivelasquez@gmail.com

## 📄 License

This project is open source and available under the MIT License.
