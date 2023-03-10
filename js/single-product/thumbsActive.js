export function thumbsActiveFunction() {
  const singleImage = document.querySelector("#single-image");
  const thumbs = document.querySelectorAll(".gallery-thumbs .img-fluid");
  thumbs.forEach((item) => {
    item.addEventListener("click", function () {
      thumbs.forEach((image) => {
        image.classList.remove("active");
      });
      singleImage.src = item.src;
      item.classList.add("active");
    });
  });
}
