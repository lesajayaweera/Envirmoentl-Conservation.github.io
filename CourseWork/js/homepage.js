const mainImage = document.getElementById("main-image");
const mainSection = document.getElementById("main-section");

// Add darker effect on focus and remove it on blur
mainSection.addEventListener("focus", () => {
  mainImage.classList.add("darker"); // Add darker class when section is focused
});

mainSection.addEventListener("blur", () => {
  mainImage.classList.remove("darker"); // Remove darker class on blur
});
