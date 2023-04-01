const toggleMenuElement = document.getElementById("toggle-menu");
const mainMenuElement = document.getElementById("main-menu");

const enlaces = document.querySelectorAll(".encabezado__enlace a")


toggleMenuElement.addEventListener("click", ()=>{
    mainMenuElement.classList.toggle("encabezado__navegador--show")
});


enlaces.forEach(enlace => {
    enlace.addEventListener("click", ()=>{
        mainMenuElement.classList.toggle("encabezado__navegador--show");
    })
})

