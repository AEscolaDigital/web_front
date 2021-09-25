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
        margin: 77px 0 156px 190px;
    }
`
export const DivDados = styled.div`
    width: 50vw;

    >div{
        margin: 45px 98px 0 24px;

        > h1{
            margin-left: 188px;
            margin-bottom: 74px;
            font-family: Montserrat;
            font-style: normal;
            font-weight: normal;
            font-size: 22px;
            line-height: 22px;

            color: #5C5C5C;
        }    
    }
`