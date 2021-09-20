import { ModalContainer, Overlay } from "./styles";

function Modal({title, body}) {
  return (
    <Overlay>
      <ModalContainer>
        <header>{title}</header>
         {body}
      </ModalContainer>
    </Overlay>
  );
}

export default Modal;
