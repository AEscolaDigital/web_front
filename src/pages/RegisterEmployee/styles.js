import styled from "styled-components";

export const Container = styled.div`
    max-width: 1440px;
    margin: auto;

    display: grid;
    grid-template-columns: 1fr 1fr;
    //display: flex;
    //justify-content: center;
`
export const DivImagem = styled.div`
    width: 50vw;

    > header{
        margin: 88px 24px 0 25px;

        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 22px;

        color: #5C5C5C;
    }

    >div > img{
        margin: 77px 0 155px 190px ;
    }
`
export const DivDados = styled.div`
    width: 50vw;

    > header{
        margin: 45px 212px 0 265px;

        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 22px;

        color: #5C5C5C;
    }    
`