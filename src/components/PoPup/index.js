import iconAddMember from "../../assets/poPup/iconAddMember.svg"
import iconDelete from "../../assets/poPup/iconDelete.svg"
import { Container } from "./styles"

function PoPup({ display }) {
    return (
        <Container style={{ display: display, }} >
            <div>
                <div>
                    <img src={iconAddMember} alt="Icone de adicionar membro" />
                    <span>Adicionar membro</span>
                </div>
                <div>
                    <img src={iconDelete} alt="Icone de deleção" />
                    <span>Excluir turma</span>
                </div>
            </div>

        </Container>
    );
}

export default PoPup;