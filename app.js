let bar = document.querySelector("#bar");
let navbar = document.querySelector(".navbar");
let close = document.querySelector("#close");
if(bar){
    bar.addEventListener("click",()=>{
        navbar.classList.add("active");
    })
}
if(close){
    close.addEventListener("click",()=>{
        navbar.classList.remove("active");
    })
}





