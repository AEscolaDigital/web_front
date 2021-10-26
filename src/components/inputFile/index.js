import React from "react";
import { useRef } from "react";
import { Container } from "./styles";
import iconFile from "../../assets/inputFile/iconFile.svg"

function InputFile({forLabel, idInput}) {
    
    const handleImage = () => {
       const label = document.querySelector('#label');
       const span = document.querySelector('#span');

       label.style.background = "#5059c9";
       span.style.color = "#FFFFFF";
       span.innerHTML = "Arquivo selecionado";

    }

    return (
        <Container >
            <label for={forLabel} id="label" >
                <img alt="Ícone de imagem" src={iconFile} />
                <span id="span" >Selecione um arquivo</span>
            </label>
            <input type="file" id={idInput} onChange={handleImage} />

        </Container>
    );

}

export default InputFile;