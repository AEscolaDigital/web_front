import styled from "styled-components";

export const Container = styled.nav`
   position: fixed;
   left: 0px;

   width: 85px;
   height: calc(100vh - 50px);

   background-image: var(--color-blue-gradient);

   border-radius: 0px 30px 30px 30px;

   transition: all 500ms; 

   color: var(--color-background);
   font-weight: 600;


    >div {
         
        padding-left: 30px;

        a{
            display: flex;
            align-items: center;
            justify-self: center;

                   
            height: 40px;
            margin-top: 35px;

            color: white;

            >p {
                margin-left: 35px;
                color: var(--color-background);
            }
        }
        
        >img {
            width: 24px;
            height: 24px;
            margin-left: 30px;
        }

     
    }

    > div:hover{
        background-color: var(--color-houver);
        cursor: pointer;
    }

    :hover{
        width: 185px;
        color: white;
    }
    
`;