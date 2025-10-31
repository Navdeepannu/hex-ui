# Hex UI - Modern React Component Library

<div align="center">
  <h3>Beautiful, Production-Ready UI Components</h3>
  <p>Built with React, Next.js, Tailwind CSS, and Framer Motion</p>

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
  [![Next.js](https://img.shields.io/badge/Next.js-15.5-black)](https://nextjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)](https://tailwindcss.com/)
</div>

---

## Features

- **50+ Production-Ready Components** - Hero sections, features, pricing, testimonials, CTAs, and more
- **Fully Responsive** - Perfect on mobile, tablet, and desktop
- **Dark Mode Support** - Built-in theme switching with next-themes
- **Accessible** - WCAG 2.1 compliant with proper ARIA labels
- **Type-Safe** - Built with TypeScript for better development experience
- **Customizable** - Easy to customize with Tailwind CSS and CSS variables
- **Copy & Paste** - Simple integration with existing projects
- **Framer Motion Animations** - Smooth, performant animations out of the box
- **Regular Updates** - New components added monthly
- **SEO Optimized** - Built with best practices for search engines

## Quick Start

### Installation

```bash
# Clone or download the repository
npm install

# Run the development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the component library.

### Using Components in Your Project

1. **Browse the component library** at `/templates`
2. **Copy the component code** you want to use
3. **Install required dependencies**:

```bash
npm install framer-motion lucide-react @radix-ui/react-* class-variance-authority clsx tailwind-merge
```

4. **Paste into your project** and customize as needed

### Component Categories

- **Hero Sections** - Eye-catching landing page headers with multiple layout options
- **Feature Sections** - Showcase your product features with icons and descriptions
- **Pricing Tables** - Beautiful pricing cards with comparison features
- **Testimonials** - Customer reviews with carousel and grid layouts
- **Call-to-Action** - Conversion-focused sections with gradients and animations
- **FAQ Sections** - Collapsible question and answer components
- **Content Sections** - Blog posts, articles, and rich content layouts
- **Navigation** - Headers, footers, and sidebar navigation
- **Forms** - Login, signup, contact forms with validation
- **Backgrounds** - Animated backgrounds, patterns, and effects

## Tech Stack

- **Framework:** Next.js 15.5 with App Router
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion 12
- **Components:** Radix UI primitives
- **Icons:** Lucide React, Tabler Icons
- **Theme:** next-themes for dark mode

## Project Structure

```
hex-ui/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── (root)/            # Main routes
│   │   │   ├── components/    # Component showcase pages
│   │   │   └── docs/          # Documentation pages
│   │   ├── templates/         # Template browsing page
│   │   └── preview/           # Component preview routes
│   ├── components/            # Reusable components
│   │   ├── sections/          # Section components (hero, features, etc.)
│   │   ├── ui/                # Base UI components
│   │   ├── animate-ui/        # Animated components
│   │   └── landing/           # Landing page components
│   ├── data/                  # Data files and registries
│   ├── hooks/                 # Custom React hooks
│   └── lib/                   # Utility functions
├── public/                    # Static assets
└── package.json
```

## Component Example

```tsx
import { Hero01 } from '@/components/sections/hero/hero-01'

export default function LandingPage() {
  return (
    <main>
      <Hero01 />
      {/* Add more sections */}
    </main>
  )
}
```

## Customization

All components are built with Tailwind CSS and can be easily customized:

```tsx
// Modify colors, spacing, and more
<Hero01
  className="bg-gradient-to-r from-blue-600 to-purple-600"
  titleClassName="text-5xl font-bold"
/>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- **Lighthouse Score:** 95+ on all metrics
- **Bundle Size:** Optimized with tree-shaking
- **Image Optimization:** Built-in Next.js image optimization
- **Code Splitting:** Automatic route-based splitting

## Pricing

### Free (MIT License)
- All components with attribution
- Regular updates
- Community support
- Personal and commercial projects

### Pro License ($199 one-time)
- All components without attribution
- Priority support via email
- Early access to new components
- Custom component requests (2 per year)
- Lifetime updates
- Commercial use

### Enterprise License ($999 one-time)
- Everything in Pro
- Dedicated support channel
- Custom component development (unlimited)
- Private Slack/Discord channel
- White-label options
- Team training session

Visit [https://hex-ui.com/pricing](https://hex-ui.com/pricing) for more details.

## Documentation

Full documentation is available in the `/docs` section of the application:

- [Getting Started](/docs/introduction)
- [Installation Guide](/docs/install-nextjs)
- [Tailwind CSS Setup](/docs/install-tailwindcss)
- [Component API Reference](/docs/components)
- [Theming Guide](/docs/theming)

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Support

- **Email:** support@hex-ui.com
- **Discord:** [Join our community](https://discord.gg/hex-ui)
- **Twitter:** [@hexui](https://twitter.com/hexui)
- **GitHub Issues:** [Report bugs](https://github.com/yourusername/hex-ui/issues)

## Roadmap

- [ ] Add 30+ more components
- [ ] Vue.js version
- [ ] Svelte version
- [ ] Component builder tool
- [ ] Figma design kit
- [ ] CLI tool for component installation
- [ ] Video tutorials
- [ ] Component playground with live editing

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a detailed list of changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

For commercial licensing options, visit [https://hex-ui.com/pricing](https://hex-ui.com/pricing).

---

<div align="center">
  <strong>Built with ❤️ by the Hex UI Team</strong>
  <br />
  <sub>Making beautiful UI accessible to everyone</sub>
</div>
