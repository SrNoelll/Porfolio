import React from 'react'
import cv from '../../images/Curriculum_Noel_Alarcon.pdf'
import "./CVComponent.css"
const CVComponent = () => {
  return (
    <div className='my-5 container'>
        <div className='row'>
            <iframe className='cv col-12' src={cv} frameborder="0"></iframe>
        </div>
      
    </div>
  )
}

export default CVComponent
