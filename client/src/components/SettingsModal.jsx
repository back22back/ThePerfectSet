import React, { useState } from 'React'
import ReactDom from 'react-dom';
import { Button } from 'react-bootstrap';
import { IoMdCloseCircle } from 'react-icons/Io'

import ReactDom from 'react-dom';


const SettingsModal = () => {

  return ReactDom.createPortal(
    <>
      <div className='overlay' onClick={onClose}
        style={{backgroundColor: darkTheme ? '#333' : '#000'}}
      />
      <div>

      </div>
    </>,
    document.getElementById('settings')
  );
}

export default SettingsModal;