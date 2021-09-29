import { DivHeader, DivValidationLeft, } from "./styles";
import Modal from "../../components/Modal";
import Input from "../../components/Input";

function ValidationResponsible() {
    return (
        <Modal width="1100px" height="800px">
            <DivHeader>
                <h1>Validação do Responsável</h1>

                <img src=""/>
            </DivHeader>

            <DivValidationLeft>
                <Input label="Nome Completo"/>
                <Input label="Nome Completo"/>
                <Input label="Nome Completo"/>
                <Input label="Nome Completo"/>
                <Input label="Nome Completo"/>

                <div>
                    <inputFile/>
                   
                </div>
            </DivValidationLeft>
        </Modal>

    );
}

export default ValidationResponsible;