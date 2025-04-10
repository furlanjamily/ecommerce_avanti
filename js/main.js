async function loadComponent(id, file) {
  const res = await fetch(file);
  const content = await res.text();
  document.getElementById(id).innerHTML = content;
}

window.addEventListener('DOMContentLoaded', () => {
  loadComponent("header", "components/header.html");
  loadComponent("footer", "components/footer.html");
  loadComponent("products", "components/product-card.html");
});
