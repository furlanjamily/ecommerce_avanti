const wrapper = document.getElementById("swiper-wrapper-two");

function createProductHTML() {
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

function createSlide() {
  const slide = document.createElement("div");
  slide.className = "swiper-slide";

  const group = document.createElement("div");
  group.className = "product-group";

  for (let j = 0; j < 5; j++) {
    group.innerHTML += createProductHTML();
  }

  slide.appendChild(group);
  return slide;
}


const singleSlide = createSlide();


wrapper.appendChild(singleSlide.cloneNode(true));
wrapper.appendChild(singleSlide.cloneNode(true));


const swiper = new Swiper(".swiper", {
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
