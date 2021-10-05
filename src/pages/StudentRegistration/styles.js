import styled from "styled-components";

export const Container = styled.div`
    max-width: 1300px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:"header header" 
                        "DivImage DivDados" ;
    
`

export const DivHeader = styled.div`
    max-width:1300px;
    margin: auto;
    grid-area:header;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top:100px;
  
    >h1{
        
        color: var(--color-text);
        font-size:22px;
        font-weight:400;
           
    }

    >h2{
        color: var(--color-text);
        font-size:22px;
        font-weight:200;
        margin-left: 250px; 
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

`
{/*Seção Imagem */ }
    export const DivImage = styled.div`
        grid-area:DivImage;
        align-items:left;
        display:flex;
        position:relative;
        bottom:40px;
        right:80px;
    `
{/************* */ }
export const DivDados = styled.form`

   
    >h1{
        color: var(--color-text);
        font-size:22px;
        font-weight:800;
        justify-items:center;
        position:relative;
        bottom:80px;
        
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
        color: var(--color-text);
        font-weight:600;
    }

    >div:nth-child(10){
      margin: 5px 0 0 175px;
    }

    >div:nth-child(11){
        
        >p{
           text-align:center;
           color: var(--color-text);
            margin-top:40px;
            font-size:25px;
        }

        >div{
            width:100px;
            height:20px;
            background:#5059C9;
            margin-top:20px;
            margin-bottom:20px;
           margin-left:320px;
        }
        >div:nth-child(2){
            width:100px;
            height:20px;
            background:white;
            border:1px solid ;
            float:left;
           margin-left:180px;
        }
    }

        >div.entrar{

            float:right;
            position:relative;
            top:45px;
            right:30px;
        }

        >div.cancelar{
            margin-top:65px;
            margin-bottom:50px;
            position:relative;
            left:75px;
        }


`





