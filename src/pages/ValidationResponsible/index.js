import { Container, DivHeader, DivValidationLeft, DivValidationRight, DivBtn, DivInputFile } from "./styles";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import InputFile from "../../components/inputFile";
import BtnCancel from "../../components/BtnCancel";
import BtnSubmit from "../../components/BtnSubmit";
import iconX from "../../assets/validationResponsible/iconX.svg"

function ValidationResponsible() {
    return (
        <Modal width="1100px" height="850px">
            <Container>
            <img src={iconX} />
                <DivHeader>
                    <h1>Validação do Responsável</h1>

                   
                </DivHeader>

                <DivValidationLeft>
                    <Input label="Nome Usuário" width="400px" />
                    <Input label="Email Usuário" width="400px" />
                    <Input label="Telefone Usuário" width="400px" />
                    <Input label="Data de Nascimento" width="400px" />
                    <Input label="Informe o RG" width="400px" />

                    <DivInputFile>
                        <InputFile />
                    </DivInputFile>

                </DivValidationLeft>



                <DivValidationRight>
                    <Input label="Informe o CPF" width="400px" />

                <DivInputFile>
                    <InputFile />
                </DivInputFile>


                    <Input label="Informe seu CEP" width="400px" />
                    <Input label="Informe a rua" width="400px" />

                <div>
                    <Input label="Informe o bairro" width="245px" />
                    <Input label="Número" width="125px" />
                </div>

                <DivInputFile>
                    <InputFile />
                </DivInputFile>


                </DivValidationRight>


            </Container>
            <DivBtn>
                <BtnCancel text="Inválido" />
                <BtnSubmit text="Validar" />
            </DivBtn>
        </Modal>

    );
}

export default ValidationResponsible;