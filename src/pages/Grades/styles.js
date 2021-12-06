import styled from "styled-components";

export const ContainerTitle = styled.div`
    max-width: 960px;
    width: 90vw;

    margin: 20px auto;

    color: var(--color-text);

        h1{
            font-size: 24px;
            font-weight: bold;
        }

        h2{
            font-size: 18px;
            margin-left: 80px;
        }
`

export const ContainerCard = styled.div`
    max-width: 960px;
    width: 90vw;

    margin: 2% auto;

    display: grid;

    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

export const Card = styled.div`
    width: 300px;
    height: 200px;

    margin-left: 2%;
    margin-top: 5%;

    padding: 8px;

    border-radius: 8px;

    transition: all 0.5s linear 0s;

    cursor: pointer;

    img {
        width: 285px;
        height: 94px;

        object-fit: cover;
        border-radius: 8px;
    }

    .data {
        margin-top: 10px;

        >h1{
            color: var(--color-text);
            font-size: 18px;
        }

        >p{
            width: 250px;

            color: var(--color-text);
            font-size: 14px;
        }
    }

    @keyframes top {
        from {
            margin-top: 50vh;
        }
        to {
            margin-top: 5%;
        }
    }

    :nth-child(3n+1){
        animation: top 2s;
    }

    :nth-child(3n+2){
        animation: top 2s;
        animation-delay: 50ms;
        animation-fill-mode: backwards;
    }

    :nth-child(3n+3){
        animation: top 2s;
        animation-delay: 100ms;
        animation-fill-mode: backwards;
    }

    :hover{
        background: white;
        box-shadow: 0px 1px 5px 0px rgb(0 0 0 / 50%);
        border: 1px solid hsla(0, 0%, 87.8%, 0);
        margin-bottom: 1px;
    }

`