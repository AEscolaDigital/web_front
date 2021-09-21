import { ModalContainer, Overlay } from "./styles";
import React from 'react';
import BtnCancel from "../BtnCancel";
import BtnSubmit from "../BtnSubmit";

function Modal({ onClose = () => { }, children, title }) {

  return (
    <Overlay>
      <ModalContainer>
        <h1 id="title" onClick={onClose} >{title}</h1>
        {children}

        <div id="btnModal" >
          <BtnCancel  text="Cancelar" />
          <BtnSubmit text="Próximo" />
        </div>
      </ModalContainer>
    </Overlay>
  );

}

export default Modal;
