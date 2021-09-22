import { ModalContainer, Overlay } from "./styles";
import React from 'react';
import BtnCancel from "../BtnCancel";
import BtnSubmit from "../BtnSubmit";

function Modal({ children, title }) {

  return (
    <Overlay>
      <ModalContainer>
        <h1 id="title">{title}</h1>
        {children}
      </ModalContainer>
    </Overlay>
  );

}

export default Modal;
