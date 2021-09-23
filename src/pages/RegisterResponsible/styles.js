import styled from "styled-components";

export const Container = styled.div`
      max-width : 1300px;
      margin: auto;

      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas: "header header";
`

export const DivHeader = styled.div`
    max-width: 1300px;
    grid-area: header;

    >h1 {
        
        color: var(--color-text);
        font-size: 22px;
        font-weight: 400;
        padding-top: 10px;
        margin: 10px;
        
    }
`

export const DivRegister = styled.div`
    grid-area: DivRegister;
   
    
        >div >p{
            padding: 20px;
            color: var(--color-text);
            font-size: 18px;
            font-weight: bold;

        }
`