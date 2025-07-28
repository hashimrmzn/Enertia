import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom'; 
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
);

  {

function handleHeaderBg() {
  const header = document.querySelector(".site-header");
  const logo = document.querySelector("img.sitelogo");

  if (!header || !logo) return;

  const scrolled = window.scrollY > 50;

  header.classList.toggle("bg-header", scrolled);
  logo.classList.toggle("dark-logo", scrolled);
}



window.addEventListener("scroll", handleHeaderBg);

handleHeaderBg();

// here animtion text js starts
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const targets = document.querySelectorAll('.textanimation');

    targets.forEach(target => {
      const text = target.textContent;
      target.textContent = '';

      text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.animationDelay = `${index * 0.05}s`;
        target.appendChild(span);
      });

      // Observer for each element
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, {
        threshold: 0.5
      });

      observer.observe(target);
    });
  }, 500);
});


  
  
  }