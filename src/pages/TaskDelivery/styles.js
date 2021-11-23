import styled from "styled-components";

export const Container = styled.div`
     width: 65vw;

     margin-left: calc(50vw - 440px);
     margin-top: 20px;

     @media (max-width: 1400px){
          margin-left: calc(50vw - 253px);
     }
`
export const Task = styled.div`
     width: 100%;

     display: grid;
     grid-template-columns: 10% 50% 40%;

     background-color: white;
     border-radius: 15px 15px 0px 0px;

     padding: 20px 0px 30px 20px;

     #infos{
          margin-top: 10px;
          color: var(--color-text);

          span{
               font-size: 18px;
          }  
     }

     #taskDescription{
          max-width: 500px; 
          margin-top: 15px;
     }

     #taskAttachments{
          margin-top: 50px;

          span{
               color: var(--color-text);
               font-weight: bold;
               font-size: 18px;

          }

          #links{
               display: flex;
               flex-direction: column;

               margin-top: 15px;
               margin-left: 15px;

               a{
                    width: 370px;

                    height: 35px;
               
                    background-color: var(--color-background);

                    cursor: pointer;   
                    color: var(--text-color);
                    
                    padding: 8px 15px 8px 15px;

                    margin-top: 10px;
                     
                    >input{
                         border: 0;
                         width: 100%;

                         font-size: 16px;

                         background-color: var(--color-background);
                         cursor: pointer;   
                              
                         color: var(--text-color);
                    }
               }

          }

          #attachments{
               margin-top: 20px;
               margin-left: 15px;
          }
     }

     #taskComment{
          display: grid;
          margin-top: 10px;
          margin-right: 20px;

          #commentTitle{
               font-size: 18px;
               font-weight: bold;
               color: var(--color-text);
          }

          #comment{
               font-size: 14px;
               color: var(--color-text);

               margin-top: 20px;

               max-width: 400px;

          }
          
     }

`
export const ContainerTaskDelivery = styled.div`
     width: 100%;

     background-color: white;

     box-shadow: 0px -4px 7px 1px rgb(206 206 206 / 55%);

     padding: 20px 0px 50px 20px;

     margin-bottom: 70px;

     .titleFormatting{
          color: var(--color-text);
          font-weight: bold;
     }


     #title{
          font-size: 18px;
          margin-left: 30px;
          margin-bottom: 10px;
     }

     #linksTaskDelivery{
          >span{
               margin-left: 40px;
               font-size: 14px;
          }

          .inputs {
               display: flex;
               align-items: center;
               column-gap: 15px;

               margin-top: 15px;
               margin-left: 40px;

               >div{
                    padding: 0px;
               }
          
               input {
                    width: 435px;
                    height: 35px;

                    background-color: #EDEDED;
                    border-radius: 5px;
                    border: 0px;

                    color: var(--color-text);

                    padding-left: 10px;
               }

               img{
                    width: 20px;
                    height: 20px;
                    cursor: pointer;
               }
          }
     }

     #attachmentsTaskDelivery{
          margin-top: 20px;
          >span{
               font-size: 14px;
               margin-left: 40px;
          }
     }

     #btn{
          display: flex;
          justify-content: end;
          margin-right: 50px;
          margin-top: 20px;
     }

     #taskMessageDelivered{
          width: 80%;
          height: 70px;

          margin: 40px auto;

          display: flex;
          align-items: center;
          justify-content: center;

          background-color: var(--color-background);

          border-radius: 10px;

          font-size: 18px;
          color: var(--color-text);
     }

     #deliveredTaskLinks{
          display: grid;

          margin-left: 40px;

          >span{
               color: var(--color-text);
               font-size: 14px;
               font-weight: bold;
          }

          a{
               width: 370px;
               height: 35px;
               
               background-color: var(--color-background);
               cursor: pointer;   
               color: var(--text-color);
                    
               padding: 8px 15px 8px 15px;

               margin-top: 10px;
          }

          >a>input{
               width: 320px;

               border: 0;

               background-color: var(--color-background);

               font-size: 14px;
               cursor: pointer;
          }

     }
`
