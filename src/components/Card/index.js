import iconAddMember from "../../assets/card/iconAddMember.svg"
import iconDelete from "../../assets/card/iconDelete.svg"
import { Cards } from "./styles"

function Card({ display }) {
    return (
        <Cards style={{ display: display, }} >
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

        </Cards>
    );
}

export default Card;