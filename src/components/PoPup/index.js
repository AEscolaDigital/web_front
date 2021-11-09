import iconAddMember from "../../assets/poPup/iconAddMember.svg"
import iconDelete from "../../assets/poPup/iconDelete.svg"
import { Container } from "./styles"

import { api } from "../../services/api";

function PoPup({ display, setProps, id }) {


    const handleDelete = async (e) => {
        e.preventDefault();

        try {
            await api.delete(`/disciplines/${id}`);
            setProps(true)

        } catch (error) {

            if (error.response === undefined) {
                // httpError503()
            } else {

            }
        }

    }

    return (
        <Container style={{ display: display }} >
            <div>
                <form>
                    <div>
                        <img src={iconAddMember} alt="Icone de adicionar membro" />
                        <span>Adicionar membro</span>
                    </div>
                </form>

                <form onClick={handleDelete} >
                    <div>
                        <img src={iconDelete} alt="Icone de deleção" />
                        <span>Excluir turma</span>
                    </div>
                </form>
            </div>

        </Container>
    );
}

export default PoPup;