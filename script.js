import { eventData } from './config.js';

// Función que se ejecuta al cargar el DOM
window.addEventListener('DOMContentLoaded', () => {
  const seal = document.getElementById('seal');
  const envelope = document.getElementById('envelope');
  const introImage = document.getElementById('intro-image');
  const continueBtn = document.getElementById('continue-button');
  const sparkleContainer = document.getElementById('sparkle-container');
  const mainContent = document.querySelector('.main-content');
  const audioPlayer = document.getElementById('musica');

  // Abrir sobre y mostrar imagen de introducción antes del contenido
  seal?.addEventListener('click', () => {
    envelope?.classList.add('open');
    setTimeout(() => {
      envelope.style.display = 'none';
      introImage.classList.remove('hidden');
      sparkleContainer.classList.remove('hidden');
      generateSparkles(); // añadir destellos
      audioPlayer.play(); // reproducimos música de inmediato
    }, 1000);
  });

  // Evento para continuar a la invitación
  continueBtn?.addEventListener('click', () => {
    introImage.classList.add('hidden');
    mainContent.classList.remove('hidden');
  });

  // Contador regresivo
  const [day, month, year] = ['02', '08', '2025'];
  const eventDate = new Date(`${year}-${month}-${day}T00:00:00`);
  const countdown = setInterval(() => {
    const now = new Date();
    const diff = eventDate - now;

    if (diff <= 0) {
      clearInterval(countdown);
      document.getElementById('contador').innerHTML = "<h2>¡Hoy es el gran día!</h2>";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('dias').innerText = days;
    document.getElementById('horas').innerText = hours;
    document.getElementById('minutos').innerText = minutes;
    document.getElementById('segundos').innerText = seconds;
  }, 1000);

  // Animaciones scroll
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => observer.observe(section));

  // Agregar al calendario
  window.addToCalendar = function () {
    const calendarURL = "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NXU4ZjVtMmtobHNsanI3aXJnN3ZuOWlqZ20gY182OTRhZWE0ODlhN2FkZTJiYzRmYjRiNGExYTE2ZmY3ZDY2ZjAzNzFlMTgwY2I1MzZmM2M3YzE2NGUxZWMwOGIxQGc&tmsrc=c_694aea489a7ade2bc4fb4b4a1a16ff7d66f0371e180cb536f3c7c164e1ec08b1%40group.calendar.google.com";
    window.open(calendarURL, "_blank");
  };

  // Confirmar asistencia (desde loads.js)
  window.confirmarAsistencia = function () {
    const nombre = document.getElementById('guest-name')?.textContent || 'Invitado';
    const pases = document.getElementById('passes')?.textContent || '0';
    const numeroTelefono = '50247696714';
    const mensaje = `Hola, gracias por la invitación a los quinceaños de Fernandita 👑🌸. Queremos confirmar nuestra asistencia, somos ${pases} personas que vamos a asistir.`;
    const enlaceWhatsapp = `https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${encodeURIComponent(mensaje)}`;
    window.open(enlaceWhatsapp, '_blank');
  };
});

function generateSparkles() {
  const sparkleContainer = document.getElementById('sparkle-container');
  if (!sparkleContainer) return;

  setInterval(() => {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkleContainer.appendChild(sparkle);
    setTimeout(() => {
      sparkle.remove();
    }, 2000);
  }, 150);
}
// Función para abrir la imagen en modal
const modal = document.getElementById('gallery-modal');
const modalImage = document.getElementById('modal-image');
const modalClose = document.getElementById('modal-close');

document.querySelectorAll('.galeria img').forEach(img => {
  img.addEventListener('click', () => {
    modalImage.src = img.src;
    modal.classList.remove('hidden');
  });
});

modalClose.addEventListener('click', () => {
  modal.classList.add('hidden');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});


