# PrintTech Solutions - Professional Printer Services Platform

![App Preview](https://imgix.cosmicjs.com/08dcf990-a076-11f0-bba7-d56988718db7-photo-1612815154858-60aa4c59eaa6-1759508987112.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, responsive web application for a professional printer services company, showcasing equipment for sale and rental, technical services, and comprehensive support packages.

## Features

- 🖨️ **Equipment Catalog** - Browse printers with detailed specifications, available for purchase or rental
- 🔧 **Technical Services** - Professional installation, configuration, maintenance, and training services
- 💼 **Support Packages** - Tiered technical assistance plans from Basic to Premium
- 📱 **Responsive Design** - Seamless experience across all devices
- 🌐 **Bilingual Support** - Content displayed in Portuguese (expandable to multiple languages)
- 🎨 **Modern UI** - Clean, professional design with smooth animations
- 📊 **Category Filtering** - Easy navigation by printer type and service category
- 💰 **Transparent Pricing** - Clear pricing for purchases, rentals, and services

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68dff566260d9dd939d1b42c&clone_repository=68dffb0d260d9dd939d1b464)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a company website with shop and rental equipments, services, and technical assistence"

### Code Generation Prompt

> "Based on the content model I created for 'Create a content model for a company website with shop and rental equipments, services, and technical assistence', now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Cosmic
- **Package Manager**: Bun
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Bun installed on your machine
- A Cosmic account with bucket credentials

### Installation

1. Clone this repository
2. Install dependencies:
```bash
bun install
```

3. Create a `.env.local` file in the root directory with your Cosmic credentials:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

4. Run the development server:
```bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Cosmic SDK Examples

### Fetching Printers

```typescript
import { cosmic } from '@/lib/cosmic'

export async function getPrinters() {
  try {
    const response = await cosmic.objects
      .find({
        type: 'impressoras'
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Impressora[]
  } catch (error) {
    if (error.status === 404) {
      return []
    }
    throw error
  }
}
```

### Fetching Services by Category

```typescript
export async function getServicesByCategory(categorySlug: string) {
  try {
    const response = await cosmic.objects
      .find({
        type: 'servicos',
        'metadata.categoria': categorySlug
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Servico[]
  } catch (error) {
    if (error.status === 404) {
      return []
    }
    throw error
  }
}
```

### Fetching Support Packages

```typescript
export async function getSupportPackages() {
  try {
    const response = await cosmic.objects
      .find({
        type: 'assistencia-tecnica'
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as AssistenciaTecnica[]
  } catch (error) {
    if (error.status === 404) {
      return []
    }
    throw error
  }
}
```

## Cosmic CMS Integration

This application integrates with four main Cosmic object types:

### 1. Impressoras (Printers)
- Model, descriptions, and product images
- Category classification
- Printer type (Laser, Thermal, Multifunctional)
- Availability for purchase and/or rental
- Pricing for both options
- Technical specifications and connectivity options
- Stock status

### 2. Serviços (Services)
- Service name and detailed descriptions
- Service images
- Category association
- Service type (Installation, Configuration, Maintenance, Training)
- Starting prices and estimated completion times
- Key benefits lists

### 3. Assistência Técnica (Technical Assistance)
- Package names and descriptions
- Support levels (Basic, Standard, Premium, Enterprise)
- Response times
- Monthly pricing
- Included technical visits
- Service inclusions
- Operating hours

### 4. Categorias (Categories)
- Category names and descriptions
- Category type (Printer, Service, Both)

## Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
4. Deploy

### Netlify

1. Push your code to GitHub
2. Connect your repository in Netlify
3. Set build command: `bun run build`
4. Set publish directory: `.next`
5. Add environment variables in Netlify dashboard
6. Deploy

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Home page with hero and featured content
│   ├── impressoras/        # Printer catalog pages
│   ├── servicos/           # Services pages
│   └── assistencia/        # Support packages pages
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Site footer
│   ├── Hero.tsx            # Hero section
│   ├── PrinterCard.tsx     # Printer display card
│   ├── ServiceCard.tsx     # Service display card
│   └── SupportCard.tsx     # Support package card
├── lib/
│   └── cosmic.ts           # Cosmic SDK configuration
└── types.ts                # TypeScript type definitions
```

## License

MIT

<!-- README_END -->