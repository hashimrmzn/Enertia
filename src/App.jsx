import './App.css'
import About from './Pages/About/About';
import Home from './Pages/Home/Home'
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>

  )
}

export default App
