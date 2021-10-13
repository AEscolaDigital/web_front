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

    .error{
        width: 400px;
        height: 70px;

        display: flex;
        align-items: center;
        justify-content: center;

        margin: 20px 0px 20px 0px;

        background-color: #5059c9;

        border-radius: 0px 50px 0px 50px;
        border: 2px solid #013097;
        
        span{
            color: white;
            font-size: 18px;
        }
    }
    
    #ForgotPassword{
        width: 395px;
        text-align: end;
        margin: 60px 0px 20px 0px;
    }

    #btnSubmit {
        width: 400px;
        display: flex;
        justify-content: end;
    }

    #register{
        margin-top: 50px;
        font-size: 18px;

        a{
            text-decoration: underline;
            cursor: pointer;
        }
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
