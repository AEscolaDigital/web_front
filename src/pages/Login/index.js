import imageLogin from "../../assets/login/undraw_secure_login_pdn4.svg"
import Input from "../../components/Input";
import BtnSubmit from "../../components/BtnSubmit";
import { Container, DivImage, DivLogin } from "./styles";
import { Link } from "react-router-dom";


function Login() {
    return (
        <Container>
            <DivLogin>
                <div>
                    <h1>Bem vindo de volta! Por favor acesse sua conta.</h1>
                    <div>
                        <Input label="Informe o seu E-mail" colorLabel="white" />
                        <Input label="Informe sua senha" type="password" colorLabel="white" />
                        <a>Esqueceu a senha?</a>
                    </div>
                    <div>
                        <BtnSubmit text="Entrar" />
                    </div>
                    <div id="register" >
                        <span>Não tem cadastro? <Link to="/register" >cadastre-se</Link> </span>
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