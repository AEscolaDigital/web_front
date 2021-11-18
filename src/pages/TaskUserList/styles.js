import styled from "styled-components";

export const Container = styled.div`
     
    max-width: 1000px;
    width: 58vw;
    margin-left: calc(50vw - 360px);

>div{
    color: var(--color-text);
    margin-top: 80px; 

    >div:nth-child(1){
       float:left;
       padding-left:50px;
    } 
    >div:nth-child(2){
        float:left; 
        padding-left:130px; 
    }
    >div:nth-child(3){
        display: flex;
        padding-left:130px; 
    }

    hr{
        width: 55vw;
        margin-left: -70px;
    }
} 
`
export const ContainerTable = styled.table`
    max-width: 50vw;
    width: 100%; 

    margin-top: 50px;

    height: 100%;

    margin-bottom: 100px;

    thead{
        width: inherit;

        tr{
            display: grid;
            grid-template-columns: 16%  78%;
            text-align: end;
        }
    }

    tbody{
        tr{
            display: grid;
            align-items: center;
            grid-template-columns: 10% 80% 10%;

            height: 60px;

            margin-top:15px;


            padding-left: 30px;

            font-size: 16px;
            font-weight: bolder;
            color: var(--color-text);
            text-align: start;
            cursor: pointer;

            :hover{
                width: 100%;
                background-color: red;
            }

            img{
                width: 40px;
                height: 40px;
            }

            .delete{
                margin-top: 10px;
            }
        } 
    }  
`