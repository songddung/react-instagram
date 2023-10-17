import React from 'react';
import './modal.css';

function Modal({ isOpen, closeModal }) {
    return (
        <div style={{display: isOpen ? "block" : "none"}}>
                  <p></p>
                  <img src="/images/surfingQ.png" alt='cutty'></img>
                  <button onClick={closeModal}>돌아가기</button>
              </div>
     );
}

export default Modal;