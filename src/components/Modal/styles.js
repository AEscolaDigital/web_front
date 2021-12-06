import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  z-index: 30;

  width: 100vw;
  height: 100vh;

  background-color: var(--modal-overlay-color);

  display: flex;
  justify-content: center;
  align-items: center;

`;

export const ModalContainer = styled.section`
    min-width: 700px;
    max-height: 85vh;

    overflow-y: auto;
    z-index: 40;

    background-color: white;

    border-radius: 20px;
    padding: 20px 40px 20px 40px;

    #title{
      color: var(--color-text);
    }

    .labelWhite {
          background-color: white;
    }

    @media (max-width: 1375px) {
          max-height: 95vh; 
    }
`;
