// Sample product data for Sangini Kurtis
const products = [
  {
    category: "Kurtis",
    name: "Floral Printed Kurti",
    price: "₹799",
    image: "images/sample_kurti1.jpeg"
  },
  {
    category: "Plazzo",
    name: "Elegant Plazzo Pants",
    price: "₹599",
    image: "images/sample_plazzo.jpeg"
  },
  {
    category: "Co-ord Sets",
    name: "Stylish Co-ord Set",
    price: "₹1299",
    image: "images/sample_coord.jpeg"
  },
  {
    category: "Leggings",
    name: "Comfort Fit Leggings",
    price: "₹399",
    image: "images/sample_leggings.jpeg"
  }
];

// Populate products
const container = document.getElementById("product-container");

products.forEach(product => {
  const card = document.createElement("div");
  card.className = "product-card";
  
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>Category: ${product.category}</p>
    <p>Price: ${product.price}</p>
    <a
      class="order-button"
      href="https://wa.me/7008697514?text=Hi%20I%20want%20to%20order%20${encodeURIComponent(product.name)}%20from%20Sangini%20Kurtis"
      target="_blank"
    >Order on WhatsApp</a>
  `;
  
  container.appendChild(card);
});
