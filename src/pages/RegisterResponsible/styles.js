import styled from "styled-components";

export const Container = styled.div`
      max-width : 1300px;
      margin: auto;

      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas: "header header"  
                            "DivRegisterResponsible DivImage" ;

`
export const DivHeader = styled.div`
    max-width: 1300px;
    
    grid-area: header ;
    
    >h1 {
           color: var(--color-text);
           font-size: 22px;
           font-weight: 400;
           margin-top : 15px ;
           padding-top: 20px;
           justify-items: start;
       }
`

export const FormContainer = styled.form`
    grid-area: DivRegisterResponsible;
       
       >div {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 0px;
            margin-top: 25px;
       }

       >div >div{
              padding: 0px;
              padding-right: 20px;
              margin-top: 10px;
       }

       >div >div > p {
              text-align: center;
              font-size: 15px;
              color: var(--color-text);
       }

       #city{
              margin-right: 150px;      
       }

       #complement{
              margin-bottom: 40px;
       }
`

export const DivBtn = styled.div`
       margin: 20px;
       margin-bottom: 50px;
       margin-left: 50px;
       `

export const DivImage = styled.div`
       display: flex;
       align-items: center;
       justify-content: center;
       padding-left: 200px;
       grid-area: DivImage;

       @media (max-width: 1400px) {
            padding-left: 0px;
            margin-left: -80px;
       }

`

