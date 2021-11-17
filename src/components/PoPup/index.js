import iconAddMember from "../../assets/poPup/iconAddMember.svg"
import iconDelete from "../../assets/poPup/iconDelete.svg"
import { Container } from "./styles"

import { api } from "../../services/api";
import Swal from "sweetalert2";

function PoPup({ display, setProps, id }) {


    const handleDelete = async (e) => {
        e.preventDefault();

        if (await confirmationToDelete()) {
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

    }



    const confirmationToDelete = async () => {
        return await Swal.fire({
            title: 'Tem certeza?',
            text: "Você não poderá reverter isso!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#28a745',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, exclua!',
            cancelButtonText: 'Não, exclua!'

        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Excluído',
                    'Disciplina excluído, com sucesso.',
                    'success'
                )
                return true;

            } else {
                return false;
            }

        })

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