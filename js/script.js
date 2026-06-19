function openTab(tabId) {
    const tabs = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.style.display = "none";
    });

    const selectedTab = document.getElementById(tabId);

    if (selectedTab) {
        selectedTab.style.display = "block";
    }
}



// Lightbox Gallery
const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

if (galleryImages.length > 0 && lightbox && lightboxImg && closeBtn) {

    galleryImages.forEach(image => {
        image.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImg.src = image.src;
        });
    });

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });
}


// Accordion
const accordions = document.querySelectorAll(".accordion");

accordions.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");

        const panel = item.nextElementSibling;

        if (panel.style.display === "block") {
            panel.style.display = "none";
        }
        else {
            panel.style.display = "block";
        }
    });
});

const promoBtn = document.getElementById("promoBtn");
const promoModal = document.getElementById("promoModal");
const closeModal = document.getElementById("closeModal");

if (promoBtn && promoModal && closeModal) {
    promoBtn.addEventListener("click", () => {
        promoModal.style.display = "flex";
    });

    closeModal.addEventListener("click", () => {
        promoModal.style.display = "none";
    });
}
