import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import img from '../assets/stock_image.jpg'
const profile = () => {
  return (
    <div className='profile_container'>
      <h1 className='profileHead'>Profile</h1>
      <div className="profImg">
        <img src={img} alt="pfp" id='pfp'/>
        <div className="overlay">
          <div>
            <label htmlFor="uploadImg">
            <FontAwesomeIcon icon={faArrowUpFromBracket}/>
            </label>
            <input type="file" accept='image/*' style={{display: 'none'}} id= 'uploadImg' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default profile