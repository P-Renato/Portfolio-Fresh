


const exclamation = document.querySelector<HTMLElement>(".exclamation");

if (exclamation) {
    setInterval(() => {
        exclamation.style.visibility = 
            exclamation.style.visibility === "hidden" ? "visible" : "hidden";
    }, 1000);
}






