let menubar = document.querySelector(".menubar_container");
let nav_wrapper = document.querySelector("#navigation_wrap");

// let left_nav = document.querySelector(".left_nav");

// let arrImage = [
// "../assets/Xbar.svg",
// "../assets/menubar.svg"
// ]

console.log(nav_wrapper);

menubar.addEventListener("click", addClassname)


function addClassname(e){
    e.preventDefault()
    let image = document.querySelector(".image")
    if(nav_wrapper.className === "navigation_wrapper"){
    nav_wrapper.className += " responsive"
    console.log(nav_wrapper.className)
    console.log(image)
    image.src = "../assets/Xbar.svg"
    
    }else{
    nav_wrapper.className = "navigation_wrapper"
    console.log(nav_wrapper.className);
    console.log(image);
    image.src = "../assets/menubar.svg"

    }
}