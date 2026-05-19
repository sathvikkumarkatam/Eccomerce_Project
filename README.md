# LoopCart

LoopCart is an AI-powered circular ecommerce marketplace. It helps customers discover products, build smarter carts, join group-buy deals, verify product authenticity, and trade items back into a resale wallet after purchase.

The idea is designed to stand out from a normal ecommerce project by combining personalization, sustainability, trust, resale, and community shopping in one experience.

## Project Files

- `docs/project-documentation.md` - full project documentation with concept, objectives, scope, users, modules, and market differentiators.
- `docs/working-and-functionalities.md` - detailed working flow and feature-by-feature functionality.
- `docs/database-api-spec.md` - database schema, ERD, API routes, and security notes.
- `docs/figma-ui-specification.md` - Figma-style design guide, screen specifications, colors, layout, and component notes.
- `figma-mockups/` - frontend screen mockups as SVG picture files.
- `frontend/index.html` - working frontend prototype.
- `frontend/styles.css` - prototype styling.
- `frontend/app.js` - prototype interactions and sample product data.

## How To Run The Frontend Prototype

Open this file in a browser:

```text
frontend/index.html
```

No backend or installation is required for the prototype. It includes sample products, add-to-cart behavior, AI cart suggestions, group-buy progress, trade-in estimation, checkout summary updates, and seller/admin-style dashboard cards.

## Project Pitch

Most ecommerce websites only focus on browsing and checkout. LoopCart adds features that create repeat visits:

- AI Cart Concierge that recommends a complete purchase plan from a customer goal, budget, and preferences.
- Product Passport for authenticity, warranty, carbon score, seller trust, and resale eligibility.
- Trade-In Wallet that estimates future resale value and gives customers wallet credit.
- Social Cart for group-buy discounts with friends or local communities.
- Delay-To-Save delivery where users choose slower delivery for lower shipping cost and lower carbon impact.
- Seller Growth Studio for small sellers to see inventory, trust score, returns, and AI recommendations.

## Suggested Tech Stack

- Frontend: React, Vite, Tailwind CSS or CSS modules
- Backend: Node.js, Express.js
- Database: PostgreSQL
- Authentication: JWT with refresh tokens
- Payments: Stripe, Razorpay, or PayPal depending on region
- Storage: AWS S3, Cloudinary, or Firebase Storage
- AI Layer: recommendation service, search ranking, and chat concierge

## Main User Roles

- Customer
- Seller
- Admin
- Delivery partner
- Support agent

## MVP Screens

- Customer home and product discovery
- Product detail with AI insights and product passport
- Cart and checkout
- AI concierge panel
- Orders and trade-in wallet
- Seller dashboard
- Admin dashboard

