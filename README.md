# Gravity Homestays

A modern, luxury boutique homestay website built with Next.js 16, React 19, and Tailwind CSS. This project showcases a premium hospitality experience with stunning 3D visuals, smooth animations, and enterprise-grade SEO optimization.

![Next.js](https://img.shields.io/badge/Next.js-16.2.11-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🌟 Features

### User Experience
- **Immersive 3D Background**: Interactive Three.js scene with floating particles and building model
- **Smooth Scrolling**: Lenis-powered smooth scroll for a premium feel
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Dark/Light Mode**: Automatic theme switching based on system preferences
- **Accessibility**: WCAG 2.2 AA compliant with keyboard navigation and screen reader support

### SEO & Performance
- **Server-Side Rendering**: Optimized for search engines with Next.js App Router
- **Structured Data**: Complete JSON-LD schema for rich snippets (LodgingBusiness, WebSite, BreadcrumbList)
- **Meta Tags**: Comprehensive Open Graph, Twitter Cards, and canonical URLs
- **Image Optimization**: Next.js Image component with lazy loading and responsive sizing
- **Sitemap & Robots**: Dynamic sitemap generation and robots.txt configuration
- **Core Web Vitals**: Optimized for LCP, FID, and CLS

### Booking & Contact
- **WhatsApp Integration**: Direct booking inquiries via WhatsApp
- **Date Selection**: Interactive check-in/check-out date picker with automatic duration calculation
- **Form Validation**: Real-time form validation with error handling
- **Contact Information**: Integrated Google Maps with exact location coordinates

### Visual Design
- **Glassmorphism UI**: Modern glass-effect components with backdrop blur
- **Gold Accent Theme**: Elegant gold color scheme with gradient effects
- **Framer Motion Animations**: Smooth entrance animations and hover effects
- **Custom Scrollbar**: Styled scrollbar matching the theme
- **Typography**: Inter font with optimized loading

## 🚀 Tech Stack

### Frontend Framework
- **Next.js 16.2.11** - React framework with App Router
- **React 19** - UI library
- **TypeScript 5** - Type-safe development

### Styling
- **Tailwind CSS 3** - Utility-first CSS framework
- **CSS Modules** - Component-scoped styles
- **Custom CSS** - Animations and special effects

### 3D & Animations
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Helpers for R3F
- **Framer Motion** - Production-ready motion library
- **GSAP** - Professional-grade animation library
- **Lenis** - Smooth scroll library

### UI Components
- **Lucide React** - Beautiful icon library
- **React Hot Toast** - Toast notifications
- **React Hook Form** - Form state management

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS transformations
- **Turbopack** - Next.js bundler

## 📦 Installation

### Prerequisites
- Node.js 18.x or higher
- npm, yarn, or pnpm

### Clone the Repository
```bash
git clone https://github.com/yourusername/gravity-homestays.git
cd gravity-homestays
```

### Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### Environment Variables
Create a `.env.local` file in the root directory:

```env
# Add any environment variables here
# NEXT_PUBLIC_API_URL=your_api_url
```

## 🏃 Running the Project

### Development Mode
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Start Production Server
```bash
npm start
# or
yarn start
# or
pnpm start
```

## 📁 Project Structure

```
gravity-homestays/
├── public/                 # Static assets (images, favicon, etc.)
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # Root layout with metadata
│   │   ├── page.tsx      # Home page
│   │   ├── globals.css   # Global styles
│   │   ├── robots.ts     # Robots.txt configuration
│   │   └── sitemap.ts    # Sitemap generation
│   ├── components/       # React components
│   │   ├── Hero.tsx      # Hero section
│   │   ├── Navigation.tsx # Navigation bar
│   │   ├── RoomsSection.tsx
│   │   ├── AmenitiesSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── EnquirySection.tsx
│   │   ├── Footer.tsx
│   │   ├── Background3D.tsx # 3D background
│   │   ├── SmoothScroll.tsx
│   │   ├── StructuredData.tsx # JSON-LD
│   │   └── ClientComponents.tsx # Client-side wrappers
│   └── lib/              # Utility functions
│       └── utils.ts      # Helper functions
├── next.config.js        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## 🎨 Key Components

### Hero Section
- Full-screen hero with 3D background
- Animated text with GSAP
- Call-to-action buttons
- Scroll indicator

### Rooms Section
- Room cards with pricing
- Image gallery
- Amenities list
- Hover effects

### Amenities Section
- Grid of amenity tiles
- Icon-based display
- Descriptions

### Gallery Section
- Masonry-style gallery
- Image frames with hover effects
- Lazy-loaded images

### Testimonials Section
- Guest reviews with ratings
- 3D card effects on hover
- Star rating display

### Enquiry Section
- Booking form with validation
- Date picker with duration calculation
- WhatsApp integration
- Contact information

### Footer
- Business information
- Google Maps embed
- Social media links
- Copyright notice

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
- **Netlify**: Connect your GitHub repository
- **AWS Amplify**: Configure build settings
- **Docker**: Use the included Dockerfile (if available)

## 🔧 Configuration

### Next.js Configuration (`next.config.js`)
- Image optimization settings
- Remote patterns for external images
- Environment variables

### Tailwind Configuration (`tailwind.config.ts`)
- Custom color palette
- Theme extensions
- Plugin configurations

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, SEO, Accessibility)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1

## ♿ Accessibility

- WCAG 2.2 AA compliant
- Keyboard navigation support
- Screen reader friendly
- ARIA labels and roles
- Focus indicators
- Reduced motion support
- Skip to main content link

## 🔍 SEO Features

- Server-side rendering
- Dynamic meta tags
- Structured data (JSON-LD)
- Sitemap generation
- Robots.txt configuration
- Canonical URLs
- Open Graph tags
- Twitter Card meta tags
- Image alt text optimization

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style
- Use TypeScript for type safety
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

**Gravity Homestays**
- **Address**: Swarna bharathi, indoor stadium road, Resapuvanipalem, Dwaraka Nagar, Visakhapatnam, Andhra Pradesh 530016
- **Phone**: +91 8886222497, +91 8886222498
- **Email**: gravityhomestays@gmail.com
- **Website**: https://gravityhomestays.com

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Three.js community for 3D graphics
- Framer Motion for smooth animations
- Tailwind CSS for the utility-first approach
- All open-source contributors

## 📸 Screenshots

<!-- Add screenshots here -->
![Homepage](./public/screenshots/home.png)
![Rooms](./public/screenshots/rooms.png)
![Gallery](./public/screenshots/gallery.png)

---

Built with ❤️ by [Harsha Vardhan Raj](https://www.instagram.com/harsha_vardhan.raj/)

