import { Container, ContainerTable, ContainerInfo } from "./styles"

import Header from "../../components/Header";
import Nav from "../../components/Nav";
import NavTask from "../../components/NavTask";
import ProfilePicture from "../../components/ProfilePicture";

import lixo from "../../assets/classesList/lixo.svg";

import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useHistory, useLocation } from "react-router";

function ClassesList() {

    const history = useHistory();

    const location = useLocation();

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

    let profilePictureStyle = {
        style2: "style2"
    };

    return (
        <>
            <Header />
            <Nav />
            <NavTask  iSOnPage={true}/>
            <Container>

                <ContainerInfo>
                    <div>
                        <div>
                            <span>Disciplina: {location.state.name}</span>
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
                            <ProfilePicture 
                                style={profilePictureStyle.style2}
                                name={listUsers.name} 
                                profile_picture={listUsers.profile_picture} />
                        </td>
                        <td>{listUsers.name}</td>
                        <td>
                            <img className="delete" src={lixo} alt="Ícone de uma lixeira" />
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