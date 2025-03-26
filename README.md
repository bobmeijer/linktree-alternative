# Linktree Clone

A simple Linktree clone built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design (mobile-first)
- Clean and minimal UI
- Smooth animations and interactions
- Social links
- Custom link cards
- Profile section

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/linktree-clone.git
cd linktree-clone
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

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