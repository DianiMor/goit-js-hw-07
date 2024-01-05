import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

function modalGallery(items) {
  return items
    .map(
      (item) =>
        `<li> <a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a> </li>`
    )
    .join("");
}

console.log(galleryItems);

gallery.innerHTML = modalGallery(galleryItems);
gallery.addEventListener("click", galeriaClick);
document.addEventListener("keydown", handleKeyPress);

/* function galeriaClick(event) {
    (`
    <img src="${event.preview}" width="800" height="600">
`)
console.log("hola");
}
 */
console.log(gallery);

let initial = null;

function galeriaClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const largeImageURL = event.target.parentElement.href;

  initial = basicLightbox.create(
    `<img src="${largeImageURL}" width="800" height="600">`
  );

  initial.show();

  initial.element().addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      initial.close();
    }
  });
}

function handleKeyPress(event) {
  if (event.key === "Escape" && instance) {
    instance.close();
  }
}
