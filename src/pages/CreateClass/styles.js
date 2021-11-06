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

    #select{
        margin-top: 20px;
        margin-left: -10px;
    }
`



export const ContainerSelect = styled.div`
    width: 350px;
    transition: height 500ms;
    
    padding-top: 20px;
    padding-bottom: 20px;


    position: absolute;
    z-index: 10;

    box-shadow: 0px 1px 5px 0px rgb(0 0 0 / 50%);


    background-color: white;
   
    select{
        width: 300px;
    }
`

export const ContainerSearchDiv = styled.div`
    width: 320px;
    height: 40px;

    padding-right: 10px;

    border: 2px solid var(--color-blue);

    border-radius: 5px;

    margin: auto;

    display: flex;
    align-items: center;
    justify-content: end;
    column-gap: 10px;

    cursor: pointer;
`

export const ContainerOption = styled.div`  
    width: 350px;
   
    transition: height 500ms;
  
    position: absolute;
    z-index: 10;

    background-color: #F7F8FC;

    margin-top: 20px;

`

export const ContainerSearch = styled.div`
    display: flex;
    justify-content: center;

    margin-top: 20px;

     >input{
        width: 300px;
        height: 35px;

        border: 1px solid var(--color-blue);
        border-radius: 5px;

        padding-left: 10px;

     }

`
export const Select = styled.div`
    display: flex;
    flex-direction: column;

    margin: auto;

    hr{
        border: 1px solid var(--color-blue); 
        margin: 0px 20px 0px 20px;
    }

    >span{
        margin: 20px 0px 15px 20px;

        color: var(--color-text); 
        font-size: 16px;
    }

    #option{
        display: flex;
        flex-direction: column;

        color: var(--color-text);

        div{

            height: 30px;
            padding: 5px 10px 5px 10px;
        }

        div:hover{
            background-color: #EDEDED;
            border-radius: 5px;
        }
    }

    div{
        display: flex;
        justify-content: space-between;

        padding-right: 10px;
        padding-left: 10px;

        margin-top: 10px;

        font-size: 16px;
        /* color: var(--color-text); */

        cursor: pointer;

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
        grid-template-columns: 100px 200px 200px 300px;

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
            grid-template-columns: 100px 200px 200px 300px;

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