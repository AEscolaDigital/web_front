import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    
    overflow-y: hidden;

    >div{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const DivLogin = styled.div`
    width: 50vw;
    height: calc(45vw + 10px) ;

    background-color: white;  

    div>h1{
        color: var(--color-text);
        text-align: center;
        font-size: 18px;
    }

    div>div:nth-child(2) a{
        float: right;

        color: #9F9F9F;
        
        margin: 20px 40px 30px 0px;
    }

    div>div:nth-child(3){
        width: 400px;

        display: flex;
        justify-content: end;
    }

    #register{
        margin-top: 100px;
        font-size: 22px;

        a{
            text-decoration: underline;
            cursor: pointer;
        }
    }
`

export const DivImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    max-width: 46vw;

    >img{
        width: 700px;
        height: 500px;
    }
`