import styled from "styled-components";

export const Container = styled.div`
    max-width: 1300px;
    margin: auto;

    display: grid;
    grid-template-columns: 1fr 1fr;
   
`
export const DivImagem = styled.div`
    width: 50vw;

    > h1{
        margin: 88px 0 0 25px;
        align-items: center;
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 22px;

        color: #5C5C5C;
    }

    >img{
        margin: 77px 0 156px 190px
    }
`
export const DivDados = styled.div`
    width: 50vw;

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