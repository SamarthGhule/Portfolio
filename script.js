// Sure, I'd be happy to explain the JavaScript code line by line:

// ```javascript
// // toggle icon navbar
// let menuIcon = document.querySelector('#menu-icon');
// let navbar   = document.querySelector('.navbar');

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// }
// ```
// - This section starts with comments explaining that it's related to toggling the navigation icon and navbar.
// - `let menuIcon = document.querySelector('#menu-icon');` selects the HTML element with the ID "menu-icon" and assigns it to the `menuIcon` variable.
// - `let navbar = document.querySelector('.navbar');` selects the HTML element with the class "navbar" and assigns it to the `navbar` variable.
// - The `onclick` event handler is assigned to the `menuIcon`. When the icon is clicked, the code inside the arrow function is executed.
// - `menuIcon.classList.toggle('bx-x');` toggles the presence of the class "bx-x" on the `menuIcon` element. This is likely used to change the icon's appearance.
// - `navbar.classList.toggle('active');` toggles the presence of the class "active" on the `navbar` element. This class is likely used to show or hide the navigation menu.

// ```javascript
// // scroll sections
// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//        let top = window.scrollY;
//        let offset = sec.offsetTop - 100;
//        let height = sec.offsetHeight;
//        let id = sec.getAttribute('id');

//        if(top >= offset && top < offset + height){
//         //active navbar links
//         navLinks.forEach(links => {
//             links.classList.remove('active');
//             document.querySelector('header nav a[href*=' +id + ']').classList.add('active');
//         });
//         //active sections for animation on scroll
//         sec.classList.add('show-animate');
//        }
//        else{
//         sec.classList.remove('show-animate');
//        }
//     });
  
//     let header = document.querySelector('header');
 
//     header.classList.toggle('sticky', window.scrollY > 100);

//     menuIcon.classList.remove('bx-x');
//     navbar.classList.remove('active');

//     let footer = document.querySelector('footer');
//     footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
// }
// ```
// - The comments indicate that this section is about scrolling sections and performing related animations.

// - `let sections = document.querySelectorAll('section');` selects all HTML elements with the tag name "section" and assigns them to the `sections` variable.
// - `let navLinks = document.querySelectorAll('header nav a');` selects all anchor (`<a>`) elements within the navigation (`<nav>`) in the header and assigns them to the `navLinks` variable.

// - `window.onscroll` assigns an event handler that triggers whenever the user scrolls the window.
// - Inside this event handler, the code loops through each `sec` (section) in the `sections` collection.
// - `let top = window.scrollY;` gets the current vertical scroll position of the window.
// - `let offset = sec.offsetTop - 100;` calculates the offset of the current section from the top of the page, minus 100 pixels (likely to adjust the trigger point for animations).
// - `let height = sec.offsetHeight;` gets the height of the current section.
// - `let id = sec.getAttribute('id');` gets the value of the `id` attribute of the current section.

// - The `if` statement checks if the scroll position is within the range of the current section (between `offset` and `offset + height`).
// - If the condition is met, it adds the class "active" to the navigation links that correspond to the current section (`navLinks`). This highlights the active section in the navigation.
// - It also adds the class "show-animate" to the current section (`sec`). This likely triggers animations associated with that section.
// - If the condition is not met, it removes the "show-animate" class from the current section.

// - `let header = document.querySelector('header');` selects the `<header>` element and assigns it to the `header` variable.
// - `header.classList.toggle('sticky', window.scrollY > 100);` toggles the "sticky" class on the header based on whether the vertical scroll position is greater than 100 pixels.

// - `menuIcon.classList.remove('bx-x');` removes the "bx-x" class from the `menuIcon` element.
// - `navbar.classList.remove('active');` removes the "active" class from the `navbar` element.

// - `let footer = document.querySelector('footer');` selects the `<footer>` element and assigns it to the `footer` variable.
// - `footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);` toggles the "show-animate" class on the footer based on whether the sum of the current inner window height and scroll position is greater than or equal to the total scrollable height of the document.

// ```javascript
// const scriptURL = 'https://script.google.com/macros/s/AKfycbxwwJC5OGeU9kxX6DIXwe5E9OrcoCBp-fjUTtHQmaUpVGJnFfllxxWQn6xBubk4qy4h/exec';
// const form = document.forms["submit-to-google-sheet"] 

// form.addEventListener("submit", e => { 
//   e.preventDefault()
//   fetch(scriptURL, { method: "POST", body: new FormData(form) }) 
//     .then( response => alert("Thanks for contacting us..! We will contact you soon...")) 
//     .catch( error => console.error('Error!' , error.message)) 
// })
// ```
// - `const scriptURL = 'https://script.google.com/macros/s/AKfycbxwwJC5OGeU9kxX6DIXwe5E9OrcoCBp-fjUTtHQmaUpVGJnFfllxxWQn6xBubk4qy4h/exec';` defines the URL to a Google Apps Script for form submission.

// - `const form = document.forms["submit-to-google-sheet"]` selects the form with the name "submit-to-google-sheet" and assigns it to the `form` variable.

// - An event listener is added to the form for the "submit" event.
// - `e.preventDefault()` prevents the default form submission behavior.
// - The `fetch()` function sends a POST request to the `scriptURL` with the form data as a `FormData` object.
// - If the fetch is successful, an alert message is shown to the user.
// - If there's an error, it's caught and logged to the console.

// The commented sections are parts of the code that have been disabled by placing them in comments, which means they are not currently active in the code's functionality.


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


//Google Sheets Connect

// const scriptURL = 
//   "https://script.google.com/macros/s/AKfycbxu0dww58HzJ9z5vHwh3CQx-DBF-PKUmo_tHRhzwnHcUYYN0TXT9Ok8VZQMWKOQgwE4/exec"; 
// const form = document.forms["submit-to-google-sheet"]; 
// const msg = document.getElementById("msg"); 
 
// form.addEventListener("submit", (e) => { 
//   e.preventDefault(); 
//   fetch(scriptURL, { method: "POST", body: new FormData(form) }) 
//     .then((response) => { 
//       msg.innerHTML = "Message Sent!"; 
//       setTimeout(function () { 
//         msg.innerHTML = ""; 
//       }, 5000); 
//       form.reset(); 
//     }) 
//     .catch((error) => { 
//       msg.innerHTML = "Oops... Something went wrong!"; 
//       setTimeout(function () { 
//         msg.innerHTML = ""; 
//       }, 5000); 
//       form.reset(); 
//     }); 
// });

// ReadMore Button Start

// function readmore() {

//         var dots = document.getElementById('dots');
//         var moretext = document.getElementById('more');
//         var btn = document.getElementById('btn1');

//         if (dots.style.display === "none"){
//           dots.style.display = "inline";
//           btn.innerHTML = "Read More";
//           moretext.style.display = 'none';
//         } else {
//           dots.style.display = 'none';
//           btn.innerHTML = "Read Less";
//           moretext.style.display = 'inline';
//         }

// }

// ReadMore End



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
