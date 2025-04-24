const wrapperTwo = document.getElementById("swiper-wrapper-two");

function createProductHTMLTwo() {
  return `
    <div class="product-item">
      <div class="new-product"> 
        <p>NOVO</p>
      </div>
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

const totalSlidesTwo = 3;
const productsPerSlideTwo = 5;

for (let i = 0; i < totalSlidesTwo; i++) {
  const slide = document.createElement("div");
  slide.className = "swiper-slide"; 

  const group = document.createElement("div");
  group.className = "product-group"; 

  for (let j = 0; j < productsPerSlideTwo; j++) {
    group.innerHTML += createProductHTMLTwo();
  }

  slide.appendChild(group);
  wrapperTwo.appendChild(slide);
}

// Inicializa Swiper isolado
const swiperTwo = new Swiper(".swiper-two", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 16,
  navigation: {
    nextEl: ".swiper-button-next-two",
    prevEl: ".swiper-button-prev-two",
  },
  pagination: {
    el: ".swiper-pagination-two",
    clickable: true,
  },
});
