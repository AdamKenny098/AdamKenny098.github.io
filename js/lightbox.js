function openLightbox(src, alt) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const caption = document.getElementById("lightbox-caption");
  
    if (!lightbox || !lightboxImg || !caption) return;
  
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    caption.textContent = alt;
  
    lightbox.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
  
  function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
  
    if (!lightbox || !lightboxImg) return;
  
    lightbox.style.display = "none";
    lightboxImg.src = "";
    document.body.style.overflow = "auto";
  }
  
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeLightbox();
    }
  });