import { Container } from "./styles";
import iconFeed from "../../assets/nav/iconFeed.svg"
import iconTeam from "../../assets/nav/iconTeam.svg"
import iconActivities from "../../assets/nav/iconActivities.svg"
import iconFoul from "../../assets/nav/iconFoul.svg"
import iconNotes from "../../assets/nav/iconNotes.svg"
import iconValidation from "../../assets/nav/iconValidation.svg"


function Nav() {

    return (
        <Container>
            <div>
                <img src={iconFeed} alt="Ícone de feed" />
                {/* <p  >Feed</p> */}
            </div>
            <div>
                <img src={iconTeam} alt="Ícone de turmas" />
                {/* <p>Turmas</p> */}
            </div>
            <div>
                <img src={iconActivities} alt="Ícone de atividades" />
                {/* <p>Atividades</p> */}
            </div>
            <div>
                <img src={iconFoul} alt="Ícone de faltas" />
                {/* <p>Faltas</p> */}
            </div>
            <div>
                <img src={iconNotes} alt="Ícone de notas" />
                {/* <p>Notas</p> */}
            </div>
            <div>
                <img src={iconValidation} alt="Ícone de validação" />
                {/* <p>Validação</p> */}
            </div>

        </Container>
    );
}

export default Nav;