# Marvin Escobar - Portfolio

This is my personal portfolio website built with Next.js and Once UI. It showcases my professional experience as a Senior Developer & Project Leader, featuring my projects, technical skills, and career journey.

🌐 **Live Demo:** [Coming Soon]

![Portfolio Preview](public/images/og/home.jpg)

## About Me

I'm Marvin Escobar, a Senior Developer and Project Leader based in San Salvador with over 5 years of experience building scalable web and mobile applications. I specialize in full-stack development, leading cross-functional teams, and delivering end-to-end solutions from system design to production deployment.

### Current Roles
- **Senior Developer & Project Leader** at Grupo Publimovil (2020 - Present)
- **Frontend Developer** at KAZU Real Estate (Oct 2024 - Present, Part-time)

## Tech Stack

This portfolio is built with:
- **Framework:** Next.js 14+
- **UI Library:** Once UI
- **Styling:** SCSS Modules
- **Content:** MDX for blog posts and projects
- **Deployment:** Vercel

## Features

- 📱 Responsive design optimized for all devices
- 📝 MDX-based blog and project pages
- 🎨 Customizable design system with Once UI
- 🔍 SEO optimized with automatic metadata generation
- 🖼️ Photo gallery section
- 📄 Professional CV/About page
- 🌐 Multi-language support (English/Spanish)

## Getting Started

### Prerequisites
- Node.js v18.17 or higher
- npm or yarn

### Installation
**2. Install dependencies**
```bash
npm install
```

**3. Run development server**
```bash
npm run dev
```

**4. Open your browser**
```
Navigate to http://localhost:3000
```

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── about/             # About/CV page
│   ├── blog/              # Blog posts (MDX)
│   ├── gallery/           # Photo gallery
│   └── work/              # Project showcase (MDX)
├── components/            # React components
├── resources/             # Configuration and content
│   ├── content.tsx        # Main content configuration
│   └── once-ui.config.ts  # Design system configuration
└── utils/                 # Utility functions
```

## Customization

### Update Personal Information
### Add Blog Posts or Projects
Create new `.mdx` files in:
- `src/app/blog/posts/` for blog articles
- `src/app/work/projects/` for project showcases

### Customize Theme
Modify `src/resources/once-ui.config.ts` to adjust:
- Color schemes
- Typography
- Spacing
- Border radius
- Animations

## Contact

- **Email:** escobarjose937@gmail.com
- **LinkedIn:** [jose-escobar-837837266](https://www.linkedin.com/in/jose-escobar-837837266)
- **GitHub:** [Thorin217](https://github.com/Thorin217)
- **Threads:** [@marvin_higginss](https://www.threads.com/@marvin_higginss)

## Credits

This portfolio is built with:
- [Once UI](https://once-ui.com) - Design system
- [Next.js](https://nextjs.org) - React framework
- [Magic Portfolio](https://github.com/once-ui-system/magic-portfolio) - Template base
- Set up password protection for URLs

### Localization
- A localized, earlier version of Magic Portfolio is available with the next-intl library
- To use localization, switch to the 'i18n' branch

## Creators

Lorant One: [Threads](https://www.threads.net/@lorant.one) / [LinkedIn](https://www.linkedin.com/in/lorant-one/)

## Get involved
## License

This project is based on Magic Portfolio template, distributed under the CC BY-NC 4.0 License.
- Attribution is required.
- Commercial usage is not allowed.

See `LICENSE.txt` for more information.

---

Made with ❤️ by Marvin Escobar

## Deploy with Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fonce-ui-system%2Fmagic-portfolio&project-name=portfolio&repository-name=portfolio&redirect-url=https%3A%2F%2Fgithub.com%2Fonce-ui-system%2Fmagic-portfolio&demo-title=Magic%20Portfolio&demo-description=Showcase%20your%20designers%20or%20developer%20portfolio&demo-url=https%3A%2F%2Fdemo.magic-portfolio.com&demo-image=%2F%2Fraw.githubusercontent.com%2Fonce-ui-system%2Fmagic-portfolio%2Fmain%2Fpublic%2Fimages%2Fog%2Fhome.jpg)