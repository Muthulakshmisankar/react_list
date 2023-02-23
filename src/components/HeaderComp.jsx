import React from 'react';

function HeaderComp({}) {
  return (
   <div className='grave_header'>
    <p className='logo'> <img src='./grave/logo.png'></img>Grave sites Management </p>
    <div className='payment'> 
    <ul>
      <li><img src="./grave/grid.png" alt='maintain'></img><span>Maintain</span><img src="./grave/down-arr.png" alt='down-arr'></img></li>
      <li><img src="./grave/dollar.png" alt='dollar'></img><span>Payments</span></li>
      <li><img src="./grave/document.png" alt='document'></img><span>Reports</span></li>
    </ul>
      </div>
      <div className='profile'>
        <ul>
          <li><img src="./grave/search.png" alt='search'></img></li>
          <li><img src="./grave/settings.png" alt='settings'></img></li>
          <li><img src="./grave/help.png" alt='help'></img></li>
          <li>
            <p className='profile-name'>JS</p>
            <div className='profile-section'>
            <div>
            <p className='username'>John snow</p>
            <span className='role'>Municipality officer</span>
            </div>
            <img src="./grave/down-arr.png" alt='down-arr'></img>
            </div>
          </li>
        </ul>
      </div>
   </div>
  );
}

export default HeaderComp;