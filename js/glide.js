const productsContainer = document.getElementById("product-list");
const productsContainer2 = document.getElementById("product-list2");

export function product1() {
  const config = {
    perView: 4,
    gap: 5,
    autoplay: 3000,
    bound: true,
    breakpoints: {
      992: {
        perView: 3,
      },
      768: {
        perView: 2,
      },
      576: {
        perView: 1,
      },
    },
  };
  productsContainer && new Glide(".product-carousel", config).mount();
}

export function product2() {
  const config2 = {
    perView: 4,
    gap: 5,
    autoplay: 3000,
    bound: true,
    breakpoints: {
      992: {
        perView: 3,
      },
      768: {
        perView: 2,
      },
      576: {
        perView: 1,
      },
    },
  };
  productsContainer2 && new Glide(".product-carousel2", config2).mount();

  const config3 = {
    perView: 5,
    gap: 5,
    bound: true,
    breakpoints: {
      992: {
        perView: 3,
      },
      768: {
        perView: 2,
      },
      576: {
        perView: 1,
      },
    },
  };
  new Glide(".product-thumb", config3).mount();
}
