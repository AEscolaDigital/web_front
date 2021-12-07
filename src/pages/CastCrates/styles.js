import styled from "styled-components";

export const Container = styled.div`
    max-width: 1440px;
    width: 85vw;
    min-height: 900px;

    background-color: white;

    margin: 50px 0px 100px calc(50vw - 700px);

    padding-bottom: 100px;

    border-radius: 25px;

    @media (max-width: 1375px) {
        margin-left: calc(50vw - 540px);
    }

`

export const ContainerFillInTheData = styled.div`

`

export const ContainerTable = styled.table`
    margin: auto;
    width: 96%;

    #trTh{
        display: grid;
        grid-template-columns: 10% 17% 12% 12% 12% 12% 12% 13%;

        border-bottom:  2px solid var(--color-blue);
        border-top:  2px solid var(--color-blue);

        height: 60px;

        align-items: center;

        color: var(--color-blue);
        font-weight: bolder;

        padding-left: 5%;

        th{
           text-align: start;
       }
    }

    tbody{
    
        tr{
            display: grid;
            align-items: center;
            grid-template-columns: 11% 18.5% 10% 12% 12% 12% 12% 12.5%;

            height: 60px;

            text-align: start;

            padding-left: 5%; 

            font-size: 16px;
            font-weight: bolder;
            color: var(--color-text);

            border-bottom:  2px solid var(--color-blue);
        }

        .imgTable{
            width: 40px;
            height: 40px;

            border-radius: 100px;
        }

        .inputGrades{
            width: 40px;
        }
    }
`