import React from 'react';
import IconButton from '../IconButton';

import './styles.scss';

const ListItem = ({icon, children}) => {
  return (
    <div className='d-flex list-item'>
        <IconButton icon={icon} size={'sm'} className="contact-icon"/>
        <p className='link'>{children}</p>
    </div>
  )
}

export default ListItem;
