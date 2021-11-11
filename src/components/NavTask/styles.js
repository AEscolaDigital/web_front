import styled from "styled-components";

export const Container = styled.nav`
    position: fixed; 
    left: 0px;
    top: 70px;

    z-index: 1;

    width: 450px;
    height: calc(100vh - 50px);

    padding-top: 40px;

    background-color: white;

    #containerImage{
        width: 170px;
        height: 155px;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: rgba(226, 228, 242, 0.7);

        border-radius: 100%;

        margin-left: 100px;
        margin-bottom: 45px;

        img{
            width: 140px;
            height: 145px;
            
        }
    }

    #title{
        color: var(--color-text) ;
        font-size: 24px;
        font-weight: bold;
        margin-left: 100px;

    }
`;

export const ContainerClass = styled.div`
    overflow-y: auto;
    max-height: 450px;
    padding-bottom: 300px;

    @media (min-width: 1700px) {
        max-height: 550px;

    }
    div {
        width: 100%;
        height: 42px;

        display: flex;
        justify-content: start;
        align-items: center;

        margin-top: 45px;
    
        background-color: rgba(226, 228, 242, 0.7);
        span{
            font-size: 18px;
            color: var(--color-text);
            font-weight: bold;
            margin-left: 100px;
        }
    }

    ul{
        margin-top: 20px;
        margin-left: 110px;

        color: var(--color-text);
        font-weight: 600;
        list-style: none;

         
        li{
            margin-top: 25px;
            
        }
    }

`;