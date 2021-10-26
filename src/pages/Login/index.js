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
    }

    const [formLoginRadio, setTypeUser] = useState({
        role: "",
    })

    const handleInputRadio = (e) => {
        setTypeUser({ ...formLoginRadio, [e.target.name]: e.target.value});
    }

    const errorLogin = (error) => {
        document.querySelector('#error').classList.add('error');
        document.querySelector('#error>span').textContent = `${error.error}`;

        setInterval( () => {
             document.querySelector('#error').classList.remove('error');
             document.querySelector('#error>span').style.display = "none";
        } , 3000)

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/sessions", {
                email: formLogin.email,
                password: formLogin.password,
                role: formLoginRadio.role
            });

            signIn(response.data);
            

            history.push("/teams")

        } catch (error) {
            errorLogin(error.response.data)
        }
    }
    
    return (
        <Container>
            <DivLogin>
                <div>
                    <h1>Bem vindo de volta! Por favor acesse sua conta.</h1>
                    <div id="error" >
                          <span></span>
                    </div>
                    <form onSubmit={handleSubmit}  >

                        <Input 
                            label="Informe o seu E-mail" 
                            colorLabel="white" 
                            id="email" 
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
                                        name="role" 
                                        text="Aluno" 
                                        value="ROLE_USER" 
                                />

                                <RadioButton 
                                        idInput="Escola" 
                                        forLabel="Escola"
                                        name="role" 
                                        text="Escola" 
                                        value="ROLE_ADMIN" 
                                />

                                <RadioButton 
                                        idInput="Professor" 
                                        forLabel="Professor" 
                                        name="role" 
                                        text="Professor" 
                                        value="ROLE_TEACHER" 
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
                            Escola não tem cadastro
                            <Link to="/registerSchool" > cadastre-se</Link>
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