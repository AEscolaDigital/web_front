import { ModalContainer, Overlay } from "./styles";
import React from 'react';

function Modal({ children, title, width, height }) {

  return (
    <Overlay>
      <ModalContainer style={{
          width: width,
          height: height,
  
      }} >
        <h1 id="title">{title}</h1>
        {children}
      </ModalContainer>
    </Overlay>
  );

}

export default Modal;