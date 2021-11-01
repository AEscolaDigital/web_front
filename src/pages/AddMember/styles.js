import styled from "styled-components";

export const Container = styled.div`
   width: 1440px;
   padding-bottom: 30px;
`

export const ContainerModal = styled.div`
    margin-top: 30px;
    text-align: center;

    >span {
        color: var(--color-text);
        font-size: 22px;      
    }


    >div{
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }

    #fileExample{

        display: flex;
        flex-direction: column;

        color: var(--color-text);
        font-size: 18px;

        img{
            width: 25px;
            height: 30px;
        }
    }
     
`

export const Cabeçalho = styled.div`
    width: inherit;
    height: 380px;

    margin-top: 50px;
    margin-left: 280px;

    border-radius: 20px 20px 0px 0px;
    background-color: #fff;

    display: flex;
    color: var(--color-text);
`
export const CabeçalhoLeft = styled.div`
   
   >div{
        margin-top: 25px;
        margin-left: 150px;
        line-height: 30px;
        text-align: center;
   }

   >p{
        text-align: center;
        padding: 20px 0px 20px 140px;  
        
        font-size: 20px;
   }

   >ol{
        padding-left: 60px;
        line-height: 25px;
   }

   >ol >li{
       margin-left: 60px;
       text-decoration: none;
   }

`

export const CabeçalhoRight = styled.div`
    align-items: center;
    margin-left: 200px;
    display: flex;
`

export const Body = styled.div`

    width: inherit;
    height: 1220px;

    margin-left: 280px;
    margin-bottom: 100px;

    background-color: #fff;
    box-shadow: 3px -6px 13px -2px rgba(0,0,0,0.35);
`

export const Page = styled.div`
    width: inherit;
    padding-top: 20px; 

    >button{
        height: 30px;
        width: 250px;
        border: none;
        cursor: pointer;
        margin: 0px 200px 0px 250px;
        background-color: #fff;
        color: var(--color-text);
        font-size: 16px;
        font-weight: 600;
    }

    >button:hover{
        cursor: pointer;
        border-bottom: 2px solid var(--color-placeholder);
        
    }

    >div{
        border: 1px solid var(--color-placeholder);
        margin-left: 80px;
        margin-right: 80px; 
    }

`

export const ContainerAddMember = styled.div`
    display: flex;

    margin-top: 20px;
    margin-left: 130px;
    margin-bottom: 50px;

    justify-content: space-around;
    align-items: center;
    

    >div{
        width: 400px;
        height: 100px;  
    }

    #btnSubmit{
        display: flex;
        justify-content: end;

        width: 100%;
        margin-top:50px;

    }

    #radioButton{
        display: flex;
        column-gap: 10px;
        margin-top: -20px;
    }
`

export const UploadCSV = styled.div`
  height: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--color-blue);
`;

export const Content = styled.div`
  width: 100%;
  max-width: 400px;

  background-color: red;

  margin: 30px;
  background: #fff;
  border-radius: 4px;
`;

export const ContainerTable = styled.table`
    width: 1120px;
    margin: auto;

    #trTh{
        display: grid;
        grid-template-columns: 300px 400px 300px 300px;

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

        width: 1120px;
        margin: auto;

        tr{
            display: grid;
            align-items: center;
            grid-template-columns: 300px 400px 300px 300px;

            height: 60px;

            text-align: start;

            padding-left: 60px;

            font-size: 16px;
            font-weight: bolder;
            color: var(--color-text);

            border-bottom:  2px solid var(--color-blue);
        }
        
    }

    tfoot{
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