import React from 'react';
import photograph from '../Assets/UserAsset/photograph.jpg';
import BookMarks from './BookMarks';

export default function Header() {

  return (
    <div className='header' id='Header'>

        <div>
          <img src={photograph} alt='MyImage' className='my-image'/>
        </div>

        <div className='intro-section'>
            <div className="logo-container">
                <img src={require('../Assets/UserAsset/logoImgDark.jpg')} className='logo-image' alt="LogoImage" />
                <span>aket Sharma</span>
            </div>

            <BookMarks/>
        </div>
    </div>
  )
}
