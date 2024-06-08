
const imagesWrapper = document.querySelector(".images");
const morePicsBtn = document.querySelector(".load-more");
const searchInput = document.querySelector(".search-box input");
const lightBox = document.querySelector(".lightbox");
const closeBtn = lightBox.querySelector("#close");
const downloadImgBtn = lightBox.querySelector("#download");


const showLightbox = (name, img) => {
    lightBox.querySelector("img").src = img;
}


closeBtn.addEventListener('click', function(){
    lightBox.classList.remove("show");
    document.body.style.overflow = "auto";
})




