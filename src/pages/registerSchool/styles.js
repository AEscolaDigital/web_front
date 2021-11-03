import styled from "styled-components";
   
export const Container = styled.div`

    display: grid;
    grid-template-columns: 2fr 1fr ;    
    overflow-y: hidden;
    box-sizing:border-box;
    

`

export const DivHeader = styled.div`
    div{
        margin: 5vw 0px 10px 9vw;
        
        h1   {
        color: var(--color-text);
        font-weight: 400;
        font-size:22px;
        line-height:50px;
        }
    }
   
`
export const DivCampos = styled.form`

    >h1{
        color: var(--color-text);
        font-size:22px;
        margin: 50px 0px 10px 9vw;
    }
    >div{
        margin: 0px 30vw 0px 9vw;
        color: var(--color-text);
        display:block;
    }
    >div:nth-child(2){
        margin:3vw 0px 0px 8vw;  
    }
    >div:nth-child(3){
        margin:3vw 0px 0px 9vw;
        >h2{
            font-size:20px;
            color: var(--color-text);
        }
    }
    >div:nth-child(4){
        margin:20px 0px 0px 8vw ;
    }
    >div:nth-child(5){
        display:flex;
        margin:10px 0px 0px 8vw;
    }
    >div:nth-child(6){
        display: flex;
        margin:10px 0px 0px 8vw;
    }

    >div:nth-child(7){
        margin:10px 0px 0px 8vw;
    }

    >div:nth-child(9){
        margin: 10px 0px 0px 8vw;
    }
    >div:nth-child(10){
        margin:40px 0px 10px 24vw;
    }
`

export const DivImage = styled.div`
    margin: 10px 0px 0px 0px;

    >img{
        position: fixed;
        bottom: calc(50vh - 250px);
        right: 150px;
    }
`



