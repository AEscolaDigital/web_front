import styled from "styled-components";

export const Container = styled.div`
    max-width: 1300px;
    margin: auto;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:"header header" "DivImagem DivDados" ;
   
`
export const DivHeader = styled.div`
    grid-area: header;
    max-width: 1300px;
    margin-top: 90px;

    >h1{
        color: var(--color-text);
        font-size: 22px;
        font-weight: 400;
        justify-items: start;
    }
    
`

export const DivImagem = styled.div`
    grid-area: DivImagem;
    position: relative;
    margin: 80px 100px 300px 100px;
`

export const DivDados = styled.div`
    grid-area: DivDados;
    
    > h1{   
        color: var(--color-text);
        font-size: 22px;
        font-weight: 800;
        justify-items: center;
        position: relative;
        left: 250px;
        bottom: 80px;
    }

    >div:nth-child(2){
        position: relative;
        left: 100px;

    }

    >div:nth-child(3){
        display: flex;
        position: relative;
        left: 100px;

        >span{
            position: relative;
            left: 30px;
            top: 20px;

        }
    }

     >div:nth-child(4){
         display: flex;
         position: relative;
         left: 100px;

         >span{
            position: relative;
            left: 30px;
            top: 40px;

        }
    }

    >div:nth-child(5){
        position: relative;
        left: 100px;
    }

    >div:nth-child(6){
        display: flex;
        position: relative;
        left: 100px;
    }

    >div:nth-child(7){
        display: flex;
        position: relative;
        left: 100px;
    }

    >div:nth-child(8){
        position: relative;
        left: 100px;
    }

    >div:nth-child(9){
        position: relative;
        left: 250px;

        >span{
            color: var(--color-text);
            font-size: 12px;
            font-weight: 600;
            
        }

        >div{
            margin-top: 20px;
            margin-left: 30px;
        }
    }

    >div:nth-child(10){

        >span{
            position: relative;
            left: 380px;
            color: var(--color-text);
            font-size: 12px;
            font-weight: 600;

        }

        .inputGenero{
            display: flex;
            margin-top: 30px;

            >div:nth-child(1){
                border: 2px solid #5059C9;
                box-sizing: border-box;
                border-radius: 0px 8px;
                position: relative;
                left: 200px;
            }

            >div:nth-child(2){
                border: 2px solid #5059C9;
                box-sizing: border-box;
                border-radius: 0px 8px;
                position: relative;
                left: 300px;
            }
        }
    }

    .inputButao{
        display: flex;
        margin-top: 100px;

        >div:nth-child(1){
            position: relative;
            left: 250px;
        }

        >div:nth-child(2){
            position: relative;
            left: 350px;
        }
    }
       
`