import styled from "styled-components";

export const Container = styled.div`

    max-width: 1300px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:"header header" "DivImage DivDados" ;
    
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
{/*Seção Imagem */ }
export const DivImage = styled.div`
    grid-area:DivImage;
    align-items:left;
    display:flex;
   position:relative;
   top:100px;
   right:80px;

`
{/************* */ }
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

    >div:nth-child(2){
        display:flex;
       
        >span{
            margin:40px 0 0 15px;
        }
    }

    >div:nth-child(3){
        display:flex;
       
        >span{
            margin:40px 0 0 15px;
        }
    }

    >div:nth-child(4){
        display:flex;
       
        >span{
            margin:40px 0 0 15px;
        }
    }
 
    >div:nth-child(6){
       display:flex;
    }

    >div:nth-child(7){
       display:flex;
    }

    >p{
        margin: 10px 0px 0 120px;
        fom
    }

    >div:nth-child(10){
      margin: 5px 0 0 165px;
    }

   
`


