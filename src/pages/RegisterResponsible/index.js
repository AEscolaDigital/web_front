

import BtnCancel from "../../components/BtnCancel";
import BtnSubmit from "../../components/BtnSubmit";
import Input from "../../components/Input";
import InputFile from "../../components/inputFile";
import resgisterResponsible from "../../assets/registerResponsible/imageResponsible.svg"

import { Container, DivHeader, DivRegister, DivImage, DivBtn } from "./styles";

function RegisterResponsible() {
    return(
        <Container>
            <DivHeader>
                <h1>Dados do Responsável</h1>

                <h1>Preencha todos os dados abaixo, para se cadastrar na plataforma.</h1>
            </DivHeader>

            <DivRegister>
                <Input label="Nome Completo" width="600px"/>
                <div>
                    <Input label="Informe o seu RG" width="300px"/>
                    <InputFile  />
                </div>
              
                <div>   
                    <Input label="Informe o seu CPF" width="300px"/>
                    <InputFile />
                </div>
                <Input label="Data de Nascimento" width="300px"/>
                <Input label="Informe seu CEP" width=" 450px"/>
                <Input label="Informe a rua onde reside" width="450px"/>
                
                <div>
                    <Input label="Informe o Bairro" width="250px"/>
                    <Input label="Informe o Número" width="200px"/>
                </div>

                
                
                <DivBtn>
                    <BtnCancel text="Cancelar" />
                    <BtnSubmit text="Concluir" />
                </DivBtn>
                
            </DivRegister>

            <DivImage>
                <img src={resgisterResponsible}/>
            </DivImage>
        </Container>
    );
}

export default RegisterResponsible;