* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  line-height: 1.6;
  color: #111;
  background: linear-gradient(to bottom, #c8102e 50%, #ffffff 50%);
  min-height: 100vh;
}

header {
  background: rgba(200, 16, 46, 0.85);
  color: white;
  text-align: center;
  padding: 4rem 1rem 3rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
}

h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

header p {
  font-size: 1.3rem;
  opacity: 0.9;
}

.content {
  max-width: 1000px;
  margin: 2rem auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.92);
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.15);
}

h2 {
  color: #c8102e;
  text-align: center;
  margin-bottom: 1.5rem;
  border-bottom: 3px solid #c8102e;
  padding-bottom: 0.5rem;
}

.proklamasi-text {
  background: #fff;
  border: 3px solid #c8102e;
  padding: 2.5rem;
  text-align: center;
  font-size: 1.4rem;
  line-height: 2.2;
  border-radius: 10px;
  margin: 1.5rem 0;
  box-shadow: 0 4px 15px rgba(200,16,46,0.2);
}

.ttd {
  margin-top: 2rem;
  font-weight: bold;
  font-size: 1.6rem;
  color: #c8102e;
}

ul {
  list-style: none;
  padding-left: 0;
}

ul li {
  margin: 1rem 0;
  font-size: 1.2rem;
  padding-left: 1.5rem;
  position: relative;
}

ul li::before {
  content: "★";
  color: #c8102e;
  position: absolute;
  left: 0;
}

.video-section {
  max-width: 1000px;
  margin: 2rem auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.92);
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.15);
}

.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* rasio 16:9 */
  height: 0;
  overflow: hidden;
  border-radius: 10px;
  border: 4px solid #c8102e;
  box-shadow: 0 8px 25px rgba(0,0,0,0.25);
}

.video-wrapper iframe,
.video-wrapper video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

footer {
  text-align: center;
  padding: 2rem 1rem;
  background: rgba(200, 16, 46, 0.9);
  color: white;
  margin-top: 3rem;
}

/* Responsif */
@media (max-width: 768px) {
  h1 { font-size: 2.2rem; }
  .content, .video-section { padding: 1.5rem; margin: 1rem; }
  .proklamasi-text { font-size: 1.2rem; padding: 1.8rem; }
    }
