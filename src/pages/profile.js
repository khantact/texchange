import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Img from '../assets/stock_image.jpg'
import { useState } from 'react'

const Profile = () => {
  const [img, setImg] = useState('');
  return (
    <div className='profile_container'>
      <h1 className='profileHead'>Profile</h1>
      <div className="profImg">
        <img src={Img} alt="pfp" id='pfp'/>
        <div className="overlay">
          <div>
            <label htmlFor="uploadImg" className='uploadArrow'>
            <FontAwesomeIcon icon={faArrowUpFromBracket} size= {'2x'}/>
            </label>
            <input 
              type="file" 
              accept='image/*' 
              style={{display: 'none'}} 
              id= 'uploadImg' 
              onChange={(e) =>{setImg(e.target.files[0])}}  
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile