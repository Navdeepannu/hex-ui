# Hex-UI

A modern React component library built with **Tailwind CSS** and **shadcn/ui**. Copy-paste ready components for faster development.

## Features

- **Beautiful Components** - Modern UI components with smooth animations
- **Copy-Paste Ready** - No complex setup, just copy and use
- **Shadcn CLI Compatible** - Install with a single command
- **TypeScript First** - Fully typed components with excellent DX
- **Mobile Responsive** - Works seamlessly across all devices
- **Accessible** - Built with ARIA guidelines and keyboard navigation
- **Customizable** - Easy to customize with Tailwind CSS
- **Performance** - Optimized for speed and bundle size

## Quick Start

### Install with Shadcn CLI (Recommended)

```bash
npx shadcn@latest add https://hex-ui.com/r/component-name
```

### Copy and Paste

1. Browse the [Components](https://hex-ui.com)
2. Copy the component code
3. Paste it into your project
4. Install dependencies if needed

## Available Components

### Carousels

- **Stacked Tabs** - Interactive image carousel with stacked card interface

### Navigation

- **Floating Navbar** - Modern navigation with glassmorphism design

### Backgrounds

- **Hexagon Background** - Interactive hexagon grid with ripple effects

### Text Animations

- **Split Text** - Animated text with character and word-level animations

### Avatars

- **Animated Avatar** - Interactive avatar with glassmorphism tooltips

## Usage Example

```tsx
import { StackedTabs } from "@/components/ui/stacked-tabs";
import { FloatingNavbar } from "@/components/ui/floating-navbar";

export default function HomePage() {
  return (
    <div>
      <FloatingNavbar />
      <main className="container mx-auto px-4">
        <StackedTabs />
      </main>
    </div>
  );
}
```

## Prerequisites

- React 18+
- Tailwind CSS 3.0+
- TypeScript (recommended)

## Customization

All components are built with customization in mind:

### Tailwind CSS Classes

```tsx
<StackedTabs className="mx-auto w-full max-w-4xl" />
```

### Component Props

```tsx
<StackedTabs buttonWidth={120} springConfig={{ stiffness: 300, damping: 20 }} />
```

### CSS Variables

```css
:root {
  --primary: 222.2 84% 4.9%;
  --primary-foreground: 210 40% 98%;
}
```

## Dependencies

Core dependencies that power Hex-UI components:

- **motion/react** - Smooth animations and gestures
- **tailwind-merge** - Intelligent Tailwind class merging
- **clsx** - Conditional class names

## Documentation

Visit [hex-ui.com](https://hex-ui.com) for:

- Component documentation
- Interactive examples
- Customization guides
- Copy-paste code snippets

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) - For the excellent component architecture
- [Tailwind CSS](https://tailwindcss.com/) - For the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - For smooth animations
- [React](https://reactjs.org/) - For the component framework

## Stats

![GitHub stars](https://img.shields.io/github/stars/Navdeepannu/hex-ui?style=social)
![GitHub forks](https://img.shields.io/github/forks/Navdeepannu/hex-ui?style=social)
![GitHub issues](https://img.shields.io/github/issues/Navdeepannu/hex-ui)
![GitHub pull requests](https://img.shields.io/github/issues-pr/Navdeepannu/hex-ui)

---

<div align="center">
  <p>Built with ❤️ by <a href="https://www.navdeepsingh.dev">Navdeep Singh</a></p>
  <p>If you find this project helpful, please consider giving it a ⭐</p>
</div>
