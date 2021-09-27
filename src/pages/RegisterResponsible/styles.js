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

export const DivRegister = styled.div`
    grid-area: DivRegisterResponsible;
       

       >div {
          
       display: grid;
       grid-template-columns: 1fr 1fr;
       padding: 0px;
       margin-top: 30px;
       }

       >div >div{
              padding: 0px;
              padding-right: 20px;
             
       }

       >div >div > p {
              text-align: center;
              font-size: 15px;
              color: var(--color-text);
            
       }

       #inputCidade{
              margin-right: 70px;
              
       }
`

export const DivBtn = styled.div`
      
      margin: 20px;

       >div{
              margin-left: 30px;  
              
              
       }

       
       `


export const DivImage = styled.div`
       display: flex;
       align-items: center;
       justify-content: center;
       padding-left: 200px;
       grid-area: DivImage;
       `

