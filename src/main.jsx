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
  if (!header) return;                    
  const scrolled = window.scrollY > 50; 
  header.classList.toggle("bg-header", scrolled);
}


window.addEventListener("scroll", handleHeaderBg);

handleHeaderBg();

  }