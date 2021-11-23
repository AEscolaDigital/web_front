import styled from "styled-components";

export const Container = styled.div`
     
    max-width: 1000px;
    width: 58vw;
    margin-left: calc(50vw - 360px);

    @media (max-width: 1370px){
        margin-left: calc(50vw - 200px);
    }
 
`

export const ContainerInfo = styled.div`
    margin-top: 50px;

    div{
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        button{
            border: 0;
            cursor: pointer;

            font-size: 15px;
            font-weight: bold;
            color: var(--color-text);

            background-color: var(--color-background);

        }

        font-size: 18px;
        color: var(--color-text);
        font-weight: bold;
    }

    hr{
        border: 1px solid #C4C4C4;
        margin-top: 5px;
    }
    
`
export const ContainerTable = styled.table`
    max-width: 50vw;
    width: 100%; 
    height: 100%;

    margin-top: 50px;
    margin-bottom: 100px;

    background-color: white;

    border-radius: 10px;

    @media (max-width: 1370px){
        max-width: 60vw;
    }

    thead{
        width: inherit;

        tr{
            display: grid;
            grid-template-columns: 16%  75%;
            text-align: end;
        }

        th{
            padding-top: 12px;
            color: var(--color-text);
        }
    }

    tbody{
        tr{
            display: grid;
            align-items: center;
            grid-template-columns: 10% 75% 10%;

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
                background-color: var(--color-background);
                border-radius: 10px;
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