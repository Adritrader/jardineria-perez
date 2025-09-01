// --- SCROLL ANIMATIONS ---
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  mirror: false
});

// --- COOKIE FUNCTIONS ---
function closeCookie() {
  const cookieBox = document.getElementById('cookieBox');
  if (cookieBox) {
    cookieBox.style.display = 'none';
    localStorage.setItem('cookieAccepted', 'true');
  }
}

// Show cookie banner if not accepted
document.addEventListener('DOMContentLoaded', function() {
  const cookieAccepted = localStorage.getItem('cookieAccepted');
  const cookieBox = document.getElementById('cookieBox');
  
  if (!cookieAccepted && cookieBox) {
    cookieBox.style.display = 'flex';
  } else if (cookieBox) {
    cookieBox.style.display = 'none';
  }
});

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

// ===== TESTIMONIALS TOGGLE FUNCTIONALITY =====
function toggleQuote(button) {
  const card = button.closest('.testimonial-card');
  const quote = card.querySelector('.quote');
  const isExpanded = quote.classList.contains('expanded');
  
  if (isExpanded) {
    quote.classList.remove('expanded');
    button.textContent = 'Leer más';
    card.style.maxHeight = '320px';
  } else {
    quote.classList.add('expanded');
    button.textContent = 'Leer menos';
    card.style.maxHeight = 'none';
  }
}

// Inicializar botones de testimonios
document.addEventListener('DOMContentLoaded', function() {
  // Esperar a que las fuentes se carguen
  setTimeout(() => {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    testimonialCards.forEach(card => {
      const quote = card.querySelector('.quote');
      const button = card.querySelector('.quote-toggle');
      
      if (quote && button) {
        // Crear un elemento temporal para medir el texto completo
        const tempDiv = document.createElement('div');
        tempDiv.style.position = 'absolute';
        tempDiv.style.visibility = 'hidden';
        tempDiv.style.height = 'auto';
        tempDiv.style.width = quote.offsetWidth + 'px';
        tempDiv.style.fontSize = window.getComputedStyle(quote).fontSize;
        tempDiv.style.lineHeight = window.getComputedStyle(quote).lineHeight;
        tempDiv.style.fontFamily = window.getComputedStyle(quote).fontFamily;
        tempDiv.innerHTML = quote.innerHTML;
        
        document.body.appendChild(tempDiv);
        
        const fullHeight = tempDiv.offsetHeight;
        const lineHeight = parseInt(window.getComputedStyle(quote).lineHeight);
        const maxHeight = lineHeight * 4; // 4 líneas
        
        document.body.removeChild(tempDiv);
        
        // Mostrar botón solo si el texto se trunca
        if (fullHeight > maxHeight + 10) { // +10 para margen de error
          button.classList.remove('hidden');
          button.style.display = 'inline-block';
        } else {
          button.style.display = 'none';
        }
      }
    });
  }, 100);
});

// ===== LIGHTBOX PARA GALERÍA =====
function openLightbox(imageSrc, caption) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  
  if (lightbox && lightboxImg && lightboxCaption) {
    lightboxImg.src = imageSrc;
    lightboxCaption.textContent = caption;
    lightbox.style.display = 'block';
    
    // Prevenir scroll del body
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.style.display = 'none';
    
    // Restaurar scroll del body
    document.body.style.overflow = '';
  }
}

// Cerrar lightbox al hacer clic fuera de la imagen
document.addEventListener('DOMContentLoaded', function() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }
  
  // Cerrar con tecla ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  });
});

