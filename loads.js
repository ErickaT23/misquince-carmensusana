const guests = [
  { id: "1", name: "Anabella & Leandro", passes: 2 },
  { id: "2", name: "Macarena & Rogelio", passes: 2 },
  // Agrega más invitados aquí
];

document.addEventListener("DOMContentLoaded", () => {
  // Obtener parámetros de la URL
  const queryParams = new URLSearchParams(window.location.search);
  const guestId = queryParams.get("id");

  // Buscar el invitado
  const guest = guests.find(g => g.id === guestId);

  const guestNameEl = document.getElementById('guest-name');
  const passesEl = document.getElementById('passes');
  const infoSection = document.querySelector('.invitation-info-section');

  if (guest) {
    const invitationText = guest.passes > 1
      ? `¡${guest.name}, están invitados!`
      : `¡${guest.name}, estás invitado!`;

    if (guestNameEl) guestNameEl.textContent = invitationText;
    if (passesEl) passesEl.textContent = `${guest.passes} ${guest.passes === 1 ? 'pase' : 'pases'}`;
  } else {
    if (guestNameEl) guestNameEl.textContent = "¡Invitado no encontrado!";
    if (infoSection) infoSection.style.display = "none";
  }
});

  