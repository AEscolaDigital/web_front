import BtnCancel from "../../components/BtnCancel";
import BtnSubmit from "../../components/BtnSubmit";
import Input from "../../components/Input";
import { Container, DivHeader, DivImage, DivRegister, DivBtn, TypeUser } from "./styles";
import imageRegister from "../../assets/register/imageRegister.svg";
import { Link } from "react-router-dom";
import RadioButton from "../../components/RadioButton";
import { useCallback, useState } from "react";

function Register() {

    const [usuario, setUsuario] = useState();

    const handleChange = useCallback((e) =>  {
        setUsuario({
            ...usuario,
            [e.currentTarget.name]: e.currentTarget.value,
        });

    }, [usuario]);

    return (

        <Container>

            <DivHeader>
                <h1>Seja Bem-Vindo!</h1>
                <h1>Preencha todos os dados abaixo, para se cadastrar na plataforma. </h1>
            </DivHeader>

            <DivRegister>

                <Input
                    label="Informe seu Nome Completo"
                />
                <Input
                    label="Informe um e-mail"
                    type="email"
                />
                <Input
                    label="Informe uma senha"
                    width="280px"
                    type="password"
                />
                <Input  
                    onChange={handleChange}
                    label="Informe seu Telefone"
                    pattern="\(?\d{2}\) ?9?\d{4}-?\d{4}"
                    maxlength="15"
                    mask="phone"
                />
                <Input
                    label="Informe a data de nascimento"
                    type="date"
                    width="280px" />


                <TypeUser>
                    <span>O que você é ?</span>

                    <div>
                        <RadioButton
                            idInput="student"
                            forLabel="student"
                            name="typeUser"
                            text="Aluno"
                            value="student"
                        />

                        <RadioButton
                            idInput="employee"
                            forLabel="employee"
                            name="typeUser"
                            text="Funcionário"
                            value="employee"
                        />

                        <RadioButton
                            idInput="responsible"
                            forLabel="responsible"
                            name="typeUser"
                            text="Responsável"
                            value="responsible"
                        />
                    </div>
                </TypeUser>

                <DivBtn>
                    <Link to="/" > <BtnCancel text="Voltar" /> </Link>
                    <Link to="/register/responsible" >
                         <BtnSubmit onClick={() => console.log(usuario)} text="Próximo" /> 
                    </Link>
                </DivBtn>
            </DivRegister>

            <DivImage>
                <img src={imageRegister} />
            </DivImage>
        </Container>

    );
}

export default Register;