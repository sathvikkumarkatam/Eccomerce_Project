const products = [
  {
    id: "desk",
    title: "FlexLift Desk Riser",
    category: "workspace",
    price: 129,
    rating: 4.8,
    trust: 94,
    warranty: "24 mo",
    resale: 52,
    carbon: 81,
    badge: "Resale eligible",
    image: "assets/flexlift-desk.svg",
    copy: "Height-adjustable riser for compact workspaces with verified repair parts."
  },
  {
    id: "pods",
    title: "LoopSound ANC Pods",
    category: "tech",
    price: 89,
    rating: 4.7,
    trust: 91,
    warranty: "18 mo",
    resale: 46,
    carbon: 74,
    badge: "Verified seller",
    image: "assets/loopsound-pods.svg",
    copy: "Noise-cancelling earbuds with replaceable tips and strong resale demand."
  },
  {
    id: "bag",
    title: "TerraPack Day Bag",
    category: "lifestyle",
    price: 74,
    rating: 4.6,
    trust: 88,
    warranty: "12 mo",
    resale: 41,
    carbon: 92,
    badge: "Low carbon",
    image: "assets/terrapack-bag.svg",
    copy: "Water-resistant daily bag made with recycled fabric and repairable zips."
  },
  {
    id: "mist",
    title: "GlowMist Humidifier",
    category: "wellness",
    price: 56,
    rating: 4.5,
    trust: 86,
    warranty: "12 mo",
    resale: 28,
    carbon: 69,
    badge: "Home comfort",
    image: "assets/glowmist-humidifier.svg",
    copy: "Quiet room humidifier with washable filter and clear product passport."
  },
  {
    id: "band",
    title: "MotionFit Smart Band",
    category: "wellness",
    price: 64,
    rating: 4.4,
    trust: 89,
    warranty: "18 mo",
    resale: 35,
    carbon: 71,
    badge: "Trade-in ready",
    image: "assets/motionfit-band.svg",
    copy: "Fitness band with heart tracking, replaceable strap, and wallet estimate."
  },
  {
    id: "coffee",
    title: "ReLeaf Coffee Kit",
    category: "lifestyle",
    price: 48,
    rating: 4.9,
    trust: 96,
    warranty: "6 mo",
    resale: 22,
    carbon: 88,
    badge: "Bundle pick",
    image: "assets/releaf-coffee.svg",
    copy: "Starter pour-over kit with reusable filter and verified small-batch seller."
  }
];

const cart = new Map();
let activeCategory = "all";
let searchTerm = "";
let deliveryCost = 4.99;
let deliveryLabel = "Standard";
let groupMembers = 3;
let groupDiscount = 0.05;

const productGrid = document.querySelector("#productGrid");
const searchInput = document.querySelector("#searchInput");
const cartItems = document.querySelector("#cartItems");
const cartCount = document.querySelector("#cartCount");
const subtotalEl = document.querySelector("#subtotal");
const discountEl = document.querySelector("#discount");
const deliveryEl = document.querySelector("#delivery");
const grandTotalEl = document.querySelector("#grandTotal");
const checkoutMessage = document.querySelector("#checkoutMessage");
const tradeEstimate = document.querySelector("#tradeEstimate");
const conditionRange = document.querySelector("#conditionRange");

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(value);
}

function getFilteredProducts() {
  return products.filter((product) => {
    const categoryMatch = activeCategory === "all" || product.category === activeCategory;
    const text = `${product.title} ${product.category} ${product.badge}`.toLowerCase();
    return categoryMatch && text.includes(searchTerm);
  });
}

function renderProducts() {
  const filteredProducts = getFilteredProducts();
  productGrid.innerHTML = filteredProducts.map((product) => `
    <article class="product-card">
      <img src="${product.image}" alt="${product.title}">
      <div class="product-meta">
        <span class="tag teal">${product.badge}</span>
        <span class="tag">Trust ${product.trust}</span>
      </div>
      <h3>${product.title}</h3>
      <p class="product-copy">${product.copy}</p>
      <div class="price-row">
        <span class="price">${formatCurrency(product.price)}</span>
        <span class="rating">${product.rating} rating</span>
      </div>
      <div class="product-actions">
        <button class="add-button" type="button" data-add="${product.id}">Add</button>
        <button class="passport-button" type="button" data-passport="${product.id}">Passport</button>
      </div>
    </article>
  `).join("");
}

function addToCart(productId, quantity = 1) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  const current = cart.get(productId) || { product, quantity: 0 };
  current.quantity += quantity;
  cart.set(productId, current);
  checkoutMessage.textContent = `${product.title} added to cart.`;
  updateCart();
}

function updateCart() {
  const items = [...cart.values()];
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountAmount = subtotal * groupDiscount;
  const grandTotal = subtotal - discountAmount + (subtotal > 0 ? deliveryCost : 0);

  cartCount.textContent = totalItems;
  subtotalEl.textContent = formatCurrency(subtotal);
  discountEl.textContent = `-${formatCurrency(discountAmount)}`;
  deliveryEl.textContent = subtotal > 0 ? `${formatCurrency(deliveryCost)} ${deliveryLabel}` : "$0.00";
  grandTotalEl.textContent = formatCurrency(grandTotal);

  if (!items.length) {
    cartItems.innerHTML = '<p class="empty-note">Your cart is empty.</p>';
  } else {
    cartItems.innerHTML = items.map(({ product, quantity }) => `
      <div class="cart-item">
        <div>
          <strong>${product.title}</strong>
          <small>${quantity} x ${formatCurrency(product.price)}</small>
        </div>
        <span>${formatCurrency(product.price * quantity)}</span>
      </div>
    `).join("");
  }

  updateTradeEstimate();
}

function showPassport(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  document.querySelector("#passportTitle").textContent = product.title;
  document.querySelector("#passportTrust").textContent = product.trust;
  document.querySelector("#passportWarranty").textContent = product.warranty;
  document.querySelector("#passportResale").textContent = `${product.resale}%`;
  document.querySelector("#passportCarbon").textContent = product.carbon;
  document.querySelector("#passportNote").textContent = `${product.title} is ${product.badge.toLowerCase()} with estimated resale at ${product.resale} percent of purchase price.`;
}

function updateGroupPanel() {
  if (groupMembers >= 8) {
    groupDiscount = 0.15;
  } else if (groupMembers >= 4) {
    groupDiscount = 0.1;
  } else if (groupMembers >= 2) {
    groupDiscount = 0.05;
  } else {
    groupDiscount = 0;
  }

  document.querySelector("#memberCount").textContent = `${groupMembers} joined`;
  document.querySelector("#groupProgress").style.width = `${Math.min((groupMembers / 8) * 100, 100)}%`;
  document.querySelector("#groupMessage").textContent = groupMembers >= 8
    ? "Top tier unlocked: 15 percent group discount is active."
    : `${Math.max(8 - groupMembers, 0)} more members unlock the 15 percent top discount.`;
  updateCart();
}

function updateTradeEstimate() {
  const condition = Number(conditionRange.value) / 100;
  const eligibleValue = [...cart.values()].reduce((sum, item) => {
    return sum + (item.product.price * item.quantity * item.product.resale) / 100;
  }, 0);
  tradeEstimate.textContent = `${formatCurrency(eligibleValue * condition)} wallet credit`;
}

function generateBundle(event) {
  event.preventDefault();
  const goal = document.querySelector("#goalInput").value.trim() || "your goal";
  const budget = Number(document.querySelector("#budgetInput").value || 350);
  const bundle = ["desk", "pods", "coffee"].map((id) => products.find((item) => item.id === id));
  const total = bundle.reduce((sum, item) => sum + item.price, 0);
  const result = document.querySelector("#aiResult");

  result.innerHTML = `
    <strong>Bundle for "${goal}":</strong>
    ${bundle.map((item) => item.title).join(", ")}.
    Total ${formatCurrency(total)} ${total <= budget ? "fits" : "is above"} your ${formatCurrency(budget)} budget.
    This set balances productivity, verified sellers, and resale value.
  `;

  bundle.forEach((product) => addToCart(product.id));
}

document.addEventListener("click", (event) => {
  const addId = event.target.closest("[data-add]")?.dataset.add;
  const passportId = event.target.closest("[data-passport]")?.dataset.passport;
  const filterButton = event.target.closest("[data-category]");
  const deliveryButton = event.target.closest("[data-cost]");

  if (addId) {
    addToCart(addId);
  }

  if (passportId) {
    showPassport(passportId);
  }

  if (filterButton) {
    activeCategory = filterButton.dataset.category;
    document.querySelectorAll(".filter").forEach((button) => button.classList.toggle("active", button === filterButton));
    renderProducts();
  }

  if (deliveryButton) {
    deliveryCost = Number(deliveryButton.dataset.cost);
    deliveryLabel = deliveryButton.dataset.label;
    document.querySelectorAll(".delivery").forEach((button) => button.classList.toggle("active", button === deliveryButton));
    updateCart();
  }
});

searchInput.addEventListener("input", (event) => {
  searchTerm = event.target.value.trim().toLowerCase();
  renderProducts();
});

document.querySelector("#aiForm").addEventListener("submit", generateBundle);

document.querySelector("#inviteButton").addEventListener("click", () => {
  groupMembers = Math.min(groupMembers + 1, 8);
  updateGroupPanel();
});

document.querySelector("#clearCart").addEventListener("click", () => {
  cart.clear();
  checkoutMessage.textContent = "Cart cleared.";
  updateCart();
});

document.querySelector("#cartJump").addEventListener("click", () => {
  document.querySelector("#cartPanel").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector("#checkoutButton").addEventListener("click", () => {
  checkoutMessage.textContent = cart.size
    ? "Demo order placed. In the full app, this would create payment, order, shipment, and trade-in records."
    : "Add at least one product before placing a demo order.";
});

conditionRange.addEventListener("input", updateTradeEstimate);

renderProducts();
showPassport("desk");
updateGroupPanel();
