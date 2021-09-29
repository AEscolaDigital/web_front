import styled from "styled-components";

export const Container = styled.div`
    label {

        width: 240px;
        height: 30px;

        border-radius: 10px 0px;
        cursor: pointer;
        
        display: flex;
        align-items: center;
        column-gap: 15px;

        padding-left: 30px;

        border: 2px solid var(--color-blue);

        font-size: 12px;
        color: #A8A8A8;
        font-weight: 600;

    }

    input[type='file']{
        display: none;
    } 

`;