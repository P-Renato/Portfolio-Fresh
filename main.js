
const exclamation = document.querySelector(".exclamation");

if (exclamation) {
    setInterval(() => {
        exclamation.style.visibility = 
            exclamation.style.visibility === "hidden" ? "visible" : "hidden";
    }, 800);
}






