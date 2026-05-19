# Working And Functionalities

## 1. How LoopCart Works

LoopCart works as a multi-role ecommerce platform. The customer side focuses on product discovery, smart recommendations, trust, cart, checkout, and post-purchase trade-in. The seller side focuses on product management, inventory, orders, returns, and sales improvement. The admin side controls users, sellers, products, categories, disputes, and platform analytics.

## 2. Customer Working Flow

1. Customer signs up or logs in.
2. Customer selects the customer role on the login page.
3. Customer lands on the personalized home page.
4. Customer can search manually or use AI Cart Concierge.
5. Product cards show price, rating, seller trust, carbon score, and resale eligibility.
6. Customer opens a product detail page.
7. Customer checks Product Passport before buying.
8. Customer adds product to cart or wishlist.
9. Customer can create or join a Social Cart for group discount.
10. Customer selects delivery option:
   - Fast delivery
   - Standard delivery
   - Delay-To-Save delivery
11. Customer applies coupon or wallet credit.
12. Customer places order.
13. Customer tracks order status.
14. Customer reviews the product.
15. Product becomes available in Trade-In Wallet after return window closes.
16. Customer can resell, trade in, repair, or donate the product.

## 2.1 Login Page Working Flow

1. User opens the LoopCart login page.
2. User chooses email/password login or OAuth login.
3. For email/password login, user enters email and password.
4. User selects role:
   - Customer
   - Seller
   - Admin
5. System validates required fields.
6. System verifies account credentials.
7. System checks account status.
8. System redirects based on role:
   - Customer goes to customer home.
   - Seller goes to Growth Studio.
   - Admin goes to admin dashboard.
9. If login fails, inline error messages appear below the related field.

OAuth login working flow:

1. User clicks Google, Microsoft, or GitHub.
2. Backend redirects user to the selected OAuth provider.
3. User approves access on the provider screen.
4. Provider redirects back to LoopCart with an authorization code.
5. Backend exchanges code for provider user information.
6. Backend finds an existing user by provider id or verified email.
7. If user exists, backend logs in the user.
8. If user does not exist, backend creates a user profile with default customer role or asks the user to choose customer/seller.
9. Backend creates JWT tokens and redirects to the correct dashboard.

Login page UI requirements:

- Glass login card on the left.
- Dark trust preview panel on the right.
- Role selector using segmented buttons.
- Email and password inputs.
- Password visibility toggle.
- OAuth buttons for Google, Microsoft, and GitHub.
- Remember-me option.
- Forgot password link.
- Create account link.
- Primary login button using teal-to-blue gradient.
- Security preview showing wallet, seller trust, and role-based access benefits.

## 2.2 Registration Page Working Flow

1. User opens the registration page.
2. User enters full name, phone, email, password, and confirm password.
3. User selects account type:
   - Customer
   - Seller
4. User accepts terms and privacy policy.
5. System validates input fields.
6. System checks if email already exists.
7. System creates account.
8. Customer account receives email verification and then redirects to customer home.
9. Seller account redirects to seller onboarding for store details, business documents, and admin approval.

OAuth registration working flow:

1. User clicks Google, Microsoft, or GitHub on the registration page.
2. Provider authenticates user.
3. Backend receives provider profile and verified email.
4. Backend asks for missing required fields if needed, such as phone or account type.
5. Backend creates local LoopCart user.
6. Backend links provider id to local user.
7. Customer continues to customer home.
8. Seller continues to seller onboarding.

Registration page UI requirements:

- Glass registration card.
- Full name, phone number, email, password, and confirm password fields.
- Customer/seller segmented role selector.
- OAuth sign-up buttons.
- Terms and privacy checkbox.
- Password strength feedback.
- Duplicate email inline error state.
- Dark trust preview panel explaining secure identity, wallet, and seller verification.

## 3. Seller Working Flow

1. Seller registers and submits verification documents.
2. Admin approves seller account.
3. Seller adds products with images, price, stock, category, warranty, return policy, and product passport details.
4. Seller views active orders.
5. Seller accepts, packs, and ships orders.
6. Seller manages returns and refunds.
7. Seller checks Growth Studio insights:
   - Products with low conversion
   - High-return products
   - Suggested price changes
   - Inventory restock alerts
   - Image quality recommendations
8. Seller improves listing quality and offers.

## 4. Admin Working Flow

1. Admin logs into admin dashboard.
2. Admin manages users and sellers.
3. Admin approves seller documents.
4. Admin approves or rejects products.
5. Admin monitors orders, returns, refunds, and disputes.
6. Admin reviews platform revenue, conversion, and category growth.
7. Admin flags suspicious sellers or fake reviews.
8. Admin manages banners, categories, coupons, and commissions.

## 5. Customer Functionalities

| Functionality | Description | Priority |
| --- | --- | --- |
| Register/Login | Customer can create account and log in securely. | MVP |
| Profile Management | Customer can update name, email, phone, addresses, and preferences. | MVP |
| Product Search | Search by product name, brand, category, and keyword. | MVP |
| Filters And Sorting | Filter by price, rating, seller trust, delivery, sustainability, and resale eligibility. | MVP |
| Product Detail | View images, price, description, reviews, variants, delivery, warranty, and seller info. | MVP |
| Product Passport | View authenticity, warranty, seller trust, carbon score, repairability, and resale estimate. | Unique |
| Wishlist | Save products for later. | MVP |
| Cart | Add, remove, and update product quantities. | MVP |
| AI Cart Concierge | Get cart suggestions based on goal, budget, and preferences. | Unique |
| Social Cart | Invite others to unlock group-buy discounts. | Unique |
| Checkout | Address, delivery, payment, coupon, wallet credit, and order confirmation. | MVP |
| Order Tracking | Track pending, packed, shipped, out for delivery, delivered, return requested. | MVP |
| Reviews | Rate products and sellers with text and photos. | MVP |
| Trade-In Wallet | View resale value and request trade-in. | Unique |

## 6. Seller Functionalities

| Functionality | Description | Priority |
| --- | --- | --- |
| Seller Registration | Seller submits business details and documents. | MVP |
| Product Management | Add, edit, delete, and pause products. | MVP |
| Inventory Management | Update stock, low-stock alerts, SKU management. | MVP |
| Order Management | View and update order status. | MVP |
| Return Management | Approve or reject return requests. | MVP |
| Sales Analytics | Revenue, conversion, order count, returns, and average rating. | MVP |
| Growth Studio | AI suggestions for pricing, images, stock, and offers. | Unique |
| TrustScore Panel | Shows seller performance based on delivery, reviews, returns, and authenticity. | Unique |

## 7. Admin Functionalities

| Functionality | Description | Priority |
| --- | --- | --- |
| Dashboard | View platform revenue, orders, users, sellers, and disputes. | MVP |
| User Management | View, block, unblock, and update user status. | MVP |
| Seller Approval | Verify seller KYC and business documents. | MVP |
| Product Approval | Approve, reject, or remove product listings. | MVP |
| Category Management | Add, edit, and delete categories. | MVP |
| Coupon Management | Create platform coupons and discount rules. | MVP |
| Review Moderation | Detect fake, abusive, or duplicate reviews. | Phase 2 |
| Dispute Management | Resolve refund, return, seller, and delivery issues. | MVP |
| Analytics | Sales, traffic, conversion, top categories, and retention. | MVP |

## 8. Unique Feature Details

### 8.1 AI Cart Concierge

Input examples:

- "I need a study desk setup under $300."
- "Suggest skincare products for oily skin under $80."
- "Build a gift basket for a coffee lover."

Output:

- Recommended product bundle
- Total price
- Savings
- Delivery estimate
- Compatibility notes
- Cheaper alternative
- Premium alternative

### 8.2 Product Passport

Each product has a passport card with:

- Authenticity status
- Warranty months
- Seller TrustScore
- Repairability score
- Carbon score
- Return risk
- Resale eligibility
- Estimated trade-in value after 6 months

### 8.3 Social Cart

Discount tiers:

| Participants | Discount |
| --- | --- |
| 1 buyer | 0 percent |
| 2 buyers | 5 percent |
| 4 buyers | 10 percent |
| 8 buyers | 15 percent |

The cart has an expiry time. If the group target is reached before expiry, all members receive the discount.

### 8.4 Delay-To-Save Delivery

Customers can choose a slower delivery option to reduce shipping cost. The system combines orders by area and route to reduce cost and carbon impact.

Example:

- Fast delivery: $8.99, arrives tomorrow
- Standard delivery: $4.99, arrives in 3 days
- Delay-To-Save: $1.99, arrives in 5 days, 22 percent lower carbon impact

### 8.5 Trade-In Wallet

After purchase, eligible products are added to the customer's Trade-In Wallet.

Example:

- Original product price: $120
- Estimated trade-in value after 6 months: $42
- Customer can request pickup
- Admin/seller verifies condition
- Wallet credit is added after approval

## 9. Non-Functional Requirements

| Requirement | Target |
| --- | --- |
| Performance | Product listing should load within 2 seconds for common searches. |
| Security | Passwords hashed, JWT sessions, role-based access, HTTPS in production. |
| Scalability | Product search and images should scale independently. |
| Availability | Core browsing and checkout should have high uptime. |
| Usability | Customer should reach checkout in 3 to 5 clicks from product page. |
| Accessibility | Color contrast, keyboard navigation, semantic HTML, readable labels. |
| Maintainability | Separate frontend, backend, services, and database layers. |
| Motion | Animations should be smooth, short, and respect reduced-motion settings. |

## 9.1 Advanced UI Working Notes

The updated frontend is designed as a premium ecommerce workspace:

- Header stays sticky and uses a glass background.
- Hero section shows the brand promise, key metrics, and a dark product showcase.
- AI Concierge generates a smart bundle and updates cart totals.
- Product cards animate on hover and show trust, resale, and carbon metrics.
- Command rail keeps checkout, Product Passport, Social Cart, and Trade-In Wallet visible.
- Social Cart progress bar updates when invited members join.
- Growth Studio uses metric cards, animated bar chart, and AI insight cards.

## 10. Success Metrics

- Search-to-product-click rate
- Add-to-cart rate
- Checkout conversion rate
- Group-buy participation rate
- Repeat purchase rate
- Trade-in wallet activation rate
- Seller TrustScore improvement
- Return rate reduction
- Average order value
