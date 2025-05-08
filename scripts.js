// --- CONTACT FORM SUBMISSION ---
/*const form = document.getElementById('formulario');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  fetch('/submit-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      alert('Mensaje enviado exitosamente!');
      form.reset();
    } else {
      alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
  });
});
*/
// --- RESPONSIVE MENU ---
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  navLinks.style.display = navLinks.classList.contains('active') ? 'flex' : '';
});

// --- CLOSE MENU ON LINK CLICK (mobile) ---
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    
  });
});

// --- SCROLL ANIMATIONS ---
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
  mirror: false
});

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// --- RESPONSIVE IMAGES ---
window.addEventListener('resize', () => {
  const aboutImg = document.querySelector('.about-content img');
  const galleryItems = document.querySelectorAll('.gallery-item img');
  aboutImg.style.maxWidth = '100%';
  galleryItems.forEach(img => img.style.maxWidth = '100%');
});