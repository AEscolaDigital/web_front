import { Container, ContainerClass } from "./styles";
import imageTasks from "../../assets/navTask/imageTasks.svg"

function NavTask() {

    return (
        <Container>
            <div id="containerImage" >
                <img src={imageTasks} />
            </div>
            <div id="title" >
                <h1>TAREFAS</h1>
            </div>
            <ContainerClass>
                <div>
                    <span>Todas as turmas</span>
                </div>
                <ul>
                    <li>1º Turma - Matématica</li>
                    <li>2º Turma - Química</li>
                    <li>3º Turma - Educação física</li>
                </ul>
            </ContainerClass>
        </Container >
    );
}

export default NavTask;