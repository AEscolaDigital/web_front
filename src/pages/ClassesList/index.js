import { Container, ContainerTable } from "./styles"
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import NavTask from "../../components/NavTask";


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
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
             </ContainerTable>
                </div>
            </div>
          
        </Container>
    );
}

export default ClassesList;