

import Input from "../../components/Input";
import { Container, DivHeader, DivRegister } from "./styles";

function RegisterResponsible() {
    return(
        <Container>
            <DivHeader>
                <h1>Dados do Responsável</h1>

                <h1>Preencha todos os dados abaixo, para se cadastrar na plataforma.</h1>
            </DivHeader>

            <DivRegister>
                <Input label="Nome Completo"/>
                <Input label="Informe o seu número do RG"/>
                <Input label="Nome Completo"/>
                <Input label="Nome Completo"/>
                <Input label="Nome Completo"/>
                <Input label="Nome Completo"/>
                <Input label="Nome Completo"/>
                <Input label="Nome Completo"/>
               
            </DivRegister>
        </Container>
    );
}

export default RegisterResponsible;