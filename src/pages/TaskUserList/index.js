import { Container, ContainerTable, ContainerInfo } from "./styles"

import Header from "../../components/Header";
import Nav from "../../components/Nav";
import NavTask from "../../components/NavTask";

import mulher from "../../assets/classesList/mulher.svg";
import lixo from "../../assets/classesList/lixo.svg";

import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useLocation } from "react-router";

function ClassesList() {

    const location = useLocation();
    console.log(location);



    const [discipline, setDiscipline] = useState([]);

    const [listUsers, setListUsers] = useState([]);

    console.log(listUsers);

    useEffect(() => {

        let loadListUsers = async () => {

            try {
                const response = await api.get('tasks/users/8');
                setListUsers(response.data);

            } catch (error) {
                alert(error);
            }
        };

        loadListUsers();

    }, []);

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
                            <tr>
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