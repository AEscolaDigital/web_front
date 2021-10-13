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
    grid-area: header;

    >h1 {
        
        color: var(--color-text);
        font-size: 22px;
        font-weight: 400;
        padding-top: 10px;
        margin: 10px;
        
    }
`

export const FormContainer = styled.form`
    grid-area: DivRegister;
    
        >div >p{
            padding: 20px;
            color: var(--color-text);
            font-size: 18px;
            font-weight: bold;
        }
`

export const TypeUser = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;

    >span{
        color: var(--color-text);
        margin: 25px 0px 0px 25px;
    }

    >div{
        display: flex;
        column-gap: 10px;
    }
   
`

export const DivBtn = styled.div`
       display: grid;
       grid-template-columns: 1fr 1fr;
       padding: 20px;
       margin-top: 25px;
`


export const DivImage = styled.div`
       display: flex;
       justify-content: center;
       grid-area: DivImage;
       
        >img{
            position: fixed;
        }
     
       
`
