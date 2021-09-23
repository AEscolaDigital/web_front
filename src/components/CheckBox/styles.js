import styled from "styled-components";


export const Container = styled.div`
    width: 120px;
    height: 25px;

    font-size: 12px;
    font-weight: 600;

    input[type="checkbox"] {
        position: absolute;
        opacity: 0;
    }

    label{
        padding: 8px 12px;
        cursor: pointer;
        display: inline-block;
        background-color: rgba(255, 255, 255, .9);
        border: 2px solid rgba(139, 139, 139, .3);
        color: #adadad;
        border-radius: 25px;
        white-space: nowrap;
        margin: 3px 0px;
        user-select: none;
    }

    label:before {
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    font-size: 12px;
    padding: 2px 6px 2px 2px;
    content: "\f067";
    transition: transform .3s ease-in-out;


    
    
ul>li> input[type="checkbox"]:checked+ label::before {
    content: "\f00c";
    transform: rotate(-360deg);
    transition: transform .3s ease-in-out;
}

ul>li>input[type="checkbox"]:checked+label {
    border: 2px solid #1bdbf8;
    background-color: #12bbd4;
    color: #fff;
    transition: all .2s;
}

ul>li>input[type="checkbox"] {
    position: absolute;
    opacity: 0;
}

ul>li>input[type="checkbox"]:focus+label {
    border: 2px solid #e9a1ff;
}
    
}
`