import styled from "styled-components";

export const Container = styled.div`
      max-width : 1300px;
      margin: auto;

      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas: "header header"  
                            "DivRegister DivImage" ;

`
export const DivHeader = styled.div`
    max-width: 1300px;
    margin: auto;
    grid-area: header ;
`

export const DivRegister = styled.div`
    grid-area: DivRegister;

       >h1 {
           color: var(--color-text);
           font-size: 22px;
           font-weight: 400;
           padding: 10px;
       }


`

export const DivImage = styled.div`
       display: flex;
       align-items: center;
       justify-content: center;
       grid-area: DivImage;
       
`

