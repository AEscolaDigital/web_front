
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import memberRegister from "../../assets/memberRegistration/memberRegister.png";
import iconPerson from "../../assets/memberRegistration/iconPerson.png";
import RadioButton from "../../components/RadioButton"

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
                    <img src={memberRegister} />
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
                    <Input label="Informe o E-mail" width="400px"/>

                <DivIcon>
                    <img src={iconPerson} />
                </DivIcon>

                    <div id="radioButton">
                    <RadioButton text="Aluno" idInput="aluno" forLabel="aluno" name="genre"  />
                    <RadioButton text="Professor" idInput="professor" forLabel="professor" name="genre"  />
                    <RadioButton text="Administrador" idInput="admin" forLabel="admin" name="genre"  />
                    </div>

                    </div>
                    
                    <div id="fileExcel">
                        <div>
                            Arraste o arquivo excel aqui
                        </div>
                    </div>
                </Requisito>

                <Informacoes>
                    <div className="line"></div>

                    <div className="titles">  
                        <p>Nome</p> <p>E-mail</p> <p>Tipo de Usuário</p> <p>Adicionado em</p>
                    </div>

                    <div className="line"></div>

                    <div className="add">  
                        <p>Emerson Silva</p> <p>catapimbas@gmail.com</p> <p>aluno</p> <p>20/10/2021</p>
                    </div>

                    <div className="line"></div>

                    <div className="add">  
                        <p>Emerson Silva</p> <p>catapimbas@gmail.com</p> <p>aluno</p> <p>20/10/2021</p>
                    </div>

                    <div className="line"></div>

                    <div className="add">  
                        <p>Emerson Silva</p> <p>catapimbas@gmail.com</p> <p>aluno</p> <p>20/10/2021</p>
                    </div>

                    <div className="line"></div>

                    <div className="add">  
                        <p>Emerson Silva</p> <p>catapimbas@gmail.com</p> <p>aluno</p> <p>20/10/2021</p>
                    </div>

                    <div className="line"></div>

                    <div className="add">  
                        <p>Emerson Silva</p> <p>catapimbas@gmail.com</p> <p>aluno</p> <p>20/10/2021</p>
                    </div>

                    <div className="line"></div>

                    <div className="add">  
                        <p>Emerson Silva</p> <p>catapimbas@gmail.com</p> <p>aluno</p> <p>20/10/2021</p>
                    </div>

                    <div className="line"></div>

                    <div className="add">  
                        <p>Emerson Silva</p> <p>catapimbas@gmail.com</p> <p>aluno</p> <p>20/10/2021</p>
                    </div>

                    

                    <Footer>
                        <p>Linhas por página: 10</p> <p>1 de 2 </p> (-- --) <p> </p>
                    </Footer>
                </Informacoes>

            </Body>


        </Container>
    );
}

export default MemberRegister;