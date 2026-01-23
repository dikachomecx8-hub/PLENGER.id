* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  line-height: 1.6;
  color: #222;
  background-color: #f9f9f9;
}

header {
  background: linear-gradient(to right, #c8102e, #ed1c24);
  color: white;
  text-align: center;
  padding: 2.5rem 1rem;
}

h1 {
  font-size: 2.8rem;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.3rem;
  opacity: 0.9;
}

.hero {
  background: url('https://images.unsplash.com/photo-1567605495897-166514d86ef8?w=1200') center/cover no-repeat;
  color: white;
  text-align: center;
  padding: 8rem 1rem;
  position: relative;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.55);
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 900px;
  margin: 0 auto;
}

h2 {
  color: #b22222;
  margin: 2rem 0 1rem;
  font-size: 2rem;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.proklamasi-text {
  background: #fff;
  border: 2px solid #c8102e;
  padding: 2.5rem;
  font-size: 1.3rem;
  line-height: 2;
  text-align: center;
  margin: 2rem 0;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.signature {
  margin-top: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
}

.video-section {
  background: #fff;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  margin: 2.5rem 0;
}

.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  border-radius: 10px;
}

.video-wrapper iframe,
.video-wrapper video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.tokoh-list {
  list-style: none;
  margin: 1.5rem 0;
}

.tokoh-list li {
  padding: 0.8rem 0;
  font-size: 1.15rem;
  border-bottom: 1px solid #eee;
}

.tokoh-list li:last-child {
  border-bottom: none;
}

footer {
  background: #111;
  color: #aaa;
  text-align: center;
  padding: 2rem;
  margin-top: 3rem;
}

/* Responsive */
@media (max-width: 768px) {
  h1 { font-size: 2.2rem; }
  .hero { padding: 5rem 1rem; }
  .proklamasi-text { font-size: 1.15rem; padding: 1.8rem; }
    }
