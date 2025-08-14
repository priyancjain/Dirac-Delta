# Dirac Delta - Engineering Consultancy Website

A modern, responsive website for Dirac Delta, a premium engineering consultancy specializing in AI, observability solutions, MCP server development, and workflow automation.

## 🌐 Live Demo

**View the live website:** [https://dirac-delta.vercel.app/](https://dirac-delta.vercel.app/)

## 🚀 Features

- **Modern Design**: Built with Next.js 15 and Tailwind CSS 4
- **Responsive Layout**: Mobile-first design that works on all devices
- **Dark/Light Theme**: Built-in theme switching with next-themes
- **Component Library**: Comprehensive UI components using Radix UI primitives
- **TypeScript**: Full type safety throughout the application
- **Performance**: Optimized with Next.js App Router and modern React patterns

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (React 19)
- **Styling**: Tailwind CSS 4 + CSS Modules
- **UI Components**: Radix UI primitives + custom components
- **Language**: TypeScript
- **Package Manager**: pnpm
- **Deployment**: Vercel

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18.17 or higher)
- **pnpm** (recommended) or npm/yarn

### Installing Node.js

Download and install Node.js from [nodejs.org](https://nodejs.org/)

### Installing pnpm

```bash
npm install -g pnpm
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd dirac-delta-website
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Run the Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📜 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build the application for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🏗️ Project Structure

```
dirac-delta-website/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── expertise/         # Expertise page
│   ├── projects/          # Projects page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # Reusable UI components
│   ├── ui/                # Base UI components (Radix UI)
│   ├── navigation.tsx     # Navigation component
│   ├── footer.tsx         # Footer component
│   └── theme-provider.tsx # Theme context provider
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
├── public/                 # Static assets
└── styles/                 # Additional styles
```

## 🎨 Customization

### Theme Configuration

The website supports both light and dark themes. Theme configuration can be found in `components/theme-provider.tsx`.

### Styling

- **Tailwind CSS**: Utility-first CSS framework
- **CSS Variables**: Custom properties for consistent theming
- **Component Variants**: Using class-variance-authority for component styling

### Adding New Pages

1. Create a new folder in the `app/` directory
2. Add a `page.tsx` file
3. The route will be automatically available

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically deploy your Next.js application

### Deploy to Other Platforms

```bash
# Build the application
pnpm build

# Start the production server
pnpm start
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support or questions about this project, please contact the development team or create an issue in the repository.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Deployed on [Vercel](https://vercel.com/)

---

**Dirac Delta** - Engineers for Hire. High-Quality Consultants for Cutting-Edge Solutions. 