import React, { useState } from 'react';
import ReactDom from 'react-dom';
import DateTimePicker from 'react-datetime-picker';


const DatePickerModal = () => {
  const [value, onChange] = useState(new Date());

  return ReactDom.createPortal(
    <>
      <div className='overlay' onClick={onClose}
        style={{backgroundColor: darkTheme ? '#333' : '#000'}}
      />
      <div>
        <DateTimePicker
          onChange={onChange}
          value={value}
        />
      </div>
    </>,
    document.getElementById('date-picker')
  );
}

export default DatePickerModal;