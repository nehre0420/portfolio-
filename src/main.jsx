import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'

createRoot(document.getElementById('root')).render(
 
  <StrictMode>
    <BrowserRouter>
    <Navbar/>
    <App/>
    <Footer/>
    </BrowserRouter>
    
  </StrictMode>,
)
