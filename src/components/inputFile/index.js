import React from "react";
import { Container } from "./styles";
import iconFile from "../../assets/inputFile/iconFile.svg"

class InputFile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            file: null
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
    }

    render() {
        return (
            <Container>
                <label for="input">
                    <img alt="Ícone de imagem" src={iconFile} />
                    <span>Selecionar arquivo</span>
                </label>
                <input type="file" id="input" onChange={this.handleChange} />
                <img src={this.state.file} />
            </Container>
        );
    }
}

export default InputFile;