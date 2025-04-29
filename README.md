# Personal Portfolio Website

A modern, internationalized portfolio website built with Next.js, TypeScript, and TailwindCSS. This project showcases my projects, skills, and professional experience with a focus on performance and SEO.

![Portfolio Preview](/public/images/portfolio.png)

## Features

- 🌐 Internationalization with next-intl
- 🎨 Dark and light mode with tailwind-themes
- 📱 Fully responsive design
- 🚀 SEO optimized
- 📊 Project showcase with customizable image alignment
- 🎉 Smooth animations and transitions
- 📝 Markdown support for content

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Markdown**: React Markdown
- **Internationalization**: next-intl
- **Deployment**: Vercel

## Project Structure

```
portfolio2025/
├── public/          # Static assets
├── messages/        # Translation strings
├── src/
│   ├── app/         # Next.js app router
│   ├── components/  # UI components
│   ├── data/        # Resume and project data
│   ├── i18n/        # Internationalization config
│   └── lib/         # Utility functions
```

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Adding Projects

Projects can be added in `src/data/resume.tsx`. Each project can have:

- Title and description (with i18n support)
- Image or video showcase
- Custom image alignment (left, center, right)
- Technology tags
- External links

### Localization

Edit translation files in the `messages/` directory to add content in different languages.

## Deployment

The site is optimized for deployment on Vercel. Simply connect your GitHub repository to Vercel for automatic deployments.

## License

[MIT License](LICENSE)
