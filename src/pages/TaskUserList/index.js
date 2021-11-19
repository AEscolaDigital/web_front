import { Container, ContainerTable, ContainerInfo } from "./styles"

import Header from "../../components/Header";
import Nav from "../../components/Nav";
import NavTask from "../../components/NavTask";

import mulher from "../../assets/classesList/mulher.svg";
import lixo from "../../assets/classesList/lixo.svg";

import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";

function ClassesList() {

    const history = useHistory();

    const location = useLocation();

    const [discipline, setDiscipline] = useState([]);

    const [listUsers, setListUsers] = useState([]);

    useEffect(() => {

        let loadListUsers = async () => {

            try {
                const response = await api.get(`tasks/users/${location.state.task.id}`);
                setListUsers(response.data);

            } catch (error) {
                alert(error);
            }
        };

        loadListUsers();

    }, []);


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


    return (
        <>
            <Header />
            <Nav />
            <NavTask setProps={setDiscipline} />
            <Container>

                <ContainerInfo>
                    <div>
                        <div>
                            <span>Turma: {location.state.name}</span>
                        </div>
                        <div>
                            <button>Não concluídos</button>
                        </div>
                        <div>
                            <button>Concluídos</button>
                        </div>
                    </div>

                    <hr />
                </ContainerInfo>
                <ContainerTable>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUsers.map(listUsers => (
                            <tr onClick={() => handleSubmit(listUsers)} >
                        <td>
                            <img alt="Foto de perfil" src={mulher} />
                        </td>
                        <td>{listUsers.name}</td>
                        <td>
                            <img className="delete" src={lixo} />
                        </td>
                    </tr>

                        ))}

                </tbody>
            </ContainerTable>

        </Container>
        </>
    );
}

export default ClassesList;