import imageLogin from "../../assets/login/undraw_secure_login_pdn4.svg"
import Input from "../../components/Input";
import BtnSubmit from "../../components/BtnSubmit";
import { Container, DivImage, DivLogin, TypeUser } from "./styles";
import { useHistory, Link } from "react-router-dom";
import RadioButton from "../../components/RadioButton";
import { useState } from "react";
import { api } from "../../services/api";
import { signIn } from "../../services/security"


function Login() {

    const history = useHistory();

    const [formLogin, setFormLogin] = useState({
        email: "",
        password: "",
    })

    const handleInput = (e) => {
        setFormLogin({ ...formLogin, [e.target.id]: e.target.value });
        console.log(e.target.id);
    }

    const [formLoginRadio, setTypeUser] = useState({
        typeUser: "",
    })

    const handleInputRadio = (e) => {
        setTypeUser({ ...formLoginRadio, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/sessions", {
                email: formLogin.email,
                password: formLogin.password,
                typeUser: formLoginRadio.typeUser
            });

            signIn(response.data);
            
            history.push("/teams")

        } catch (error) {
            console.log(error.response.data);
        }
    }
    
    return (
        <Container>
            <DivLogin>
                <div>
                    <h1>Bem vindo de volta! Por favor acesse sua conta.</h1>

                    <form onSubmit={handleSubmit}  >

                        <Input 
                            label="Informe o seu E-mail" 
                            colorLabel="white" id="email" 
                            handler={handleInput} 
                        />

                        <Input 
                            label="Informe sua senha" 
                            type="password" 
                            id="password" 
                            colorLabel="white" 
                            handler={handleInput} 
                        />

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
                        <div id="ForgotPassword" >
                            <a>Esqueceu a senha?</a>
                        </div>
                        <div id="btnSubmit" >
                            <BtnSubmit text="Entrar" />
                        </div>
                    </form>

                    <div id="register" >
                        <span> 
                            Não tem cadastro? 
                            <Link to="/register" >cadastre-se</Link>
                        </span>
                    </div>

                </div>
            </DivLogin>

            <DivImage>
                <img src={imageLogin} />
            </DivImage>
            
        </Container>
    );
}

export default Login;