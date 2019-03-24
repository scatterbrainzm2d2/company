import React, { Component } from 'react';
import '../css/intro.css'; 

class IntroPage extends Component {
  render() {
    return (
        <>
        <div className='header-container'>
            <div className='constpic'>
              <img src="../images/underconst.png" alt='under construction symbol'/>
            </div>
           <div className='const-text'>
          <div className='temp-line1'>
          <p className='temp-text'>We're Renovating Our Website,</p>
          <p className="temp-text1">  Check Back Soon!!!</p>
          </div>
          <div className='temp-line2'>
          <p className='temp-text2'>Reach Out To Us For</p>
          <p className="temp-text3"> Inquiries and Information</p>
          </div>
          <a href="mailto:info@m2d2.io">&nbsp;&nbsp;info@m2d2.io</a>
          </div>
          </div>
          <div className="logo-box">
            <p className='logo'>m2d2.io</p>
           <div className="catch-line">
          <p className='catch-text_one'>Dream</p>
          <p className='catch-text_two'>Design</p>
          <p className='catch-text_three'>Develop</p>
          <p className='catch-text_four'>Deliver</p>
          </div>
        </div>
        <div className='footer'>
          <p className='contact-number'>p.  647.745.9565</p>
          <p className='general-email'>
            <a href="mailto:inquiries@m2d2.io">Email Contact</a>
          </p>
          <p className='country'>Toronto, Canada<img src="../images/canada-flag.png" alt='Canadian Flag'/></p>
        </div>
      </>
    );
  }
}

export default IntroPage;