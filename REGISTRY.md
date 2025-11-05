# Hex UI Registry

This project includes a shadcn/ui-compatible registry that allows users to easily install components using the CLI.

## Overview

The Hex UI registry enables developers to install components directly into their projects using the shadcn CLI, making it easy to distribute and share components.

## Registry Structure

```
hex-ui/
├── registry.json           # Main registry configuration
├── registry/               # Registry components
│   └── default/           # Default style components
│       ├── animated-text.tsx
│       ├── background-ripple-effect.tsx
│       └── striped-background.tsx
└── public/
    └── r/                 # Built registry files (generated)
        ├── registry.json
        ├── animated-text.json
        ├── background-ripple-effect.json
        └── striped-background.json
```

## Available Components

### 1. Animated Text
A flexible text animation component with multiple animation presets including blur, fade, scale, and slide effects.

**Installation:**
```bash
npx shadcn add https://hex-ui.com/r/animated-text.json
```

**Dependencies:**
- motion
- clsx
- tailwind-merge

### 2. Background Ripple Effect
An interactive hexagon background component with ripple effects.

**Installation:**
```bash
npx shadcn add https://hex-ui.com/r/background-ripple-effect.json
```

**Dependencies:**
- clsx
- tailwind-merge

**Additional Configuration:**
This component includes custom Tailwind CSS animations. The CLI will automatically configure your `tailwind.config` with the required animation.

### 3. Striped Background
A modern striped background component with diagonal stripes.

**Installation:**
```bash
npx shadcn add https://hex-ui.com/r/striped-background.json
```

**Dependencies:**
- clsx
- tailwind-merge

## Building the Registry

To build the registry and generate the JSON files:

```bash
npm run registry:build
```

This command will:
1. Read the `registry.json` configuration
2. Process each component in the `registry/default/` directory
3. Generate individual JSON files in `public/r/`
4. Create a master registry index at `public/r/registry.json`

## Adding New Components

To add a new component to the registry:

1. **Create the component file** in `registry/default/`:
   ```tsx
   // registry/default/my-component.tsx
   "use client";

   import { cn } from "@/lib/utils";

   export function MyComponent({ className }) {
     return <div className={cn("...", className)}>...</div>;
   }
   ```

2. **Add the component to registry.json**:
   ```json
   {
     "name": "my-component",
     "type": "registry:component",
     "title": "My Component",
     "description": "A brief description of what the component does.",
     "dependencies": ["clsx", "tailwind-merge"],
     "registryDependencies": [],
     "files": [
       {
         "path": "registry/default/my-component.tsx",
         "type": "registry:component"
       }
     ],
     "categories": ["category-name"]
   }
   ```

3. **Build the registry**:
   ```bash
   npm run registry:build
   ```

## Registry Configuration Fields

### Component Properties

- **name**: Unique identifier for the component (kebab-case)
- **type**: Component type (`registry:component`, `registry:ui`, `registry:block`, etc.)
- **title**: Human-readable display name
- **description**: Brief description of the component's purpose
- **dependencies**: NPM packages required (with optional versions)
- **registryDependencies**: Other registry components this component depends on
- **files**: Array of file objects with `path` and `type`
- **categories**: Array of category tags for organization
- **css**: Custom CSS/Tailwind directives (optional)
- **tailwind**: Tailwind configuration extensions (optional)

## Usage in Projects

Once your registry is deployed, users can:

### List all components
```bash
npx shadcn list https://hex-ui.com/r
```

### View a component
```bash
npx shadcn view https://hex-ui.com/r/animated-text
```

### Add a component
```bash
npx shadcn add https://hex-ui.com/r/animated-text
```

### Search components
```bash
npx shadcn search animation https://hex-ui.com/r
```

## Deployment

When deploying your project, ensure the `public/r/` directory is included and accessible at the root URL path `/r/`.

For example, if deployed at `https://hex-ui.com`, the registry should be accessible at:
- `https://hex-ui.com/r/registry.json`
- `https://hex-ui.com/r/animated-text.json`
- etc.

## Best Practices

1. **Use semantic versioning** for dependencies
2. **Test components** before adding to registry
3. **Provide clear descriptions** for better discoverability
4. **Use categories** to organize components
5. **Include all dependencies** explicitly
6. **Keep components self-contained** when possible
7. **Use `@/lib/utils`** for the `cn()` utility function

## Learn More

- [shadcn/ui Registry Documentation](https://ui.shadcn.com/docs/registry)
- [Registry Schema](https://ui.shadcn.com/schema/registry.json)
- [Registry Item Schema](https://ui.shadcn.com/schema/registry-item.json)
