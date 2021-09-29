import styled from "styled-components";

export const Container = styled.div`
    max-width: 1300px;
    margin: auto;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:"header header" "DivImagem DivDados" ;
   
`
export const DivHeader = styled.div`
    max-width: 1300px;
    grid-area: header;
    margin-top: 90px;


    >h1{
        color: var(--color-text);
        font-size: 22px;
        font-weight: 400;
        padding-top: 20px;
        justify-items: start;

    >img{
        margin: 77px 0 156px 190px
    }
`

export const DivImagem = styled.div`
    grid-area: DivImagem;
    position: relative;
    margin: 80px 0 300px 150px;
`

export const DivDados = styled.div`
    grid-area: DivDados;
    
    > h1{   
        color: var(--color-text);
        font-size: 22px;
        font-weight: 800;
        justify-items: center;
        position: relative;
        bottom: 60px;
        left: 350px;
    }

    >div{
        position: relative;
        left: 180px;
        bottom: 20px;
    }

    >div:nth-child(3){
        display: flex;

        >span{
            position: relative;
            left: 30px;
            top: 40px;

        }
    }

    >div:nth-child(4){
        display: flex;

        >span{
            position: relative;
            left: 30px;
            top: 40px;

        }
    }

    >div:nth-child(6){
        display: flex;
    }

    >div:nth-child(7){
        display: flex;
    }

    >div:nth-child(9){

        >span{
            position: relative;
            align-items: center;
            left: 300px;
            top: 20px;
        }

    > h1{
        text-align: center;
        margin: 50px 265px 0 0;
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 22px;

        color: #5C5C5C;
        
    }

    > div:nth-child(2){
        margin-top: 70px;
    }

    > div:nth-child(3){
        display: flex;
        align-items: center;
        margin-top: 40px;
    }

    >div:nth-child(6){
        display: flex;
        margin-top: 40px;
    }
    
`