// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar   = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
       let top = window.scrollY;
       let offset = sec.offsetTop - 100;
       let height = sec.offsetHeight;
       let id = sec.getAttribute('id');

       if(top >= offset && top < offset + height){
        //active navbar links
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' +id + ']').classList.add('active');
        });
        //active sections for animation on scroll
        sec.classList.add('show-animate');
       }
       //If you want to use animation that repeats on scroll, then try this
       else{
        sec.classList.remove('show-animate');
       }
    });
  
    //sticky header
    let header = document.querySelector('header');
 
    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    //animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

const scriptURL = 
  'https://script.google.com/macros/s/AKfycbxwwJC5OGeU9kxX6DIXwe5E9OrcoCBp-fjUTtHQmaUpVGJnFfllxxWQn6xBubk4qy4h/exec'
const form = document.forms["submit-to-google-sheet"] 
// const msg = document.getElementById("msg"); 
 
form.addEventListener("submit", e => { 
  e.preventDefault()
  fetch(scriptURL, { method: "POST", body: new FormData(form) }) 
    .then( response => alert("Thanks for contacting us..! We will contact you soon...")) 
    .catch( error => console.error('Error!' , error.message)) 
})
