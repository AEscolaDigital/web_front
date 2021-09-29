import { ModalContainer, Overlay } from "./styles";
import React from 'react';


function ModalAviso({ children, title, width }) {

  return (
    <Overlay>
      <ModalContainer style={{
          width: width,
  
      }} >
        <h1 id="title">{title}</h1>
        {children}
      </ModalContainer>
    </Overlay>
  );

}

export default ModalAviso;