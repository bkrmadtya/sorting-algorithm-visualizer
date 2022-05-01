import React, { FC, useEffect, useState } from 'react';

const localStorageKey = 'modal-has-been-shown'

const Modal: FC = () => {
  const [show, setShow] = useState<boolean>();

  useEffect(() => {
    if (window) {
      const localStorageValue = localStorage.getItem(localStorageKey)
      if (!localStorageValue) {
        setShow(true)
      }
    }
  }, []);

  const handleModalClose = (): void => {
    setShow(false)
    localStorage.setItem(localStorageKey, 'true')
  }

  if (!show) {
    return null
  }

  return <div className='modal'>
    <div className='modal__content'>
      <div className='modal__content__header'>
        <strong>Caution!</strong>
      </div>
      <div className='modal__content__content'>
        <p>The application shows flashing colors.</p>
        <p>Please, keep the color mode option <strong>&quot;off&quot;</strong> if you are affected by it.</p>
      </div>
      <div className='modal__content__footer'>
        <button type="button" onClick={handleModalClose}>Close</button>
      </div>
    </div>
  </div>
}

export default Modal;