import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'

export default () => (
  <div>
    {/* <h2 className="taCenter">
      Follow us{' '}
      <a href="https://instagram.com/thrivegoldcoast/">@tjay</a>
    </h2>
    <br /> */}
    {/* <InstagramFeed count="8" /> */}
    <footer className="footer">
    <section className="section Contact--Section1">
      <div className="container Contact--Section1--Container">
     
        <div>
         
          <ul>
            <li><a href="/detta-ingar-i-flyttstadningen/">Detta ingår i flyttstädningen</a></li>
            <li><a href="/kontakt/">Kontakt</a></li>
            <li><a href="/om-oss-pa-flyttstadning-helsingborg/">Om oss på flyttstädning Helsingborg</a></li>
            <li><a href="/vanliga-fragor/">Vanliga frågor</a></li>
          </ul>
         </div>
        <div>
        <p>Flyttstädning Helsingborg<br></br>

        <a href="mailto:info@flyttstädning-helsingborg.nu">info@flyttstädning-helsingborg.nu</a>   <br></br>
        <a href="tel:073 637 99 08">073 637 99 08</a>  <br></br>
        Badhusgatan 2, 25221 Helsingborg<br></br>
        Org nr 556930-5146<br></br>
        </p>
        </div>

        </div></section>
      {/* <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} {' '}
          <a href="/">Flyttstädning Helsingborg</a>
        </span>
      </div> */}
    </footer>
  </div>
)
