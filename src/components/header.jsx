import React from 'react';
import property from '@/property';
import generateRandomValue from '@/utils/generateRandomValue';

const Header = ({ title }) => {
  const motivation = property.pages.home.data.motivation;
  const randomMotivation = generateRandomValue(motivation);
  
  return (
   <div className='header'>
     <div className='header-cards'>
       <p className='md-txt title'>Hello, {title}!</p>
       <p className='text'>{randomMotivation}</p>
     </div>
     <div className='box-notification'>
       <ion-icon name='notifications' class='icons'></ion-icon>
     </div>
   </div>
  )
}

export const HeaderSec = ({ title }) => {
  return (
   <div className='header-sec'>
     <p className='text'>{title}</p>
   </div>
  )
}

export default Header;