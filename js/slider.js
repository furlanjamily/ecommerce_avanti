const wrapper = document.getElementById("swiper-wrapper");
const totalProducts = 15;

function getProductsPerSlide() {
  const width = window.innerWidth;
  if (width >= 1280) return 5;   // Para telas grandes (Desktop)
  if (width >= 1024) return 4;   // Para telas médias
  if (width >= 768) return 3;    // Para tablets
  if (width >= 640) return 2;    // Para smartphones grandes
  return 1;                      // Para smartphones pequenos
}

function createProductHTML() {
  return `
    <div class="product-item">
      <div class="new-product"><p>NOVO</p></div>
      <div class="product-img">
        <img src="./../assets/imgCarrosel.png" alt="Imagem Demonstrativa" />
      </div>
      <div class="product-info">
        <div class="price-discount-line">
          <div class="prices">
            <p class="old-price">R$ 100,00</p>
            <p class="new-price">R$79,90</p>
          </div>
          <div class="discount"><p>10% off</p></div>
        </div>
        <div class="installments">
          <p>Ou em até 10x de R$ 7,90</p>
        </div>
      </div>
      <div class="div-button-buy">
        <button class="button-buy">Comprar</button>
      </div>
    </div>
  `;
}

function renderSlides() {
  wrapper.innerHTML = "";
  const productsPerSlide = getProductsPerSlide();
  const totalSlides = Math.ceil(totalProducts / productsPerSlide);  // Garante que sempre teremos a quantidade correta de slides

  let currentProductIndex = 0;
  for (let i = 0; i < totalSlides; i++) {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");

    for (let j = 0; j < productsPerSlide && currentProductIndex < totalProducts; j++) {
      slide.innerHTML += createProductHTML();
      currentProductIndex++;
    }

    wrapper.appendChild(slide);
  }
}

renderSlides();

const swiper = new Swiper(".swiper", {
  slidesPerView: 1, // sempre 1 slide por vez, o conteúdo dentro muda
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

window.addEventListener("resize", () => {
  renderSlides();
  swiper.update();
});
