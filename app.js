// testing file
// console.log("Hello,world");
// set date
const date = (document.getElementById("date").innerHTML=new Date());
// nav toggle
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
console.log(navBtn);
console.log(links);
//add event lister\
navBtn.addEventListener("click",()=>{
    links.classList.toggle("show-links");
});
// nav fixed
const navbar = document.querySelector(".navbar");
// console.log(navbar);
window.addEventListener("scroll",()=>{
    if(window.pageYOffset > 62){
        navbar.classList.add("fixed")
    }
    else{
        navbar.classList.remove("fixed")
    }
})
// smooth scroll
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(link=>{
link.addEventListener("click",(e)=>{
    e.preventDefault();
    // console.log("Hello you click the link");
    links.classList.remove("show-links");
    const id = e.target.getAttribute("href").slice(1);
    console.log(id);
    const element = document.getElementById(id);
    console.log(element.offsetTop);
//position
let position;
if(navbar.classList.contains("fixed")){
    position = element.offsetTop - 62;
}
else{
    position= element.offsetTop-124;
}
if(window.innerWidth < 992){
    if(navbar.classList.contains("fixed")){
        position = element.offsetTop-62;
    }
    else {
        position =  element.offsetTop - 386-62;
    }
    
}
    //window scroll tool
    window.scrollTo({
        left:0,
        top:position,
        behavior:"smooth"
    });
});
});
