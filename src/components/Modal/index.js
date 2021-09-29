import { ModalContainer, Overlay } from "./styles";
import React from 'react';

function Modal({ children, title, width, hegth }) {

  return (
    <Overlay>
      <ModalContainer style={{
          width: width,
          hegth: hegth,
  
      }} >
        <h1 id="title">{title}</h1>
        {children}
      </ModalContainer>
    </Overlay>
  );

}

export default Modal;