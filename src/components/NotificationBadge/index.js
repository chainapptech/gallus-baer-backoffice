import React from 'react';

import './styles.scss';

const NotificationBadge = ({className, number}) => {
  return (
   <div class={`notification-badge ${className}`}>
    <p className='small-text'>{number>99 ? '99+' : number}</p>
   </div>

  )
}

export default NotificationBadge;
