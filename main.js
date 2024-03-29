/*__________________________________________show menu_________________________________________*/

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*__________________________________________toggle menu mobile_________________________________________*/

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*__________________________________________scroll sections_________________________________________*/

const sections = document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*__________________________________________scroll reveal_________________________________________*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
});

/*__________________________________________loop of the title_________________________________________*/

const roles = ["IT Undergraduate", "Full Stack Developer"];
let roleIndex = 0;
let textIndex = 0;
let isDeleting = false;
let typingSpeed = 150; 

function typeRole() {
    const currentRole = roles[roleIndex];
    const roleElement = document.getElementById("role");
    const cursorElement = document.getElementById("cursor");

    const text = currentRole.slice(0, isDeleting ? textIndex - 1 : textIndex + 1);
    roleElement.textContent = text;

    if (!isDeleting && text === currentRole) {
        isDeleting = true;
        typingSpeed = 400; 
        

    } else if (isDeleting && text === "") {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 150;        
    }

    textIndex = isDeleting ? textIndex - 1 : textIndex + 1;
    cursorElement.style.display = text === currentRole ? "none" : "inline";
    setTimeout(typeRole, typingSpeed);
}

typeRole(); 

/*__________________________________________submit button on contact_________________________________________*/

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    const sendButton = document.getElementById("send-button");

  
    sendButton.addEventListener("click", function() {
        
        contactForm.reset();
    });
});


/*_________________________________________project photo chnaging_________________________________________*/

const images1 = ['./img/pr1/1.jpeg','./img/pr1/2.jpeg' ]; 
    let currentIndex1 = 0;

    function changeImage1() {
        currentIndex1 = (currentIndex1 + 1) % images1.length;
        const imagePath = images1[currentIndex1];
        document.querySelector('.img-cover-pr1').src = imagePath;
    }

    setInterval(changeImage1, 5000); 

const images2 = ['./img/pr2/1.jpeg','./img/pr2/2.jpeg' ]; 
    let currentIndex2 = 0;

    function changeImage2() {
        currentIndex2 = (currentIndex2 + 1) % images2.length;
        const imagePath = images2[currentIndex2];
        document.querySelector('.img-cover-pr2').src = imagePath;
    }

    setInterval(changeImage2, 5000); 

const images3 = ['./img/pr3/1.png','./img/pr3/2.jpeg', './img/pr3/3.png','./img/pr3/4.png' ]; 
    let currentIndex3 = 0;

    function changeImage3() {
        currentIndex3 = (currentIndex3 + 1) % images3.length;
        const imagePath = images3[currentIndex3];
        document.querySelector('.img-cover-pr3').src = imagePath;
    }

    setInterval(changeImage3, 5000); 

    const images4 = ['./img/pr4/1.jpeg','./img/pr4/2.jpeg', './img/pr4/3.jpeg','./img/pr4/4.jpeg' ]; 
    let currentIndex4 = 0;

    function changeImage4() {
        currentIndex4 = (currentIndex4 + 1) % images3.length;
        const imagePath = images4[currentIndex4];
        document.querySelector('.img-cover-pr4').src = imagePath;
    }

    setInterval(changeImage4, 5000); 

    
/*_________________________________________delays and intervals_________________________________________*/

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon, ',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input, .contact__inf ',{interval: 200});