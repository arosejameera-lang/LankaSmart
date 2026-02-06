function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

const products = [
  { brand:"Apple", model:"iPhone 12 Pro Max", os:"iOS", price:195000, img:"../assets/iphone 12 promax.jpg" },
  { brand:"Apple", model:"iPhone 13 Pro Max", os:"iOS", price:215000, img:"../assets/iphone 13 promax.jpg" },
  { brand:"Apple", model:"iPhone 14 Pro Max", os:"iOS", price:245000, img:"../assets/iphone 14 promax.jpg" },
  { brand:"Apple", model:"iPhone 15 Pro Max", os:"iOS", price:285000, img:"../assets/iphone 15 promax.jpg" },
  { brand:"Apple", model:"iPhone 16", os:"iOS", price:325000, img:"../assets/iphone 16.jpg" },

  { brand:"Samsung", model:"Galaxy S22", os:"Android", price:165000, img:"../assets/samsung S22.jpg" },
  { brand:"Samsung", model:"Galaxy S23", os:"Android", price:195000, img:"../assets/samsung S23.jpg" },
  { brand:"Samsung", model:"Galaxy S24", os:"Android", price:235000, img:"../assets/samsung S24.jpg" },
  { brand:"Samsung", model:"Galaxy S25", os:"Android", price:275000, img:"../assets/samsung S25.jpg" },

  { brand:"Huawei", model:"Pura 80 Ultra", os:"Android", price:185000, img:"../assets/huawei pura 80 ultra.jpg" },
  { brand:"Honor", model:"X9C", os:"Android", price:98000, img:"../assets/honor x9c.jpg" },
  { brand:"Nubia", model:"Z80 Ultra", os:"Android", price:158000, img:"../assets/nubia z80 ultra.jpg" },
  { brand:"Realme", model:"P3 Ultra", os:"Android", price:89000, img:"../assets/realme p3 ultra.jpg" }
];

const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");
const brandFilter = document.getElementById("brandFilter");
const osFilter = document.getElementById("osFilter");

function displayProducts(list) {
  productList.innerHTML = "";
  list.map(p => {
    productList.innerHTML += `
      <div class="product-card">
        <img src="${p.img}">
        <h3>${p.model}</h3>
        <p>${p.brand} • ${p.os}</p>
        <div class="price">LKR ${p.price.toLocaleString()}</div>
        <button>Buy Now</button>
      </div>
    `;
  });
}

function filterProducts() {
  const search = searchInput.value.toLowerCase();
  const brand = brandFilter.value;
  const os = osFilter.value;

  const filtered = products.filter(p =>
    (p.brand.includes(brand) || brand === "") &&
    (p.os === os || os === "") &&
    (p.model.toLowerCase().includes(search) ||
     p.brand.toLowerCase().includes(search))
  );

  displayProducts(filtered);
}

searchInput.addEventListener("input", filterProducts);
brandFilter.addEventListener("change", filterProducts);
osFilter.addEventListener("change", filterProducts);

displayProducts(products);
