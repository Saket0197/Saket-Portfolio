import React from 'react'
import BookMarks from './BookMarks'

export default function Footer() {
  return (
    <div className='footer'>
        <a href='#Header'><i class="fa-solid fa-circle-arrow-up"></i></a>
        <BookMarks/>
        <div className='faded-text'>SAKET SHARMA</div>
    </div>
  )
}
