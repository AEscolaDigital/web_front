import {
    Container,
    Select,
    Input,
    ContainerSearch,
    ContainerOption
} from "./styles"

import cancel from "../../assets/select/cancel.svg"
import downArrow from "../../assets/select/downArrow.svg"
import iconDelete from "../../assets/select/delete.svg"


import { useEffect, useState } from "react";


function RadioButton() {

    const [toogle, setToogle] = useState(false);
    const [value, setOpenClose] = useState('none');

    useEffect(() => {
        setOpenClose(() => toogle ? 'none' : 'block');
    }, [toogle]);

    return (
        <Container>
            <Input>
                <img src={cancel} alt="Icone de cancelar" />
                <img src={downArrow} onClick={e => setToogle(state => !state)} alt="Icone seta para baixo" />
            </Input>
            <ContainerOption style={{
                display: value,
            }} >
                <ContainerSearch>
                    <input placeholder="Pesquisar" ></input>
                </ContainerSearch>
                <Select>
                    <span>Selecione alguma turma</span>
                    <hr />
                    <div id="option" >
                        <div>
                            <span>Português</span>
                             <img src={iconDelete}/>
                        </div>
                        <div>
                            <span>Matemática</span>
                            <img src={iconDelete}/>
                        </div>
                        <div>
                            <span>Biologia</span>
                            <img src={iconDelete}/>
                        </div>
                    </div>
        
            </Select>
        </ContainerOption>

        </Container >
    );
}

export default RadioButton;