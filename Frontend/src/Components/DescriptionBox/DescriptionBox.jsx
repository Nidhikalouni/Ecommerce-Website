import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () =>  {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe earum vitae molestias
                 tenetur libero esse dignissimos suscipit dolorem, modi vel quibusdam cumque. Amet 
                 neque dolorem, impedit itaque cupiditate necessitatibus unde.</p>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                     dolorum incidunt omnis culpa optio inventore ipsa iste quasi quaerat,
                     magni suscipit facere cumque reiciendis aspernatur ullam dolores eveniet earum explicabo!</p>
        </div>
      
    </div>
  )
}

export default DescriptionBox
