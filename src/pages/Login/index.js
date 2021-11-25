import imageLogin from "../../assets/login/undraw_secure_login_pdn4.svg"
import imageHttpError503 from "../../assets/alert/imageHttpError503.svg"

import Input from "../../components/Input";
import BtnSubmit from "../../components/BtnSubmit";
import { Container, DivImage, DivLogin, RoleUser } from "./styles";
import { useHistory, Link } from "react-router-dom";
import RadioButton from "../../components/RadioButton";
import { useState } from "react";
import { api } from "../../services/api";
import { signIn } from "../../services/security"
import Swal from 'sweetalert2'

function Login() {

    const history = useHistory();

    const [formLogin, setFormLogin] = useState({
        email: "",
        password: "",
    })

    const handleInput = (e) => {
        setFormLogin({ ...formLogin, [e.target.id]: e.target.value });
    }

    const [formLoginRadio, setRoleUser] = useState({
        role: "",
    })

    const handleInputRadio = (e) => {
        setRoleUser({ ...formLoginRadio, [e.target.name]: e.target.value });
    }

    const errorLogin = (error) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${error.error}`,
            footer: `<a href=""> Esqueceu a senha ?</a> `
        })
    }

    const httpError503 = () => {
        Swal.fire({
            html: `
                   <img style="width: 300px; height: 250px; margin-top: 20px;" src=${imageHttpError503} />
                   </br>
                   <span>Error 503, serviço indisponível</span>
                   </br></br>
                   <span>Tente novamente mais tarde!</span>
                `,
        })
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

            if (error.response === undefined) {
                httpError503()

            } else {
                errorLogin(error.response.data)
            }
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
                            autocomplete="off"
                            handler={handleInput}
                        />

                        <Input
                            label="Informe sua senha"
                            type="password"
                            id="password"
                            autocomplete="off"
                            colorLabel="white"
                            handler={handleInput}
                        />

                        <RoleUser>
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
                        </RoleUser>
                        <div id="ForgotPassword" >
                            <Link to="/" >Esqueceu a senha?</Link>
                        </div>
                        <div id="btnSubmit" >
                            <BtnSubmit text="Ingressar" />
                        </div>
                    </form>

                    <div id="register" >
                        <span>
                            Escola não tem cadastro, <Link to="/registerSchool">cadastre-se</Link>
                        </span>
                    </div>

                </div>
            </DivLogin>

            <DivImage>
                <img src={imageLogin} alt="Imagem representando o login, na plataforma" />
            </DivImage>

        </Container>
    );
}

export default Login;