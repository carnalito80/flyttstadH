import React from 'react'
import { graphql } from 'gatsby'
import scrollTo from 'gatsby-plugin-smoothscroll';
import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import Parallax from '../components/Parallax'
import Stars from '../components/Stars'
import { Link } from 'gatsby'
import Boka from '../components/Boka'

import Image from '../components/Image'
import '../components/PostCard.css'
import '../components/PostSection.css'


// Export Template for use in CMS preview
export const HomePageTemplate = ({ title, subtitle, featuredImage, offertknapp, body }) => (
  <main className="Home">
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
      offertknapp={offertknapp}
    />

    <section className="section">
      <div className="container introjk">
        <h3 >Är du i behov av en städfirma?</h3>
        <p>“vi på flyttstädning Helsingborg är en pålitlig städfirma, med personal som du kan lita på”<br></br>
        <strong>Gör som flera andra och boka flyttstädning Helsingborg redan idag</strong>
        </p>
        <div  onClick={() => scrollTo('#priser')} className="Button">Priser</div>
      </div>
    </section>
<section className="section">
  <div className="container">
    <div className="PostSection">
      <div className="PostSection--Grid">
      <Link to="#bokaoss" className="PostCard">
        
      <div className="PostCard--ImageJK relative">
        <img  src="/images/icon-1.png" alt="Hink med skurborste" className="Content-Image"></img>
        </div>
        
          <div className="PostCard--Content">
          <h3 className="PostCard--Title">BOKA STÄDNING</h3>
          
          <div className="PostCard--Excerpt"><em>boka direkt via hemsidan hos flyttstädning Helsingborg.</em></div>
          </div>
        </Link>
        <Link to="/om-oss-pa-flyttstadning-helsingborg" className="PostCard">
        
        <div className="PostCard--ImageJK relative">
        <img  src="/images/icon-2.png" alt="En mopp" className="Content-Image"></img>
        </div>

      <div className="PostCard--Content">
      <h3 className="PostCard--Title">PÅLITLIG PERSONAL</h3>
        
        <div className="PostCard--Excerpt"><em>Ni är trygga med oss, gör som 100-tals andra och boka oss idag.</em></div>
      </div>
      </Link>
      <Link to="/vanliga-fragor" className="PostCard">
        
        <div className="PostCard--ImageJK relative">
        <img  src="/images/icon-7.png" alt="En galge med kläder" className="Content-Image"></img>
        
        </div>

      <div className="PostCard--Content">
      <h3 className="PostCard--Title">LÄS MER OM OSS</h3>
        
        <div className="PostCard--Excerpt"><em>Frågor? Du hittar svaren här.</em></div>
      </div>
      </Link>
      </div>
    </div>

  </div>
    
</section>
<section className="section">
  <div className="container">
    <div className="PostSection">
      <div className="PostSection--GridJK">
      <div className="PostCard--HomeP PostCard--Image-Hide relative"><Image background title="Ett rent och fint hem" src="/images/flyttstad-helsingborg-stadare.jpg" alt="Ett rent och fint hem" /></div>
      
      <div>
     <h3>Vad ingår i flyttstädning Helsingborg tjänster</h3>

      <ul >
        <li className="bullet-jk">Dammsugning och våttorkning av golv.</li>
        <li className="bullet-jk">Dörrkarmar, dörrhandtag, trösklar och dörrar torkas av.</li>
        <li className="bullet-jk">Fönsterputsning, in- och utvändigt samt mellan inner- och ytterglas.</li>
        <li className="bullet-jk">Rengöring av fönsterkarmar.</li>
        <li className="bullet-jk">.. och mer!</li>
      </ul>
      <Link to="/detta-ingar-i-flyttstadningen/"><div className="Button">Mer som ingår</div></Link>
      </div>
         
      </div>
    </div>
  </div>
</section>    
<section className="section">
  <div className="container">
    <div className="PostSection">
      <div className="PostSection--GridJK">
      <div>
     <h3>Flyttstädning Helsingborg</h3>

<p>Går du tankar i att flytta? Att flytta kan vara både spännande stressande och väldigt omtumlande. Vi på flyttstädning Helsingborg hjälper er gärna med den stressiga och jobbiga biten.<br></br><br></br>

Ni kan istället fokusera på det roliga bitarna och göra ert framtida hem till ett personligt och vackert hem.<br></br><br></br>

När ni anlitar flyttstädning Helsingborg, så är det väldigt mycket som ingår. Ni kan självklart utnyttja RUT-avdraget. 
Flyttstädning Helsingborg har lång erfarenhet av flyttstädningar, vi garanterar ett rent hem för det nya bostadsägarna
</p>
      </div>
      <div className="PostCard--HomeP relative"><Image background title="En städare" src="/images/service-6.jpg" alt="Flyttstädning Helsingborg hjälper dig flyttstäda" /></div>
         
      </div>
    </div>
  </div>
</section>
<section className="section">
  <div className="container">
    <div className="PostSection">
      <div className="PostSection--GridJK">
      <div className="PostCard--HomeP PostCard--Image-Hide relative"><Image background title="Flyttstädning Helsingborgs resultat" src="/images/bra-flyttstadning.jpg" alt="Flyttstädning Helsingborgs resultat" /></div>
      
      <div>
     <h3>Flyttstädning Helsingborg tar ansvaret</h3>
     <p>Livet är fyllt av jobbiga och stressiga moment. Stress för också med sig onödiga saker såsom tjafs och bråk med dina närstående. Att städa boendet inför en flytt kan vara en sådan sak.</p>
     <p>Varför inte slippa den onödiga stressen och ge flyttstädning Helsingborg fullt ansvar över städningen?</p>

     <p>Att städa tar lång tid och för att det nya ägarna av bostaden ska bli nöjda och glada, så kan det vara bra att ge över ansvaret till några som har lång erfarenhet av att göra kunder nöjda och glada.</p>

     <p><strong>Anlita flyttstädning Helsingborg idag!</strong></p>
      </div>
         
      </div>
    </div>
  </div>
</section>
<section className="section">
  <div className="container">
    <div className="PostSection">
      <div className="PostSection--GridJK">
      <div>
     <h3>Flyttstädning Helsingborg Garanti</h3>

<p>Vi på flyttstädning Helsingborg lämnar alltid garanti på våra flyttstädningar. Garantin gäller för både köparen och säljaren av bostaden.<br></br>

Vissa saker måste ni som kund se till att ordna innan flyttstädningen:</p>
<ul>
<li>Tillgång till vatten</li>
<li>Tillgång till el</li>
</ul>
<p>
Om det det ska rengöras bakom exempelvis kyl och frys, behövs dessa vara framdragna.
</p>
<Link to="/vanliga-fragor">   <div className="Button">Mer om våran garanti</div></Link>
      </div>
      <div className="PostCard--HomeP relative"><Image background title="Flyttstädning Helsingborg städar din bostad" src="/images/flyttstadning-helsingborg-bra.jpg" alt="Flyttstädning Helsingborg städar din bostad" /></div>
         
      </div>
    </div>
  </div>
</section>
<div id="priser" style={{marginBottom:'100px'}}></div>
<Parallax />
<Stars />
<div id="bokaoss" style={{marginBottom:'60px'}}></div>
<section className="section">
  <div className="container">
<h2>Boka Oss På Flyttstädning Helsingborg</h2>
<p>Fyll i formuläret nedan för att boka en flyttstädning. Alternativt ring <strong><a href="tel:073 637 99 08">073 637 99 08</a></strong>.</p>
<Boka name="Flyttstädning Helsingborg" />
</div>
</section>
    <section className="section">
      <div className="container">
        <Content source={body} />
      </div>
     
    </section>
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
        offertknapp
      }
    }
  }
`
