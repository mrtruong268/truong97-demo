const navSlide = () =>{
    const navres = document.querySelector('.navres');
    const nav = document.querySelector('.navbar__list');
    navres.addEventListener('click',()=>{
        nav.classList.toggle('navbar-active');
    });
}
navSlide();