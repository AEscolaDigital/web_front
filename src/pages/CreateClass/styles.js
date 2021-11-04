import styled from "styled-components";

export const Container = styled.div`
    max-width: 1300px;
    width: 85vw;
    background-color: white;

    margin: 100px 0px 100px calc(50vw - 600px);

    padding-bottom: 100px;

    border-radius: 25px;

    @media (max-width: 1370px) {
        margin-left: calc(50vw - 540px);
    }

`

export const ContainerCreateClassAndSelectClass = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;

    padding-top: 85px;


`
export const CreateClassAndSelectClass = styled.div`
    margin-left: 60px;

    >h1{
        
        color: var(--color-text);
        margin-bottom: 20px;
    }

    #button{
        width: 70%;

        display: flex;
        justify-content: end;

        margin-top: 30px;
    }

    #selectClass{

        width: 100%;

        margin-top: 65px;
        font-size: 11px;
        color: var(--color-text);
    }

    form{
        margin-left: 40px;
    }
`

export const ContainerImg = styled.div`
   img{
       width: 500px;
       height: 420px;

       margin-right: 10px;
   }
   
`
export const ContainerAddMemberToClass = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    margin-top: 100px;
    margin-bottom: 130px;

    padding-left: 50px;
    padding-right: 50px;

    #AddMemberToClassExcel{
        padding: 50px;
    }
     
    #AddMemberToClass{

        h1{
            color: var(--color-text);
            font-size: 22px;
            margin-bottom: 10px;
        }

        #buttonAddMemberToClass{
            display: flex;
            justify-content: end;

            width: 75%;

            margin-top: 20px;
        }

        form{
            margin-left: 20px;
        }
        
    }
`

export const AddMemberWithWxcelWile = styled.div` 

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--color-blue);
`
export const Content = styled.div`
    width: 100%;
    max-width: 400px;

    margin: 30px;
    background: #fff;
    border-radius: 4px;
`;



export const ContainerTable = styled.table`
    width: 1125px;
    margin: auto;
    
    #trTh{

        display: grid;
        grid-template-columns: 100px 200px 200px 200px;

        border-bottom:  2px solid var(--color-blue);
        border-top:  2px solid var(--color-blue);

        height: 60px;

        align-items: center;

        color: var(--color-blue);
        font-weight: bolder;

        padding-left: 50px;

       th{
           text-align: start;
       }
    } 

    tbody{

        tr{

            display: grid;
            align-items: center;
            grid-template-columns: 100px 200px 200px 200px;

            height: 60px;

            text-align: start;

            padding-left: 60px;

            font-size: 16px;
            font-weight: bolder;
            color: var(--color-text);

            border-bottom:  2px solid var(--color-blue);

            img{
                width: 40px;
                height: 40px;
            }
        } 
        
    } 

    tfoot{
         width: 1125px;
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