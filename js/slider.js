const wrapper = document.getElementById('swiper-wrapper');

// Gera conteúdo do produto
function createProductHTML() {
  return `
    <div class="product-item">
      <div class="product-img">
        <img src="./../assets/imgCarrosel.png" alt="Imagem Demonstrativa" />
      </div>
      <div class="product-info">
        <div class="price-discount-line">
          <div class="prices">
            <p class="old-price">R$ 100,00</p>
            <p class="new-price">R$79,90</p>
          </div>
          <div class="discount">
            <p>10% off</p>
          </div>
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

const totalSlides = 3;
const productsPerSlide = 5;

for (let i = 0; i < totalSlides; i++) {
  const slide = document.createElement('div');
  slide.className = 'swiper-slide';

  const group = document.createElement('div');
  group.className = 'product-group';

  for (let j = 0; j < productsPerSlide; j++) {
    group.innerHTML += createProductHTML();
  }

  slide.appendChild(group);
  wrapper.appendChild(slide);
}

// Inicializa Swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 16,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
