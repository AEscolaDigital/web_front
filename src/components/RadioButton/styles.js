import styled from "styled-components";

export const Container = styled.div`
    width: 120px;
    height: 25px;

    font-size: 12px;
    font-weight: 600;
    
    ul {
        list-style: none;
        padding: 20px;
    }

    label{
        min-width: 120px;
        display: inline-block;
        background-color: transparent;
        border: 2px solid rgba(139, 139, 139, .3);
        color: #adadad;
        border-radius: 10px;
        white-space: nowrap;
        margin: 3px 0px;
        transition: all .2s;
        padding: 8px 12px;
        cursor: pointer;
    }

    label::before {
        display: inline-block;
        font-style: normal;
        font-variant: normal;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        font-size: 12px;
        padding: 2px 6px 2px 2px;
        content: url(${props => props.srcMore});
        transition: transform .3s ease-in-out;
    }

    input:checked + label::before {
        width: 10px !important;
        height: 10px !important;
        content: url(${props => props.srcCheck});
        transform: rotate(-360deg);
        transition: transform .3s ease-in-out;
    }

    input {
        position: absolute;
        opacity: 0; 
        background-color: red;
    }     
  
    input:checked + label {
        border: 2px solid #013097;
        background-color: #5059c9;
        color: #fff;
        transition: all .2s;
    }
`
