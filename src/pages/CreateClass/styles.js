import styled from "styled-components";

export const Container = styled.div`
  position:fixed;
  
`

export const DivTurma = styled.div`

    >div{
        width:500px;
        height:180px;
        margin:20vh 0 0 40vh;

    >div{
       margin-left:-15px;
    }

    >div:nth-child(3){
      margin:50px 0 0 20px;
    }
}
`
export const DivMembro = styled.div`
    
  >div{
    width:700px;
    height:350px;
    margin:150px 0 0 260px;

    >div{
     padding-left:110px; 
     display:flex;

     >div{
       margin-left:20px;
     }
   }

    >.membro{
        padding-left:70px;
       
        >.lupa{
         position:relative;
         top:33px;
        }
    }   
  }

`

export const DivImage = styled.div`
 
    div{
      position: relative;
      left:110vh;
      bottom:85vh;
    }

      >div:nth-child(2){
        margin:100px 0 0 120px;
        display:inline-block;

      }
      >div:nth-child(3){
        margin-left:80px;
        margin-bottom:150px;
        display:inline-block;
      }
`

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
         justify-content: end;

         background-color: var(--color-blue);
         color: white;

         border-radius: 10px;

        >div{
            display: flex;
            column-gap: 40px;

            font-size: 12px;
            font-weight: 600;

            margin-right: 50px;

            #divImgSetas>img{
                margin-left: 45px;
            }
        } 
    }

`