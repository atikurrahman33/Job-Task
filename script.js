function changeImage(element) {
  let mainImage = document.getElementById("mainProductImage");
  mainImage.src = element.src;

  let thumbnails = document.querySelectorAll(".thumbnails img");
  thumbnails.forEach(img => img.classList.remove("active"));

  element.classList.add("active");
}
