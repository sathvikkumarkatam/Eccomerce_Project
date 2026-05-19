# Figma-Style UI Specification

## 1. Design Direction

LoopCart should feel modern, useful, and trustworthy. The updated UI uses a premium ecommerce command-center style: glass panels, rich shadows, animated product cards, a dark hero product stage, a sticky checkout rail, and clear role-based dashboard surfaces.

Design keywords:

- Smart
- Trusted
- Circular
- Fast to scan
- Community driven
- Premium but practical
- Animated but not distracting
- Conversion focused

## 2. Mockup Picture Files

The Figma-style frontend pictures are stored here:

- `figma-mockups/01-customer-home.svg` - customer marketplace home with hero, smart picks, AI cart, and command rail.
- `figma-mockups/02-product-detail-ai.svg` - product detail concept with Product Passport and AI explanation panel.
- `figma-mockups/03-cart-checkout.svg` - cart and checkout command rail with delivery, discount, wallet, and total.
- `figma-mockups/04-seller-admin-dashboard.svg` - seller/admin Growth Studio dashboard with metrics and AI insights.
- `figma-mockups/05-login-page.svg` - login page concept with role selector for customer, seller, and admin.
- `figma-mockups/06-registration-page.svg` - registration page concept with customer/seller sign-up and OAuth sign-up.

These are SVG picture files, so they can be opened in a browser, imported into Figma, or used as a visual reference while building the frontend.

Important file mapping:

- `01-customer-home.svg` is the customer home/dashboard-style shopping page.
- `04-seller-admin-dashboard.svg` is the actual seller/admin dashboard page.
- The current working frontend prototype mainly implements the customer home/dashboard experience from `01-customer-home.svg`, plus the cart rail and Growth Studio section.

## 3. Color Palette

| Token | Hex | Usage |
| --- | --- | --- |
| Ink | `#101522` | Main text, dark buttons, hero surfaces |
| Navy | `#172033` | Dark hero stage and dashboard panels |
| Slate | `#4A5568` | Secondary text |
| Muted | `#7A8495` | Captions and metadata |
| Cloud | `#F5F7FB` | Input and light card backgrounds |
| Surface | `#FFFFFF` | Cards and panels |
| Teal | `#0FA6A6` | Primary trust and AI highlights |
| Coral | `#FF6B5F` | Offers, urgency, trade-in highlights |
| Amber | `#F4B83F` | Ratings, wallet, savings |
| Blue | `#436FE8` | Analytics, charts, primary gradient |
| Plum | `#7D5FFF` | Secondary chart accent |
| Mint | `#DFF8EE` | Positive badges |
| Rose | `#FFF0EE` | Offer and warning badges |
| Line | `#E4E9F2` | Borders and dividers |

## 4. Typography

Suggested font:

- Primary: Inter
- Fallback: Arial, sans-serif

Type scale:

| Style | Size | Weight | Usage |
| --- | --- | --- | --- |
| Display | 56px | 900 | Desktop hero headline |
| H1 | 44px | 900 | Large page title and mockup title |
| H2 | 26px | 900 | Section title |
| H3 | 18px | 850 | Card title |
| Body | 15px to 17px | 500 | Main content |
| Small | 12px to 13px | 800 | Metadata, badges |
| Micro | 10px to 12px | 900 | Eyebrows and labels |

## 5. Layout System

- Desktop max content width: 1220px
- Mobile width target: 360px to 430px
- Grid: 12 columns on desktop
- Product card radius: 8px
- Button radius: 8px
- Input radius: 8px
- Card shadow: layered shadows for premium depth
- Main layout: hero area, commerce grid, sticky command rail, experience cards, Growth Studio dashboard
- Spacing scale: 4, 8, 12, 16, 24, 32, 48

## 6. Shared Components

### 6.1 Header

Elements:

- Logo
- Search bar
- Shop link
- Studio link
- Cart count
- Sign up or profile action on auth pages

Behavior:

- Header stays sticky with glass effect.
- Search highlights on focus.
- Cart count animates when products are added.
- Mobile layout stacks header controls.

### 6.2 Product Card

Elements:

- Product image
- Demand badge
- Product badge
- Product title
- Rating
- Price
- Seller TrustScore
- Resale eligibility badge
- Carbon score
- Add to cart button
- Product Passport button

Behavior:

- Product card lifts on hover.
- Product image zooms slightly on hover.
- Add to cart updates cart count and animates the card.
- Product click opens product detail.
- Passport button refreshes the Product Passport panel.

### 6.3 Product Passport Card

Elements:

- Authenticity status
- Warranty
- Seller TrustScore
- Carbon score
- Repairability
- Resale estimate

Behavior:

- Updates instantly when a product passport is selected.
- Uses positive badges for verified items.
- Highlights trust, resale, warranty, and carbon values.

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
- Result panel flashes after generation.
- Bundle is added to cart with live total updates.

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

### 7.1 Login Page

Goal:

Provide a polished, trustworthy entry point for all roles.

Sections:

- Sticky header with LoopCart brand.
- Left glass login card with email, password, OAuth buttons, role selector, login action, forgot password, and sign-up link.
- Right dark trust preview panel showing role-aware dashboard benefits.
- Security state area for validation, password visibility, OAuth login, remember me, and role-based redirect.

Primary actions:

- Login
- Continue with Google
- Continue with Microsoft
- Continue with GitHub
- Create account
- Forgot password
- Select customer, seller, or admin role

Behavior:

- Customer login redirects to customer home.
- Seller login redirects to Growth Studio.
- Admin login redirects to admin moderation dashboard.
- Invalid fields show inline error text below the input.
- Password field should include a visibility toggle.
- OAuth login opens the provider flow, then redirects by role after the backend validates or creates the user profile.

### 7.2 Registration Page

Goal:

Make account creation feel secure, fast, and role-aware.

Sections:

- Sticky header with brand and login action.
- Left glass registration card.
- Full name, phone number, email, password, and confirm password fields.
- Customer/seller role selector.
- OAuth sign-up buttons for Google, Microsoft, and GitHub.
- Terms and privacy confirmation.
- Right dark trust preview panel.
- Seller verification preview for sellers.

Primary actions:

- Create account
- Sign up with Google
- Sign up with Microsoft
- Sign up with GitHub
- Switch to login
- Select customer or seller account type

Behavior:

- Customer registration creates an active customer profile and redirects to customer home after email verification.
- Seller registration creates a pending seller profile and routes to seller onboarding.
- OAuth registration creates or links an account using provider subject id and verified email.
- Password rules should validate length, uppercase/lowercase, number, and special character.
- Duplicate email should show a clear inline error.
- Seller sign-up should continue to business details, documents, and admin approval.

### 7.3 Customer Home

Goal:

Help the customer discover products quickly and understand what makes LoopCart different.

Sections:

- Glass sticky header with search and cart
- Large hero command section
- Dark product showcase stage
- Hero metric cards
- AI Concierge purchase plan card
- Category chips
- Animated product grid
- Sticky command rail with checkout, passport, social cart, and trade-in wallet
- Experience cards
- Growth Studio preview

Primary actions:

- Ask AI
- Add to cart
- Join social cart
- View product passport

### 7.4 Product Detail With AI

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

### 7.5 Cart And Checkout

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

### 7.6 Seller And Admin Dashboard

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

## 8. Animation And Interaction Specification

The advanced frontend uses these interaction patterns:

- Reveal-on-scroll for major page sections.
- Floating hero product card and small AI/passport cards.
- Pulsing live status dot in the hero stage.
- Product card lift and product image zoom on hover.
- Add-to-cart pop animation.
- Cart count flash after update.
- AI result flash after generating a bundle.
- Social cart progress bar transitions when members join.
- Animated Growth Studio bar chart.

Animations should be short, purposeful, and disabled or reduced for users with reduced-motion settings.

## 9. Prototype Interactions

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
- Reveal-on-scroll sections.
- Animated hover states and chart bars.

## 10. Mobile Notes

On mobile:

- Header becomes stacked and horizontally scrollable where needed.
- Hero becomes one column.
- Product grid becomes one column.
- AI Concierge appears before product grid.
- Command rail becomes normal stacked content.
- Dashboard metrics become one or two columns depending on width.
- Long filters should become horizontal chips.
