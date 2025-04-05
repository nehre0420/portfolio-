import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>
    
   <div className='footer-box'>
        <div className="footer-content">
        <h1>welcome to my website</h1>
        <p>try to macke sone beautiful</p>
        <input id='input' placeholder='Email addres'></input><div className="input-line"></div>

    </div>
    <div className="menu-box">
      
        <ul>
          <h3>about</h3>
          <li>contect us</li>
          <li>about us</li>
        </ul>
       
        <ul>
          <h3>contact us</h3>
          <li>home</li>
          <li>about</li>
        </ul>
    </div>
   </div>
   <div className='social-box'>
   
   
      <li>facebook</li>
      <li>instagram</li>
      <li>twitter</li>
      <li>linkedin</li>
      
    
    
   </div>
   <div className="footer-bottom">
    <p>copyright &copy; 2025 sahil</p>
   </div>
   </>
   
  )
}

export default Footer
