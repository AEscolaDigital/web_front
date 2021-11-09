import { Container, ContainerTable } from "./styles"
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import NavTask from "../../components/NavTask";
import veia from "../../assets/classesList/veia.svg";
import chaaat from "../../assets/classesList/chaaat.svg"
import lixo from "../../assets/classesList/lixo.svg"

function ClassesList() {

    return (
        <Container>
            <Header />
            <Nav />
            <NavTask />

            <div>
                <div>
                    <h3>Turma Matemática 1º Ano manhã</h3>
                </div>
                <div>
                    <h3>Não concluídos</h3>
                </div>
                <div>
                    <h3>Concluídos</h3>
                </div>
                <hr />

                <div>
                    <div>
                        <div>
                            <h3>Nome</h3>
                        </div>
                        <div>
                            <h3>Chat</h3>
                        </div>
                        <div>
                            <h3>Excluir </h3>
                        </div>
                    </div>
                    <ContainerTable>
                        <tbody>
                            <tr>
                                <td><img alt="Foto de perfil" src={veia}/></td>
                                <td>Guilherme Rodrigues</td>
                                <td><img src={chaaat}/></td>
                                <td><img src={lixo} /></td>
                            </tr>
                            <tr>
                                <td><img alt="Foto de perfil" src={veia}/></td>
                                <td>Gustavo Marques</td>
                                <td><img src={chaaat}/></td>
                                <td><img src={lixo} /></td>
                            </tr>
                            <tr>
                                <td><img alt="Foto de perfil" src={veia}/></td>
                                <td>Samuel Goulart</td>
                                <td><img src={chaaat}/></td>
                                <td><img src={lixo} /></td>
                            </tr>
                            <tr>
                                <td><img alt="Foto de perfil" src={veia}/></td>
                                <td>Emerson Silva</td>
                                <td><img src={chaaat}/></td>
                                <td><img src={lixo} /></td>
                            </tr>
                            <tr>
                                <td><img alt="Foto de perfil" src={veia}/></td>
                                <td>Antônio Ailton</td>
                                <td><img src={chaaat}/></td>
                                <td><img src={lixo} /></td>
                         </tr>
                            
                        </tbody>
                    </ContainerTable>
                </div>
            </div>

        </Container>
    );
}

export default ClassesList;