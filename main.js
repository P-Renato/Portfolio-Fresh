
const exclamation = document.querySelector(".exclamation");

if (exclamation) {
    setInterval(() => {
        exclamation.style.visibility = 
            exclamation.style.visibility === "hidden" ? "visible" : "hidden";
    }, 800);
}






document.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    const nextSection = document.querySelector(".next-section"); // Adjust to your section class
  
    const headerBottom = header.getBoundingClientRect().bottom;
    const sectionTop = nextSection.getBoundingClientRect().top;
  
    if (sectionTop <= headerBottom) {
      header.style.transform = "translateY(-100%)"; // Moves header out of view
    } else {
      header.style.transform = "translateY(0)"; // Keeps header visible
    }
  });