# Avatar CleanPro ✨

Professional cleaning services website built with Next.js.

## Logo

Text-based logo with gradient accent - no image file required:

```
✨ Avatar CleanPro
   ─────  ─────────
   Text   Gradient
```

See `/Docs/plans/avatar-cleanpro-project-plan.md` Section 3 for full implementation details.

## Overview

Avatar CleanPro offers **10 service categories** with **35+ services** including:

- 🏠 Mama Fua (Housekeeper)
- 🛋️ Seats & Carpets Cleaning
- 👕 Laundromat Services
- ✨ Deep Cleaning
- 🏢 Office Cleaning
- 👶 Nanny Services
- 🦟 Fumigation
- 🏨 AirBnB Management
- 🔨 Post Construction Cleaning
- 🎓 Cleaning School

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS + shadcn/ui
- **Language:** TypeScript
- **Contact Form:** EmailJS
- **Deployment:** Vercel

## Responsive Design

📱 **Fully responsive** across all screen sizes:

| Breakpoint | Width | Devices |
|------------|-------|---------|
| Mobile | < 640px | Phones |
| Tablet | 768px+ | Tablets |
| Desktop | 1024px+ | Laptops/Desktops |
| Large | 1280px+ | Large screens |

- Mobile-first development approach
- Touch-friendly targets (44x44px minimum)
- Fluid typography with `clamp()`
- Responsive grids and layouts

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with hero, services overview, testimonials |
| Services | `/services` | All service categories and offerings |
| Contact | `/contact` | Contact form with EmailJS integration |

## Documentation

- [`/Docs/Best-practices/`](./Docs/Best-practices/) - Next.js development guidelines
- [`/Docs/plans/`](./Docs/plans/) - Project planning documents

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## License

© 2026 Avatar CleanPro. All rights reserved.
