import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  z-index: 10;

  width: 100vw;
  height: 100vh;

  background-color: var(--modal-overlay-color);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.section`
    min-width: 750px;
    min-height: 560px;

    z-index: 20;

    background-color: white;

    border-radius: 20px;
    padding: 20px 40px 20px 40px;

    >header{

    }

`;
