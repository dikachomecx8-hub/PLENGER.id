document.addEventListener("DOMContentLoaded", () => {
  // Fade-in sections saat scroll
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(sec => observer.observe(sec));

  // Tombol play video (isi src iframe saat klik)
  const playBtn = document.getElementById("playBtn");
  const videoIframe = document.getElementById("mainVideo");

  playBtn.addEventListener("click", () => {
    // Ganti URL ini dengan embed YouTube yang kamu inginkan
    // Contoh: https://www.youtube.com/embed/0xaTIQt6rTI?rel=0&autoplay=1
    if (!videoIframe.src) {
      videoIframe.src = "https://www.youtube.com/embed/0xaTIQt6rTI?rel=0&autoplay=1";
    }
    playBtn.textContent = "Video Sedang Diputar";
    playBtn.disabled = true;
  });
});
