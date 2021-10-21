
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import memberView from "../../assets/memberView/memberView.png";
import arrowLeft from "../../assets/memberView/vectorLeft.svg";
import arrowRight from "../../assets/memberView/vectorRight.svg";
import bin from "../../assets/memberView/lixeira.svg";
import search from "../../assets/memberView/Search.svg";
import { Container, Cabeçalho, CabeçalhoLeft, CabeçalhoRight, Body, Page, Requisito, Informacoes, DivIcon, Footer } from "./styles";
import Input from "../../components/Input";


function MemberRegister() {
    return (
        <Container>
            <Header />
            <Nav />

            <Cabeçalho>
                <CabeçalhoLeft>
                    <div>
                        <h2> Adicionar membros e visualização membros</h2>
                        <h4>Nome da Empresa</h4>
                    </div>

                    <p>Instruções para adicionar membro</p>

                    <ol>Existe duas opções para adicionar membro

                        <li>adicionar o e-mail do usuário</li>
                        <li>enviar um arquivo excel conforme o exemplo, <a href="">aqui</a></li>

                    </ol>

                </CabeçalhoLeft>

                <CabeçalhoRight>
                    <img src={memberView} />
                </CabeçalhoRight>
            </Cabeçalho>

            <Body>
                <Page>
                    <button>Adicionar membros</button>

                    <button>Visualização de membros</button>

                    <div id="linha"></div>
                </Page>

                <Requisito>
                    <div>
                        <img src={search} />
                        <Input label="Informe o E-mail" width="400px" />
                    </div>

                </Requisito>

                <Informacoes>
                    <div className="line"></div>

                    <div className="titles">
                        <p>Nome</p> <p>E-mail</p> <p>Tipo de Usuário</p> <p>Adicionado em</p>
                    </div>

                    <div className="line"></div>

                    <div className="add">
                        <input type="checkbox" /> <p>Emerson Silva</p> <p>catapimbas@gmail.com</p> <p>aluno</p> <p>20/10/2021</p> <img src={bin} />
                    </div>

                    <div className="line"></div>

                    <div className="add">
                        <input type="checkbox" /> <p>Emerson Silva</p> <p>catapimbas@gmail.com</p> <p>aluno</p> <p>20/10/2021</p> <img src={bin} />
                    </div>

                    <div className="line"></div>

                    <div className="add">
                        <input type="checkbox" />    <p>Emerson Silva</p> <p>catapimbas@gmail.com</p> <p>aluno</p> <p>20/10/2021</p> <img src={bin} />
                    </div>

                    <div className="line"></div>

                    <div className="add">
                        <input type="checkbox" />    <p>Emerson Silva</p> <p>catapimbas@gmail.com</p> <p>aluno</p> <p>20/10/2021</p> <img src={bin} />
                    </div>

                    <div className="line"></div>

                    <div className="add">
                        <input type="checkbox" />    <p>Emerson Silva</p> <p>catapimbas@gmail.com</p> <p>aluno</p> <p>20/10/2021</p> <img src={bin} />
                    </div>

                    <div className="line"></div>

                    <div className="add">
                        <input type="checkbox" />    <p>Emerson Silva</p> <p>catapimbas@gmail.com</p> <p>aluno</p> <p>20/10/2021</p> <img src={bin} />
                    </div>

                    <div className="line"></div>

                    <div className="add">
                        <input type="checkbox" />    <p>Emerson Silva</p> <p>catapimbas@gmail.com</p> <p>aluno</p> <p>20/10/2021</p> <img src={bin} />
                    </div>



                    <Footer>
                        <p>Linhas por página: 10</p> <p>2 de 2 </p> <img src={arrowLeft} /> <img src={arrowRight} /> <p> </p>
                    </Footer>
                </Informacoes>

            </Body>


        </Container>
    );
}

export default MemberRegister;