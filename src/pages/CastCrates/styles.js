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

    #btnSubmit{
        width: 98%;

        display: flex;
        justify-content: end;

        margin-top: 20px;

    }

`

export const ContainerFillInTheData = styled.div`

    margin-left: 150px;
    margin-bottom: 20px;

    padding-top: 25px;

    >h1{
        color: var(--color-text);
        margin-bottom: 10px;
    }

    >span{
        color: var(--color-text);
        margin-left: 10px;
    }

    fieldset{
        width: 400px;
        height: 100px;

        border:2px solid var(--color-blue);

        border-radius: 5px;

        margin-top: 30px;
        margin-bottom: 50px;
        margin-left: 45px;

        >legend{
            margin-left: 16px;

            padding: 0px 5px 0px 5px;

            color: var(--color-text);
        }

        #selects{
            display: grid;
            
            width: 275px;
            height: 20px;

            margin-left: 30px;
            
            >select{
                margin-top: 10px;
                border: 1px solid var(--color-blue);


            }
        }

    }

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
            grid-template-columns: 11% 18.5% 6% 12% 12% 12% 17% 12.5%;

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
        
        .selectGrades{
            /* margin-left: -50px; */

            border: 2px solid var(--color-blue);
        }
    }

    
    tfoot{
         margin: auto;

         height: 45px;

         display: flex;
         align-items: center;
         justify-content: space-between;

         background-color: var(--color-blue);
         color: white;

         border-radius: 10px;

         padding: 0px 50px 0px 50px;

        >div{
            display: flex;
            column-gap: 40px;

            font-size: 12px;
            font-weight: 600;

            #divImgSetas>img{
                margin-left: 45px;
                cursor: pointer;
            }
        } 
    }

`