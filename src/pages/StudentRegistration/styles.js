import styled from "styled-components";

export const Container = styled.div`

    max-width: 1300px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:"header header" "DivImage DivInput" ;
    
`

export const DivHeader = styled.div`

    max-width:1300px;
    grid-area:header;
    margin-top:100px;
  
    >h1{
        color: var(--color-text);
        font-size:22px;
        font-weight:400;
        margin-top:15px;
        padding-top:20px;
        justify-items:start;
    }

` 
export const DivImage = styled.div`
    grid-area:DivImage;
    align-items:left;
    display:flex;
   position:relative;
   top:100px;
   right:80px;

`

export const DivDados = styled.div`

   
    >h1{
        color: var(--color-text);
        font-size:22px;
        font-weight:800;
        justify-items:center;
        position:relative;
        bottom:80px;
        left:150px;
    }

    >div{
        grid-area:DivInput;
       background:yellow;
      
    }
   
`
export const DivAnexo = styled.div `

    background:red;
    width:150px;
    height:200px;
    margin: 0 0 10px 320px;
`


