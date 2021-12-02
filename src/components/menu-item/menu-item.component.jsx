import React from "react";
import './menu-item.styles.scss'
import { useNavigate } from 'react-router-dom'

function MenuItem({title, linkUrl, imageUrl, size}) {
  let navigate = useNavigate();
  function handleClick() {
    navigate(linkUrl);
  }
  return (
    <div className={`${size} menu-item`} onClick={ handleClick }>
      <div 
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>{linkUrl}</span>
      </div>
    </div>
  );
}

export default MenuItem;