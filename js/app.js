const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.nav-nav')
hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('is-active')
    nav.classList.toggle('active')
    if(nav.classList.contains('active')){
        document.body.style.overflow = "hidden"
        setInterval(()=>{
            nav.style.boxShadow = "0px 0px 0px 200px #22283125"
        },100)
    }
    else{
        document.body.style.overflow = "visible"
        nav.style.boxShadow = "none"
    }
})

const dropdownToggle = document.querySelector('.dropdown-toggle')
const dropdown = document.querySelector('.link-dropdown')
dropdownToggle.addEventListener('click',()=>{
    dropdown.classList.toggle('dropdown-active')
})