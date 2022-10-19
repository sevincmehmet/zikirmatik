let sayac = localStorage.getItem("sayac") ? Number(localStorage.getItem("sayac")) : 0 ;
let arttirDOM = document.querySelector("#arttir")
let resetDOM = document.querySelector("#reset")
let sayacDOM = document.querySelector("#sayac")


sayacDOM.innerHTML = sayac

arttirDOM.addEventListener("click",islev)
resetDOM.addEventListener("click",islev)

function islev(){
    this.id == "arttir" ? sayac += 1 : sayac = 0 ;
    localStorage.setItem("sayac", sayac)
    sayacDOM.innerHTML = sayac
}
