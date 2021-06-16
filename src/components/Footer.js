import React from 'react'
// import InstagramFeed from './InstagramFeed'
import './Footer.css'
import { MapPin, Smartphone, Mail, Info, Disc } from 'react-feather'

export default () => (
  <div>
    {/* <h2 className="taCenter">
      Follow us{' '}
      <a href="https://instagram.com/thrivegoldcoast/">@tjay</a>
    </h2>
    <br /> */}
    {/* <InstagramFeed count="8" /> */}
    <footer className="footer">
   
    <section className="Contact--Section1">
      <div className="container Contact--Section1--Container">
      <div className="Contact--Details">
      
         <a className="Contact--Details--Item" href="/detta-ingar-i-flyttstadningen/">
                <Disc />Detta ingår i flyttstädningen
              </a>
        <a className="Contact--Details--Item" href="/kontakt/">
          <Disc />Kontakt
        </a>
        <a className="Contact--Details--Item" href="/om-oss-pa-flyttstadning-helsingborg/">
          <Disc />Om oss på flyttstädning Helsingborg
        </a>
        <a className="Contact--Details--Item" href="/vanliga-fragor/">
          <Disc />Vanliga frågor
        </a>
      </div>
              <div className="Contact--Details">
         
              <a
                className="Contact--Details--Item"
                href='https://www.google.com.au/maps/search/Badhusgatan%202,%20Helsingborg'
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin /> Badhusgatan 2, Helsingborg
              </a>
          
              <a className="Contact--Details--Item" href="tel:073 637 99 08">
                <Smartphone /> 073 637 99 08
              </a>
          
         
              <a className="Contact--Details--Item" href="mailto:info@flyttstädning-helsingborg.nu">
                <Mail /> info@flyttstädning-helsingborg.nu
              </a>
              <a className="Contact--Details--Item" href="">
                <Info /> Org nr 556930-5146
              </a>
          
          </div>
       

        </div>
        </section>
      
    </footer>
  </div>
)
