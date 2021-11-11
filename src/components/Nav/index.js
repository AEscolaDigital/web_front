import { Container } from "./styles";
import iconFeed from "../../assets/nav/iconFeed.svg"
import iconTeam from "../../assets/nav/iconTeam.svg"
import iconActivities from "../../assets/nav/iconActivities.svg"
import iconFoul from "../../assets/nav/iconFoul.svg"
import iconNotes from "../../assets/nav/iconNotes.svg"
import addMember from "../../assets/nav/addMember.svg"

function Nav() {
    return (
        <Container >
            <div>
                <a to="addMember">
                    <img src={iconFeed} alt="Ícone de feed" />
                    <p >Feed</p>
                </a>
            </div>
            <div>
                <a to="/Teams">
                    <img src={iconTeam} alt="Ícone de turmas" />
                    <p>Turmas</p>
                </a>
            </div>
            <div>
                <a to="addMember">
                    <img src={iconActivities} alt="Ícone de atividades" />
                    <p>Tarefas</p>
                </a>
            </div>
            <div>
                <a to="addMember">
                    <img src={iconFoul} alt="Ícone de faltas" />
                    <p>Faltas</p>
                </a>
            </div>
            <div>
                <a to="addMember">
                    <img src={iconNotes} alt="Ícone de notas" />
                    <p>Notas</p>
                </a>
            </div>
            <div>
                <a to="memberClassCreate">
                    <img src={addMember} alt="Ícone de adicionar turma ou membro" />
                    <p>Adicionar</p>
                </a>
            </div>
        
        </Container>
    );
}

export default Nav;