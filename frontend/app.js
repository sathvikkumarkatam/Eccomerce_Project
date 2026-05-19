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
    demand: "High demand",
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
    demand: "Bundle pick",
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
    demand: "Eco favorite",
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
    demand: "Comfort pick",
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
    demand: "Fast mover",
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
    demand: "Gift ready",
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

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const revealObserver = "IntersectionObserver" in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 })
  : null;

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(value);
}

function observeRevealTargets(scope = document) {
  const targets = scope.querySelectorAll(".reveal");
  targets.forEach((target) => {
    if (revealObserver) {
      revealObserver.observe(target);
    } else {
      target.classList.add("in-view");
    }
  });
}

function pulse(element, className = "is-fresh") {
  if (!element || reduceMotion) return;
  element.classList.remove(className);
  void element.offsetWidth;
  element.classList.add(className);
}

function getFilteredProducts() {
  return products.filter((product) => {
    const categoryMatch = activeCategory === "all" || product.category === activeCategory;
    const text = `${product.title} ${product.category} ${product.badge} ${product.demand}`.toLowerCase();
    return categoryMatch && text.includes(searchTerm);
  });
}

function renderProducts() {
  const filteredProducts = getFilteredProducts();

  if (!filteredProducts.length) {
    productGrid.innerHTML = `
      <article class="product-card reveal in-view">
        <div class="product-media">
          <img src="assets/terrapack-bag.svg" alt="No matching products">
        </div>
        <div class="product-badge-row">
          <span class="tag coral">No results</span>
        </div>
        <h3>No matching products</h3>
        <p class="product-copy">Try another category or search term. The marketplace will update instantly.</p>
      </article>
    `;
    return;
  }

  productGrid.innerHTML = filteredProducts.map((product, index) => `
    <article class="product-card reveal" data-product-card="${product.id}" style="transition-delay: ${index * 55}ms">
      <div class="product-media">
        <img src="${product.image}" alt="${product.title}">
      </div>
      <div class="product-badge-row">
        <span class="tag teal">${product.badge}</span>
        <span class="tag coral">${product.demand}</span>
      </div>
      <h3>${product.title}</h3>
      <p class="product-copy">${product.copy}</p>
      <div class="product-score">
        <div><span>Trust</span><strong>${product.trust}</strong></div>
        <div><span>Resale</span><strong>${product.resale}%</strong></div>
        <div><span>Carbon</span><strong>${product.carbon}</strong></div>
      </div>
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

  requestAnimationFrame(() => observeRevealTargets(productGrid));
}

function addToCart(productId, quantity = 1, options = {}) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  const current = cart.get(productId) || { product, quantity: 0 };
  current.quantity += quantity;
  cart.set(productId, current);

  const card = document.querySelector(`[data-product-card="${productId}"]`);
  if (card && !reduceMotion) {
    card.classList.remove("is-added");
    void card.offsetWidth;
    card.classList.add("is-added");
  }

  if (!options.silent) {
    checkoutMessage.textContent = `${product.title} added to cart.`;
  }

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
        <div class="cart-thumb"><img src="${product.image}" alt=""></div>
        <div>
          <strong>${product.title}</strong>
          <small>${quantity} x ${formatCurrency(product.price)}</small>
        </div>
        <span>${formatCurrency(product.price * quantity)}</span>
      </div>
    `).join("");
  }

  pulse(cartCount.parentElement, "is-fresh");
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
  document.querySelector("#passportNote").textContent = `${product.title} has ${product.trust} seller trust, ${product.warranty} warranty, and ${product.resale} percent estimated resale value.`;
  pulse(document.querySelector(".passport-panel"));
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

  const nextTarget = groupMembers >= 8 ? 8 : groupMembers >= 4 ? 8 : 4;
  const remaining = Math.max(nextTarget - groupMembers, 0);

  document.querySelector("#memberCount").textContent = `${groupMembers} joined`;
  document.querySelector("#groupProgress").style.width = `${Math.min((groupMembers / 8) * 100, 100)}%`;
  document.querySelector("#groupMessage").textContent = groupMembers >= 8
    ? "Top tier unlocked: 15 percent group discount is active."
    : `${remaining} more ${remaining === 1 ? "member" : "members"} unlock the next discount tier.`;

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
  const resaleValue = bundle.reduce((sum, item) => sum + (item.price * item.resale) / 100, 0);

  result.innerHTML = `
    <strong>Bundle for "${goal}":</strong>
    ${bundle.map((item) => item.title).join(", ")}.
    Total ${formatCurrency(total)} ${total <= budget ? "fits" : "is above"} your ${formatCurrency(budget)} budget.
    Estimated future wallet value is ${formatCurrency(resaleValue)}.
  `;

  bundle.forEach((product) => addToCart(product.id, 1, { silent: true }));
  checkoutMessage.textContent = "AI bundle added to cart.";
  pulse(result);
  updateCart();
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
    document.querySelectorAll(".filter").forEach((button) => {
      button.classList.toggle("active", button === filterButton);
    });
    renderProducts();
  }

  if (deliveryButton) {
    deliveryCost = Number(deliveryButton.dataset.cost);
    deliveryLabel = deliveryButton.dataset.label;
    document.querySelectorAll(".delivery").forEach((button) => {
      button.classList.toggle("active", button === deliveryButton);
    });
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
  pulse(document.querySelector(".social-panel"));
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
    ? "Demo order placed. Order, shipment, wallet, and passport records are ready for backend integration."
    : "Add at least one product before placing a demo order.";
});

conditionRange.addEventListener("input", updateTradeEstimate);

renderProducts();
showPassport("desk");
updateGroupPanel();
observeRevealTargets();
