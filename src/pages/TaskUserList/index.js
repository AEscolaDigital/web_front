import { 
        Container, 
        ContainerTable, 
        ContainerNameDiscipline, 
        ContainerOption 
    } from "./styles"

import Header from "../../components/Header";
import Nav from "../../components/Nav";
import NavTask from "../../components/NavTask";
import ProfilePicture from "../../components/ProfilePicture";

import lixo from "../../assets/classesList/lixo.svg";

import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useHistory, useLocation } from "react-router";
import Swal from "sweetalert2";

function ClassesList() {

    const history = useHistory();

    const location = useLocation();
    const task_id = location.state.task.id;

    console.log(location.state);

    const [listUsers, setListUsers] = useState([]);

    const [loadListUsers, setloadListUsers] = useState(0);

    useEffect(() => {

        let loadListUsers = async () => {

            try {

                const response = await api.get(`tasks/users/${task_id}`);
                setListUsers(response.data);

            } catch (error) {
                alert(error);
            }
        };

        loadListUsers();

    }, [task_id, loadListUsers]);

    const handleSubmit = async (listUsers) => {

        try {
            history.push({
                pathname: `correctionTask`,
                state: {
                    disciplina: location.state,
                    task: location.state.task,
                    user: listUsers
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    const [status, setStatus] = useState(0);
    const [className, setClassName] = useState("btnSelected");
    const [className1, setClassName1] = useState("btnNotSelected");
    const [className2, setClassName2] = useState("btnNotSelected");


    const setTaskStatus = (status) => {

        setStatus(status);

        status === 0 ? setClassName("btnSelected") : setClassName("btnNotSelected");
        status === 1 ? setClassName1("btnSelected") : setClassName1("btnNotSelected");
        status === 2 ? setClassName2("btnSelected") : setClassName2("btnNotSelected");

    }

    const  deleteUserFromThisTask = async (user_id, task_id) => {

        if (await confirmationToDelete()) {
            try {
                await api.delete(`/tasks/user_id/${user_id}/task_id/${task_id}`);
                setloadListUsers(loadListUsers + 1);
            } catch (error) {
                alert(error);
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
                    'Aluno(a) deletado dessa tarefa, com sucesso.',
                    'success'
                )
                return true;

            } else {
                return false;
            }

        })

    }

    let profilePictureStyle = {
        style: "style2"
    };

    return (
        <>
            <Header />
            <Nav />
            <NavTask iSOnPage={true} />
            <Container>
                <ContainerNameDiscipline>
                    <div>
                        <div>
                            <span>Disciplina: {location.state.name}</span>
                        </div>
                    </div>

                    <hr />
                </ContainerNameDiscipline>
                <ContainerOption>
                    <div>
                        <button
                            className={className}
                            onClick={() => setTaskStatus(0)} >Não entregue
                        </button>
                    </div>
                    <div>
                        <button
                            className={className1}
                            onClick={() => setTaskStatus(1)} >Entregue, mas não corrigido
                        </button>
                    </div>
                    <div>
                        <button
                            className={className2}
                            onClick={() => setTaskStatus(2)}>Entregue, é corrigido
                        </button>
                    </div>
                </ContainerOption>
                <ContainerTable>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUsers.map(listUsers => (
                            listUsers.status === status && (
                                <tr>
                                    <td>
                                        <ProfilePicture
                                            style={profilePictureStyle}
                                            name={listUsers.name}
                                            profile_picture={listUsers.profile_picture} />
                                    </td>
                                    <td onClick={() => handleSubmit(listUsers)} >{listUsers.name}</td>
                                    <td>
                                        <img
                                            className="delete"
                                            src={lixo}
                                            alt="Ícone de uma lixeira"
                                            onClick={() => deleteUserFromThisTask(listUsers.id, task_id)} />
                                    </td>
                                </tr>
                            )
                        ))}

                    </tbody>
                </ContainerTable>

            </Container>
        </>
    );
}

export default ClassesList;