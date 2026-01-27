function playVideo(embedUrl) {
  const wrapper = document.getElementById('videoWrapper');
  const iframe = document.getElementById('videoIframe');
  
  iframe.src = embedUrl;
  wrapper.style.display = 'block';
  
  // Scroll ke video
  wrapper.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
