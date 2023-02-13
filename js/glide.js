const productsContainer = document.getElementById("product-list");
const productsContainer2 = document.getElementById("product-list2");
const productsContainer3 = document.getElementById("product-list3");

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
}

export function product3() {
  const config3 = {
    perView: 5,
    gap: 5,
    bound: true,
    breakpoints: {
      992: {
        perView: 3,
      },
    },
  };
  productsContainer3 && new Glide(".product-thumb", config3).mount();
}
