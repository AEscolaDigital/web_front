import BtnCancel from "../../components/BtnCancel";
import BtnSubmit from "../../components/BtnSubmit";
import Input from "../../components/Input";
import { Container, DivHeader, DivImage, DivRegister, DivBtn } from "./styles";
import imageRegister from "../../assets/register/imageRegister.svg";
import { Link } from "react-router-dom";

function Register() {
    return (
        <Container>
            <DivHeader>
                <h1>Seja Bem-Vindo!</h1>
                <h1>Preencha todos os dados abaixo, para se cadastrar na plataforma. </h1>
            </DivHeader>

            <DivRegister>

                <Input label="Informe seu Nome Completo" />
                <Input label="Informe um e-mail" />
                <Input label="Informe uma senha" width="280px" />
                <Input label="Informe seu Telefone" />
                <Input label="Informe a data de nascimento" width="280px" />


                <div>
                    <p> Selecione : </p>
                    <input type="radio" name="alunosProfessores" />
                    <label for="alunosProfessores">Alunos</label>

                    <input type="radio" name="alunosProfessores" />
                    <label for="alunosProfessores">Professor</label>
                </div>

                <DivBtn>
                    <Link to="/" > <BtnCancel text="Voltar" /> </Link>  
                    <Link to="/register/responsible" > <BtnSubmit text="Próximo" /> </Link> 
                </DivBtn>
            </DivRegister>

            <DivImage>
                <img src={imageRegister} />
            </DivImage>
        </Container>


    );
}

export default Register;