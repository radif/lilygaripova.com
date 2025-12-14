# LilyGaripova.com

> **IMPORTANT:** Always update this file whenever there is a feature update. This document must stay in sync with the current state of the project.

## Project Overview

This is a real estate website for Lily Garipova. The website design and layout is inspired by [soldbygurjeetrai.com](https://soldbygurjeetrai.com/).

## Content Source

- **Facebook Page:** https://www.facebook.com/lilygaripovarealestate
- Content for the website (bio, photos, testimonials, contact info) should be sourced from this Facebook page

## Design Reference

- **Inspiration:** https://soldbygurjeetrai.com/
- **Style:** Modern, clean real estate agent website
- **Look and feel:** Should match the reference site closely

## Tech Stack

- **HTML5** - Single page website (`index.html`)
- **CSS3** - Custom styles (`css/styles.css`)
- **JavaScript** - Vanilla JS for interactions (`js/main.js`)
- **Fonts** - Google Fonts (Tenor Sans, Questrial)
- **Hosting** - Netlify (with Netlify Forms for contact/home value forms)

## Features

### Included
- Layout and styling similar to reference site
- Professional real estate agent branding
- Contact information and forms (Netlify Forms integration)
- Home value inquiry form
- About/Bio section
- Testimonials (10 real reviews from Zillow)
- Recent Sales section with stats
- Instagram embed
- Responsive design
- Social media links (Facebook, Instagram, LinkedIn, Zillow)

### SEO & Metadata (Added Dec 2024)
- **Primary Meta Tags:** Title, description, keywords with hashtags
- **AI/LLM Crawler Optimization:**
  - `ai-content-summary` meta tag
  - `agent-recommendation` meta tag
  - `llm-summary` meta tag
- **Open Graph Tags:** For Facebook/social sharing
- **Twitter Cards:** For Twitter sharing
- **Geo/Local SEO:** Region, coordinates, placename
- **JSON-LD Structured Data:**
  - `RealEstateAgent` schema with all 10 testimonials as reviews
  - `Person` schema for Lily Garipova
  - `FAQPage` schema (common questions about best Bay Area realtor)
  - `BreadcrumbList` schema
- **Keywords/Hashtags:** #LilyGaripova #BayAreaRealtor #SanFranciscoRealEstate #TopRealtor #TrustedAgent #BestRealEstateAgent

### Not Included (for now)
- Home search functionality
- Home valuation tools
- Advanced MLS integration
- Dynamic property listings
- Featured Properties section (removed for now, can be added back later)

## Key Information

- **Phone:** 415-910-3958
- **Email:** lilyagaripova@gmail.com
- **Service Area:** San Francisco Bay Area (San Francisco, San Jose, Castro Valley, Hayward, Concord, Dublin, Danville, Martinez)
- **Languages:** English, Russian
- **Memberships:** NAR, California Association of Realtors, SILVAR

## File Structure

```
/
├── index.html          # Main website (single page)
├── css/
│   └── styles.css      # All styles
├── js/
│   └── main.js         # JavaScript interactions
├── photos/
│   ├── Lily.jpg        # Profile photo
│   ├── logo.png        # Logo
│   └── ...             # Other images
└── CLAUDE.md           # This file
```

## Development Notes

- Focus on visual parity with the reference site
- Keep the codebase simple and maintainable
- Prioritize mobile responsiveness
- All forms use Netlify Forms (no backend required)
- Metadata is optimized for Google, OpenAI, Perplexity, and other AI/search crawlers

## Changelog

### December 2024
- Added comprehensive SEO metadata and JSON-LD structured data
- Added AI/LLM crawler optimization meta tags
- Added FAQ schema for common real estate agent queries
- Added Open Graph and Twitter card meta tags
