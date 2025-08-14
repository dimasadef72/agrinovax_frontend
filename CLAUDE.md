# Claude Code Configuration

## Project Information
- **Project Name**: AgriNovaX Frontend
- **Type**: Next.js 15 React Application with TypeScript
- **Purpose**: Agricultural innovation platform frontend with interactive mapping capabilities

## Development Commands
```bash
# Install dependencies
npm install

# Start development server (with Turbopack)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Tech Stack
- **Framework**: Next.js 15.3.3
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4.1.10
- **Maps**: Leaflet 1.9.4 + React Leaflet 5.0.0
- **UI Library**: React 19

## Project Structure

### `/app` - Next.js App Router Pages
- `page.tsx` - Homepage/landing page
- `layout.tsx` - Root layout component
- `globals.css` - Global styles
- `about/page.tsx` - About page
- `contact/page.tsx` - Contact page
- `maps/page.tsx` - Interactive maps page
- `auth/signin/page.tsx` - Sign in page
- `auth/signup/page.tsx` - Sign up page

### `/components` - Reusable React Components

#### Core Sections
- `Hero/` - Landing page hero section with call-to-action
- `About/` - About section content
- `Contact/` - Contact form and information
- `Tech/` - Technology showcase section
- `FAQ/` - Frequently asked questions

#### Navigation
- `Header/` - Main navigation header
  - `HeaderSection.tsx` - Main header component
  - `NavigationMenu.tsx` - Desktop navigation
  - `MobileDropdownMenu.tsx` - Mobile navigation
  - `HamburgerButton.tsx` - Mobile menu toggle

#### Authentication
- `SignIn/` - Sign in form components
- `SignUp/` - Registration form components

#### Maps (Core Feature)
- `Maps/` - Interactive mapping system
  - `MapsSection.tsx` - Main maps container
  - `MapWrapper.tsx` - Map initialization wrapper
  - `MapController.tsx` - Map state management
  - `SearchBar.tsx` - Location search functionality
  - `TileSelector.tsx` - Map layer selection
  - `ClickMarker.tsx` - Interactive map markers
  - `MobileHint.tsx` - Mobile user guidance
  - `overlayOptions.tsx` - Map overlay configurations

#### UI Components
- `ui/` - Shared UI elements
  - `Logo.tsx` - Brand logo component
  - `LogoCard.tsx` - Logo with card styling
  - `SignInButton.tsx` - Sign in CTA button
  - `SignUpButton.tsx` - Sign up CTA button

#### Layout
- `Footer/` - Site footer with links and information

### `/public` - Static Assets
- Agricultural imagery and icons
- Map tiles and overlays
- Social media icons
- Brand assets

## Key Features
1. **Interactive Maps** - Leaflet-based mapping with multiple tile layers
2. **Agricultural Focus** - Specialized for agricultural data visualization
3. **Responsive Design** - Mobile-first approach with Tailwind CSS
4. **Authentication System** - User sign in/sign up functionality
5. **Modern Stack** - Latest Next.js with App Router and React 19

## Git Workflow
```bash
# Add files to staging
git add .

# Commit changes
git commit -m "descriptive commit message"

# Push to GitHub
git push origin main
```