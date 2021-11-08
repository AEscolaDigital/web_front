import styled from "styled-components";

export const Container = styled.div`
     
`
export const ContainerTask = styled.div`
overflow-x: hidden;
width: 930px;
height: 700px;

margin:100px 0 0 580px;

     >header{
          
          width: 100%;
          height: 90px;

          >div:nth-child(1) {
               margin-top: 50px;
               margin-left:100px;
               display: inline-block;
          }
          >div:nth-child(2){
               margin-top: 60px;
               margin-left:140px;
               
               display: inline-block;
          }
          >div:nth-child(3){
          display: inline-block;
          position:relative;
          left:230px;
          bottom: 10px;
     }
}
`
export const ContainerListTask = styled.div`

     #tarefa{

       width: 788px;
       height: 96px;
       background: white;
       border-radius: 10px;

       padding-left: 45px;
       padding-right: 40px;
       padding-bottom:40px;

       margin-left: 10px;
       margin-top: 35px;

       display: grid;
       grid-template-columns: 130px 361px 222px;
       align-items: center;
              
     }

     .Image{
     }

       .textListTask{
            color: var(--color-text);
            margin-bottom:15px;
            line-height:85px;
            font-size: 18px;
            font-weight: bold;
       }

       .dateTask{
            border: 2px solid var(--color-blue);
            border-radius: 10px;
           width:200px;
           height:80px;
            >div{
                 display: flex;
                 flex-direction: column;
                 padding: 10px 20px 14px 20px;

                 >span{
                      color: var(--color-text);
                      font-size: 18px;
                      font-weight: bold;

                 }
            }
       }
`


