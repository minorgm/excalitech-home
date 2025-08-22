# Excalitech Home

A modern software development agency website built with [Next.js](https://nextjs.org), featuring a clean UI, reusable components, and a contact form for new project requests.

## Features

- Next.js 15 App Router
- TypeScript & Tailwind CSS
- Custom UI components (Button, Card)
- Responsive design
- Contact page with form for project requests
- Easy navigation with header/footer

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
  page.tsx           # Homepage
  contact/page.tsx   # Contact page
  layout.tsx         # Root layout
components/
  Header.tsx         # Site header
  Footer.tsx         # Site footer
  ContactForm.tsx    # Contact form component
  ...                # Other UI components
public/              # Static assets (SVGs, images)
lib/                 # Utility functions
```

## Contact Page

Clients can request a new project by filling out the form at `/contact`. The form collects:

- Name
- Email
- Company (optional)
- Project details

Submissions display a thank you message. (Backend integration required for production use.)

## Customization

- Update company info, colors, and branding in `Header.tsx`, `Footer.tsx`, and global styles.
- Add new sections or pages as needed using the app directory structure.

## Deployment

Deploy easily on [Vercel](https://vercel.com/) or your preferred platform.

## License

MIT
