function openVideoModal() {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('modalIframe');
  
  // Ganti URL embed di sini sesuai video yang kamu mau
  iframe.src = 'https://www.youtube.com/embed/0xaTIQt6rTI?rel=0&autoplay=1';
  
  modal.style.display = 'flex';
}

function closeVideoModal() {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('modalIframe');
  
  iframe.src = ''; // stop video
  modal.style.display = 'none';
}

// Tutup modal kalau klik di luar iframe
window.onclick = function(event) {
  const modal = document.getElementById('videoModal');
  if (event.target === modal) {
    closeVideoModal();
  }
}
