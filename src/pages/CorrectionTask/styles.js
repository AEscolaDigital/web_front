import styled from "styled-components";

export const Container = styled.div`
     width: 65vw;

     margin-left: calc(50vw - 595px);
     margin-top: 20px;

     @media (max-width: 1400px){
          margin-left: calc(50vw - 253px);
     }
`
export const Task = styled.div`
     width: 100%;

     display: grid;
     grid-template-columns: 10% 50%;

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
                    height: 35px;
               
                    background-color: #EDEDED;
                    cursor: pointer;   
                    color: var(--text-color);
                    
                    padding: 8px 15px 8px 15px;

                    margin-top: 10px;

               }

          }
     }

`
export const TaskDelivery = styled.div`
     width: 100%;

     background-color: white;

     box-shadow: 0px -4px 7px 1px rgb(206 206 206 / 55%);

     padding: 20px 0px 50px 20px;

     margin-bottom: 70px;

     #infosTaskDelivery{
          display: flex;
          div{
               display: grid;
               padding-left: 15px;

               color: var(--color-text);

               #name{
                    font-size: 18px;
               }

               #date{
                    font-weight: bolder;
               }
          }
     }

     #taskAttachmentsUser{
        
          width: 380px;
          #linksUser{
               display: flex;
               flex-direction: column;

               margin-top: 15px;
               margin-left: 15px;

               a{
                    height: 35px;
               
                    background-color: #EDEDED;
                    cursor: pointer;   
                    color: var(--text-color);
                    
                    padding: 8px 15px 8px 15px;

                    margin-top: 10px;

               }
          }
     }

`

export const TaskComment = styled.form`
     display: grid;
  
     margin-top: -70px;
     margin-left: 15px;

     #spots{
          display: grid;
          justify-content: end;
          margin-right: 20px;
     }

     label{
          color: var(--color-text);
          font-weight: bold;

          margin-bottom: 10px;
          margin-top: 15px;
     }
      
     textarea{
          width: 600px;
          border-radius: 10px;
          border: 2px solid var(--color-blue);
     }

     #buttons{
          display: flex;
          justify-content: end;

          margin-top: 20px;
          margin-right: 50px;

          button{
               margin-left: 15px;
          }

          button:nth-child(1){
               background-color: white;
               color: black;
               border: 1px solid var(--color-blue);

          }
     }
`
