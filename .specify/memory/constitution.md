# LoanArk Growth Hub Constitution

## Core Principles

### I. Modern React Architecture (NON-NEGOTIABLE)

All development must adhere to modern React 18+ patterns with TypeScript; Components must be functional with hooks; Strict TypeScript configuration enforced; No class components except for error boundaries; Custom hooks for shared logic; Proper dependency arrays in useEffect.

### II. Lovable.dev Platform Compatibility (CRITICAL)

All code must remain compatible with lovable.dev's deployment and development environment; Use only npm packages supported by lovable.dev; Maintain Vite configuration compatibility; Ensure all builds work in lovable.dev's sandboxed environment; No server-side requirements beyond static hosting.

### III. Component-First Design System

Every UI element starts as a reusable component in `/src/components/ui/`; Components must be self-contained with TypeScript interfaces; Use shadcn/ui as the foundation with LoanArk brand customizations; Implement class-variance-authority (CVA) for component variants; All components must be responsive and accessible.

### IV. Brand Consistency & Professional Standards

Maintain LoanArk brand colors (Navy #01082D, Red #D6131E, Blue variations); Professional real estate/mortgage industry aesthetic required; All content must be business-appropriate; Consistent typography using Montserrat/Poppins; Custom CSS variables for brand consistency.

### V. Performance & User Experience

Core Web Vitals must be optimized; Lazy loading for images and components; Responsive design mobile-first approach; Smooth animations with CSS transforms; Error boundaries for graceful failure; Loading states for all async operations.

### VI. Quality Assurance & Testing

ESLint configuration must be maintained and enforced; TypeScript strict mode required; All forms must use React Hook Form with validation; Error handling implemented for all user interactions; Cross-browser compatibility testing; Performance auditing with Lighthouse.

### VII. Maintainability & Code Standards

File structure follows established patterns (`src/components/`, `src/pages/`, `src/lib/`); Import paths use configured aliases (`@/`); Consistent naming conventions (PascalCase for components, camelCase for functions); Proper code comments for complex business logic; Git commit messages must be descriptive.

## Technology Stack Requirements

### Core Dependencies (LOCKED)

- **React 18+** with TypeScript for UI framework
- **Vite** for build tooling and development server
- **Tailwind CSS** with custom LoanArk theme configuration
- **React Router DOM** for client-side routing
- **shadcn/ui** with Radix UI primitives for component system
- **TanStack Query** for server state management
- **React Hook Form** for form handling

### Approved Libraries

- **Lucide React** for icons
- **Recharts** for data visualization
- **class-variance-authority** for component variants
- **clsx** and **tailwind-merge** for utility functions
- **Vaul** for drawer components
- **input-otp** for OTP inputs

### Development Tools (REQUIRED)

- **ESLint** with TypeScript and React plugins
- **PostCSS** for CSS processing
- **TypeScript 5+** with strict configuration
- Path aliases configured in `vite.config.ts`

## Lovable.dev Deployment Standards

### Build Configuration

- All builds must succeed on lovable.dev's environment
- No server-side dependencies or Node.js runtime requirements
- Static assets must be properly optimized for CDN delivery
- Build size must remain under lovable.dev limits
- All environment variables must be prefixed with `VITE_`

### File Structure Compliance

- Maintain lovable.dev compatible project structure
- All source files in `/src/` directory
- Public assets in `/public/` directory
- Configuration files at project root
- No custom server configuration files

### Deployment Requirements

- Application must work as a Single Page Application (SPA)
- All routing must be client-side with fallback to `index.html`
- No backend API dependencies beyond external services
- All forms must handle submission without server processing
- External integrations via client-side JavaScript only

## Development Workflow

### Code Quality Gates

- All TypeScript errors must be resolved before deployment
- ESLint warnings must be addressed
- No console.log statements in production builds
- All images must have proper alt attributes
- All interactive elements must be keyboard accessible

### Component Development Process

1. Design component in Figma or wireframe
2. Implement using shadcn/ui base with LoanArk customizations
3. Add TypeScript interfaces for all props
4. Implement responsive behavior
5. Test across different screen sizes
6. Document component usage patterns

### Performance Standards

- First Contentful Paint < 2 seconds
- Largest Contentful Paint < 3 seconds
- Cumulative Layout Shift < 0.1
- Bundle size monitoring with build analysis
- Image optimization with proper formats (WebP preferred)

## Governance

This constitution supersedes all other development practices and standards. Any deviation requires explicit documentation and justification. All code reviews must verify compliance with these principles.

Amendments to this constitution require:

1. Technical impact assessment
2. Lovable.dev compatibility verification
3. Performance impact analysis
4. Migration plan for existing code
5. Team consensus and documentation

All development decisions must prioritize lovable.dev compatibility to ensure continuous deployment capability. When in doubt, choose the approach that maintains platform compatibility while following React best practices.

**Version**: 1.0.0 | **Ratified**: September 20, 2025 | **Last Amended**: September 20, 2025
