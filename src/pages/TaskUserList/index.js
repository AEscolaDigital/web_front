import { Container, ContainerTable } from "./styles"

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

    useEffect(() => {

        let loadListUsers = async () => {

            try {
                const response = await api.get('tasks/users/1');

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

                <div>
                    <div>
                        <h3>Turma: {location.state.name}</h3>
                    </div>
                    <div>
                        <h3>Não concluídos</h3>
                    </div>
                    <div>
                        <h3>Concluídos</h3>
                    </div>
                    <hr />
                    <div>
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
                    </div>
                </div>
            </Container>
        </>
    );
}

export default ClassesList;