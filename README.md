# Bob Meijer Links

A simple links page built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Modern, clean UI
- Responsive design
- Dark mode support
- Customizable links and social media icons
- SEO optimized

## Technologies Used

- Next.js
- TypeScript
- Tailwind CSS
- React Icons

## Getting Started

### Prerequisites

- Node.js (16.x or later)
- npm or yarn

### Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/bob-meijer-links.git
cd bob-meijer-links
```

Install dependencies:

```bash
npm install
# or
yarn install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Profile

Edit the `app/page.tsx` file to update your profile information:

```tsx
<Profile
  name="Your Name"
  bio="Your Bio"
  image="/your-image.jpg"
  socials={{
    linkedin: "https://linkedin.com/in/yourusername",
    email: "your.email@example.com"
  }}
/>
```

### Links

Edit the `app/components/LinkContainer.tsx` file to update your links:

```tsx
const links: LinkItem[] = [
  {
    title: "Your Link Title",
    url: "https://example.com",
    icon: <YourIcon />,
  },
  // Add more links here
];
```

## License

MIT 