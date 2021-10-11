import iconAddMember from "../../assets/poPup/iconAddMember.svg"
import iconDelete from "../../assets/poPup/iconDelete.svg"
import { Container } from "./styles"

function PoPup({ display }) {
    return (
        <Container style={{ display: display, }} >
            <div>
                <div>
                    <img src={iconAddMember} />
                    <span>Adicionar membro</span>
                </div>
                <div>
                    <img src={iconDelete} />
                    <span>Excluir turma</span>
                </div>
            </div>

        </Container>
    );
}

export default PoPup;