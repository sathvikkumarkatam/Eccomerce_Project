# Figma-Style UI Specification

## 1. Design Direction

LoopCart should feel modern, useful, and trustworthy. The UI should be clean like a serious marketplace, but still have enough energy to feel different from a standard ecommerce template.

Design keywords:

- Smart
- Trusted
- Circular
- Fast to scan
- Community driven
- Premium but practical

## 2. Mockup Picture Files

The Figma-style frontend pictures are stored here:

- `figma-mockups/01-customer-home.svg`
- `figma-mockups/02-product-detail-ai.svg`
- `figma-mockups/03-cart-checkout.svg`
- `figma-mockups/04-seller-admin-dashboard.svg`

These are SVG picture files, so they can be opened in a browser, imported into Figma, or used as a visual reference while building the frontend.

## 3. Color Palette

| Token | Hex | Usage |
| --- | --- | --- |
| Ink | `#121826` | Main text, nav, strong headings |
| Slate | `#4B5565` | Secondary text |
| Cloud | `#F6F8FB` | Page background |
| Surface | `#FFFFFF` | Cards and panels |
| Teal | `#10A7A7` | Primary actions, trust, AI highlights |
| Coral | `#FF6B5F` | Offers, urgency, trade-in highlights |
| Amber | `#F6B84B` | Ratings, wallet, savings |
| Blue | `#4B7BEC` | Analytics and delivery |
| Mint | `#DFF7EF` | Positive badges |
| Line | `#E5E9F0` | Borders and dividers |

## 4. Typography

Suggested font:

- Primary: Inter
- Fallback: Arial, sans-serif

Type scale:

| Style | Size | Weight | Usage |
| --- | --- | --- | --- |
| Display | 42px | 750 | Main hero headline |
| H1 | 32px | 750 | Page title |
| H2 | 24px | 700 | Section title |
| H3 | 18px | 700 | Card title |
| Body | 15px | 400 | Main content |
| Small | 13px | 500 | Metadata, badges |
| Micro | 11px | 700 | Labels and tags |

## 5. Layout System

- Desktop max content width: 1180px
- Mobile width target: 360px to 430px
- Grid: 12 columns on desktop
- Product card radius: 8px
- Button radius: 8px
- Input radius: 8px
- Card shadow: very subtle, mostly border-based
- Spacing scale: 4, 8, 12, 16, 24, 32, 48

## 6. Shared Components

### 6.1 Header

Elements:

- Logo
- Search bar
- AI Concierge button
- Categories
- Cart count
- Profile menu

Behavior:

- Search bar opens suggestions.
- AI Concierge opens side panel.
- Cart icon opens cart drawer.

### 6.2 Product Card

Elements:

- Product image
- Category tag
- Product title
- Rating
- Price
- Seller TrustScore
- Resale eligibility badge
- Add to cart button
- Wishlist action

Behavior:

- Add to cart updates cart count.
- Product click opens product detail.
- Trust badge opens mini tooltip.

### 6.3 Product Passport Card

Elements:

- Authenticity status
- Warranty
- Seller TrustScore
- Carbon score
- Repairability
- Resale estimate

Behavior:

- Expands to show more details.
- Highlights risks if return risk is high.

### 6.4 AI Concierge Panel

Elements:

- Goal input
- Budget input
- Preference chips
- Suggested bundle
- Explanation text
- Apply to cart button

Behavior:

- User enters goal.
- System creates suggested cart.
- User can add all suggested items.

### 6.5 Social Cart Panel

Elements:

- Current group members
- Discount progress bar
- Expiry timer
- Invite button
- Discount tiers

Behavior:

- Progress updates as members join.
- Discount increases after target tiers.

## 7. Screen Specifications

### 7.1 Customer Home

Goal:

Help the customer discover products quickly and understand what makes LoopCart different.

Sections:

- Header with search and cart
- AI Concierge hero
- Category chips
- Smart bundle strip
- Product grid
- Social cart deal block
- Trade-in wallet teaser

Primary actions:

- Ask AI
- Add to cart
- Join social cart
- View product passport

### 7.2 Product Detail With AI

Goal:

Give enough trust and intelligence for the customer to buy confidently.

Sections:

- Product image gallery
- Product title, rating, price, offer
- Variants
- Delivery options
- Add to cart and buy now
- Product Passport
- AI explanation
- Reviews
- Recommended alternatives

Primary actions:

- Add to cart
- Buy now
- Compare alternatives
- Start trade-in estimate

### 7.3 Cart And Checkout

Goal:

Keep checkout clear while showing savings from wallet, group-buy, and Delay-To-Save delivery.

Sections:

- Cart items
- Quantity controls
- Coupon field
- Wallet credit
- Delivery option cards
- Social cart progress
- Payment method
- Order summary

Primary actions:

- Apply coupon
- Select delivery
- Place order

### 7.4 Seller And Admin Dashboard

Goal:

Help sellers and admins understand business health and take action quickly.

Seller sections:

- Revenue
- Orders
- Inventory alerts
- Return rate
- TrustScore
- Growth Studio suggestions

Admin sections:

- Platform GMV
- Active users
- Pending seller approvals
- Disputes
- Suspicious review alerts
- Top categories

Primary actions:

- Add product
- Approve seller
- Resolve dispute
- Review flagged product

## 8. Prototype Interactions

The included frontend prototype supports:

- Product filtering by category.
- Search input.
- Add to cart.
- Cart total calculation.
- AI suggested bundle.
- Group-buy discount progress.
- Trade-in value estimate.
- Delivery option selection.
- Seller/admin metrics display.

## 9. Mobile Notes

On mobile:

- Header becomes compact.
- Product grid becomes one column.
- AI Concierge should appear before product grid.
- Cart summary should be sticky at bottom.
- Dashboard metrics become two-column cards.
- Long filters should become horizontal chips.

