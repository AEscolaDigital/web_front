import { Container, ContainerClass } from "./styles";

import imageTasks from "../../assets/navTask/imageTasks.svg"

import { useEffect, useState } from "react";
import { api } from "../../services/api";

function NavTask({ setProps }) {

    const [disciplines, setDisciplines] = useState([]);

    useEffect(() => {

        let loadDisciplines = async () => {

            try {
                const response = await api.get('disciplines');

                setDisciplines(response.data);

            } catch (error) {
                alert(error);
            }
        };

        loadDisciplines();

    }, []);

    const [disciplineId, setDisciplineId] = useState(0);
    setProps(disciplineId)

    return (
        <Container>
            <div id="containerImage" >
                <img src={imageTasks} alt="" />
            </div>
            <div id="title" >
                <h1>TAREFAS</h1>
            </div>
            <ContainerClass>
                <div id="titleDiscipline" >
                    <span>Todas as disciplinas</span>
                </div>
                <div id="disciplines" >
                    {disciplines.map(discipline =>
                        <div onClick={() => setDisciplineId(discipline) } >{discipline.name}</div>
                    )}
                </div>
            </ContainerClass>
        </Container >
    );
}

export default NavTask;