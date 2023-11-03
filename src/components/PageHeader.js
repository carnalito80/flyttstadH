import React from 'react'
import PropTypes from 'prop-types'
import Image from './Image'
import Content from './Content'
import { Link } from 'gatsby'
import './PageHeader.css'

const campaign = {};
// if(process.env.CAMPAIGN && process.env.CAMPAIGN == 'true') campaign.active = true;
// else campaign.active = false;
campaign.active = true;

campaign.percentage = 35;
const month = ["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"];

const d = new Date();
campaign.month = month[d.getMonth()];

const PageHeader = ({
  title,
  subtitle,
  backgroundImage,
  large,
  offertknapp,
  className = '',
  hem = false
}) => {
  if (large) className += ' PageHeader-large'
  return (
    <div className={`PageHeader relative ${className}`}>
      {backgroundImage && (
        <Image
          background
          resolutions="large"
          src={backgroundImage}
          alt={title}
          size="cover"
        />
      )}
      {!hem &&
      <div className="container relative">
        
        <h1 className="PageHeader--Title">{title}</h1>
        {subtitle && (
          <Content className="PageHeader--Subtitle" src={subtitle} />
        )}
      {offertknapp &&
       <Link to="/#bokaoss">
       <div className="Button">{offertknapp}</div>    
      </Link>}
       
      </div>
      }
      {hem && !campaign.active &&
        <div className="container relative">
          
        <h1 className="PageHeader--Title">{title}</h1>
        {subtitle && (
          <Content className="PageHeader--Subtitle" src={subtitle} />
        )}
      {offertknapp &&
        <Link to="/#bokaoss">
        <div className="Button">{offertknapp}</div>    
      </Link>}
        
      </div>
      }
       {hem && campaign.active &&
        <div className="container relative">
          
        <h1 className="PageHeader--Title">Flyttstädning Helsingborg</h1>
        <h3>Just nu har vi en oslagbar kampanj med hela {campaign.percentage}% rabatt!*</h3>
        <h5>*Gäller { campaign.month } ut.</h5><br></br>
      {offertknapp &&
        <Link to="/#bokaoss">
        <div className="Button">{offertknapp}</div>    
      </Link>}
        
      </div>
      }
    </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default PageHeader
