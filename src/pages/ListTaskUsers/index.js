    import { Container, ContainerTable } from "./styles"
    import Header from "../../components/Header";
    import Nav from "../../components/Nav";
    import NavTask from "../../components/NavTask";
    import mulher from "../../assets/classesList/mulher.svg";
    import sr from "../../assets/classesList/sr.svg";
    import moca from "../../assets/classesList/moca.svg";
    import rapaz from "../../assets/classesList/rapaz.svg";
    import wo from "../../assets/classesList/wo.svg";
    import hm from "../../assets/classesList/hm.svg";
    import chaaat from "../../assets/classesList/chaaat.svg";
    import lixo from "../../assets/classesList/lixo.svg";

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
                                    <td><img alt="Foto de perfil" src={mulher} /></td>
                                    <td>Soeli Kristin</td>
                                    <td><img src={chaaat} /></td>
                                    <td><img src={lixo} /></td>
                                </tr>
                                <tr>
                                    <td><img alt="Foto de perfil" src={sr} /></td>
                                    <td>Black, Marvin</td>
                                    <td><img src={chaaat} /></td>
                                    <td><img src={lixo} /></td>
                                </tr>
                                <tr>
                                    <td><img alt="Foto de perfil" src={moca} /></td>
                                    <td>Nguyen, Shane</td>
                                    <td><img src={chaaat} /></td>
                                    <td><img src={lixo} /></td>
                                </tr>
                                <tr>
                                    <td><img alt="Foto de perfil" src={rapaz} /></td>
                                    <td>Henry, Arthur</td>
                                    <td><img src={chaaat} /></td>
                                    <td><img src={lixo} /></td>
                                </tr>
                                <tr>
                                    <td><img alt="Foto de perfil" src={wo} /></td>
                                    <td>Black, Marvin</td>
                                    <td><img src={chaaat} /></td>
                                    <td><img src={lixo} /></td>
                                </tr>
                                <tr>
                                    <td><img alt="Foto de perfil" src={hm} /></td>
                                    <td>Miles, Esther</td>
                                    <td><img src={chaaat} /></td>
                                    <td><img src={lixo} /></td>
                                </tr>
                                <tr>
                                    <td><img alt="Foto de perfil" src={rapaz} /></td>
                                    <td>Guilherme Rodrigues</td>
                                    <td><img src={chaaat} /></td>
                                    <td><img src={lixo} /></td>
                                </tr>
                                <tr>
                                    <td><img alt="Foto de perfil" src={hm} /></td>
                                    <td>Samuel Goulart</td>
                                    <td><img src={chaaat} /></td>
                                    <td><img src={lixo} /></td>
                                </tr>
                                <tr>
                                    <td><img alt="Foto de perfil" src={sr} /></td>
                                    <td>Emerson Silva</td>
                                    <td><img src={chaaat} /></td>
                                    <td><img src={lixo} /></td>
                                </tr>
                                <tr>
                                    <td><img alt="Foto de perfil" src={moca} /></td>
                                    <td>Antonio Ailton</td>
                                    <td><img src={chaaat} /></td>
                                    <td><img src={lixo} /></td>
                                </tr>
                                <tr>
                                    <td><img alt="Foto de perfil" src={mulher} /></td>
                                    <td>Gustavo Marques</td>
                                    <td><img src={chaaat} /></td>
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