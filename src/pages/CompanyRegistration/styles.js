import styled from "styled-components";

export const Container = styled.div`

     display: grid;
    grid-template-columns: 2fr 1fr ;    
    overflow-y: hidden;
   box-sizing:border-box;
    

`
export const DivHeader = styled.div`

    

    div{
        margin: 5vw 0 10px 8vw;
        
        h1   {
        color: var(--color-text);
         font-size:22px;
        line-height:30px;
        }
    }
   
`
export const DivCampos = styled.div`

    >h1{
        color: var(--color-text);
        font-size:22px;
        margin: 50px 0 10px 9vw;
    }
    >div{
        margin: -23vw 30vw 0 9vw;
        color: var(--color-text);
        display:block;
    }
    >div:nth-child(2){
        margin:3vw 0 0 8vw;  
    }
    >div:nth-child(3){
        margin:3vw 0 0 9vw;
        >h2{
            font-size:20px;
            color: var(--color-text);
        }
    }
    >div:nth-child(4){
        margin:20px 0 0 8vw ;
    }
    >div:nth-child(5){
        display:flex;
        margin:10px 0 0 8vw;
    }
    >div:nth-child(6){
        margin:10px 0 0 8vw;
    }
    >div:nth-child(8){
        margin:20px 0 0 8vw;
    }
    >div:nth-child(9){
        margin: 3vw 0 5vw 25vw;
    }
`

export const DivImage = styled.div`

    margin:10vw 0 0 0;
    position:relative;
    bottom:-120px;
    right:16vw;
`



