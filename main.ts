


const exclamation = document.querySelector(".exclamation") as HTMLElement;

if (exclamation) {
    setInterval(() => {
        exclamation.style.visibility = 
            exclamation.style.visibility === "hidden" ? "visible" : "hidden";
    }, 1000);
}






