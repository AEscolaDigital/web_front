import styled from "styled-components";

export const Container = styled.div`

    #btnCreateTeam{
        display: flex;
        justify-content: end;

        width: 1220px;
        margin: 40px auto 0px auto ;
    
        >span{
            display: flex;
            align-items: center;
            justify-content: center;
            column-gap: 20px;

            width: 200px;
            height: 40px;

            background-color: white;
            border-radius: 10px 0px;

            cursor: pointer;
        }
    }

    #titleYourTeams{
        width: 1000px;
        margin: auto;

        color: var(--color-text);
    }

    #btnModal{
        display: flex;
        column-gap: 30px;
        justify-content: end;

        margin-top: 150px;
    }

    #inputsModal{
        width: 421px;
        margin: 30px auto;

    }
`
export const ContainerUploadImage = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;

    width: 100%;
    height: 120px;

    background-color: var(--color-blue);

    margin-bottom: 30px;
    margin-top: 150px;
   
`

export const Content = styled.div`
  width: 100%;
  max-width: 400px;

  background-color: red;

  margin: 30px;
  background: #fff;
  border-radius: 4px;
`;


export const ContainerSelect = styled.div`
    width: 421px;
    transition: height 500ms;
    
    padding-top: 20px;
    padding-bottom: 20px;
    
    position: absolute;

    z-index: 10;

    box-shadow: 0px 1px 5px 0px rgb(0 0 0 / 50%);

    background-color: white;

    margin-top: -110px;

    select{
        width: 300px;
    }
`


export const Select = styled.div`
    display: flex;
    flex-direction: column;

    margin: auto;

    height: 310px;


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
            display: flex;
            align-items: center;

            height: 30px;
            padding: 5px 10px 5px 10px;
        }

        div:hover{
            background-color: #EDEDED;
            border-radius: 5px;
        }

        a{
            width: 100%;

            display: flex;
            justify-content: space-between;

            color: var(--color-text);
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

    button{
        width: 25px;
        height: 30px;

        border: 0px;

        background: url(${props => props.src});
        background-repeat: no-repeat;
        background-position: center;

        cursor: pointer;
    }

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

export const ContainerSearchDiv = styled.div`
    width: 320px;
    height: 40px;

    padding-right: 15px;
    padding-left: 15px;

    border: 2px solid var(--color-blue);

    border-radius: 5px;

    margin: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;
`

export const ContainerOption = styled.div`  
    width: 350px;
   
    transition: height 500ms;
  
    position: absolute;
    z-index: 10;

    margin-top: 20px;

    #footerSelect{
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 120%;

        border-radius: 10px;

        background-color: var(--color-blue);
        color: white;

        padding: 0px 20px 0px 20px;

        height: 40px;

        >div{
           display: flex;
           column-gap: 10px;
        }

    }

    #divImgSetasFooterSelect{
        display: flex;
        column-gap: 10px;
    }

    }

`

export const Section = styled.section`
    width: 1120px;
    margin-top: 30px;
    margin-left: calc(50vw - 500px) ;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    column-gap: 25px;
    row-gap: 30px;

`


