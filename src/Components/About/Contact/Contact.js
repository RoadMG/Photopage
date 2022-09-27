import React from 'react';
import './contact.css'

const Contact = (props) => {
  return (props.trigger) ? (
    <div className='c-popup'>
      <div className='c-popup-inner'>
        <button className='c-close-btn' onClick={() => props.setTrigger(false)}>Close</button>
        {props.children}
      </div>

    </div>
  ) : ''
}

export default Contact;
