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

document.addEventListener("DOMContentLoaded", function () {
  const titles = document.querySelectorAll(".footer-link-bold");

  titles.forEach((title) => {
    title.addEventListener("click", function () {
      // Só ativar no mobile
      if (window.innerWidth <= 768) {
        const parentList = this.parentElement.parentElement;

        // Se já estiver ativo, fecha
        if (parentList.classList.contains("active")) {
          parentList.classList.remove("active");
        } else {
          // Fecha todas antes
          document
            .querySelectorAll(
              ".footer-list-items, .footer-list-items-two, .footer-list-items-three"
            )
            .forEach((list) => list.classList.remove("active"));

          parentList.classList.add("active");
        }
      }
    });
  });
});

