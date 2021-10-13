import BtnCancel from "../../components/BtnCancel";
import BtnSubmit from "../../components/BtnSubmit";
import Input from "../../components/Input";
import { Container, DivHeader, DivImage, FormContainer, DivBtn, TypeUser } from "./styles";
import imageRegister from "../../assets/register/imageRegister.svg";
import { useHistory, Link } from "react-router-dom";
import RadioButton from "../../components/RadioButton";
import { useState } from "react";


function Register() {

    const history = useHistory();

    const [typeUser, setTypeUser] = useState({
        typeUser: "",
    })

    const handleInputRadio = (e) => {
        setTypeUser({ ...typeUser, [e.target.name]: e.target.value});
    }

    const [formRegister, setFormRegister] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        birthDate: ""
    })

    const handleInput = (e) => {
        setFormRegister({ ...formRegister, [e.target.id]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            history.push({
                pathname: `/register/${typeUser.typeUser}`,
                state:{
                    name: formRegister.name, 
                    email: formRegister.email,
                    password: formRegister.password,
                    phone: formRegister.phone,
                    birthDate: formRegister.birthDate
            }})
        } catch (error) {
            console.log(error);
        }
    }

    return (

        <Container>

            <DivHeader>
                <h1>Seja Bem-Vindo!</h1>
                <h1>Preencha todos os dados abaixo, para se cadastrar na plataforma. </h1>
            </DivHeader>

            <FormContainer onSubmit={handleSubmit} >

                <Input
                    id="name"
                    handler={handleInput}
                    label="Informe seu Nome Completo"
                />
                <Input
                    id="email"
                    handler={handleInput}
                    label="Informe um e-mail"
                    type="email"
                />
                <Input
                    id="password"
                    handler={handleInput}
                    label="Informe uma senha"
                    width="280px"
                    type="password"
                />
                <Input  
                    id="phone"
                    handler={handleInput}
                    label="Informe seu Telefone"
                    pattern="\(?\d{2}\) ?9?\d{4}-?\d{4}"
                    maxlength="15"
                    mask="phone"
                />
                <Input
                    id="birthDate"
                    handler={handleInput}
                    label="Informe a data de nascimento"
                    type="date"
                    width="280px" />


                <TypeUser>
                    <span>O que você é ?</span>

                    <div onChange={handleInputRadio} >
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
                    <BtnSubmit text="Próximo" /> 
                </DivBtn>
            </FormContainer>

            <DivImage>
                <img src={imageRegister} />
            </DivImage>
        </Container>

    );
}

export default Register;