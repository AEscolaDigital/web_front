
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import { Container, Cabeçalho, CabeçalhoLeft, CabeçalhoRight} from "./styles";


function MemberRegister() {
    return (
        <Container>
            <Header/>
            <Nav/>

            <Cabeçalho>
                <CabeçalhoLeft>
                    <h2> Adicionar membros e visualização membros</h2>
                    <h4>Nome da Empresa</h4>

                    <p>Instruções para adicionar membro</p>

                    <p>Existe duas opções para adicionar membro</p>

                    <p>1. adicionar o e-mail do usuário</p>

                    <p>2. enviar um arquivo excel conforme o exemplo, <a href="">aqui</a></p>

                </CabeçalhoLeft>

                <CabeçalhoRight>
                    <img src=""/>
                </CabeçalhoRight>
            </Cabeçalho>


        </Container>
    );
}

export default MemberRegister;