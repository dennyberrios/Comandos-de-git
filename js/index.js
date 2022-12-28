const conteudo = document.querySelectorAll("[data-anime]");
const animationList = "animation";

function scroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    conteudo.forEach((Element) => {
        if((windowTop) > Element.offsetTop) {
            Element.classList.add(animationList)
        }else{
            Element.classList.remove(animationList)
        }
    })
}

if(conteudo.length) {
    window.addEventListener("scroll", () => {
        scroll()
    })
}