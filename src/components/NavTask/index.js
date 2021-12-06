import { Container, ContainerClass } from "./styles";

import imageTasks from "../../assets/navTask/imageTasks.svg"

import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useHistory } from "react-router";

function NavTask({ setProps, iSOnPage }) {

    const history = useHistory();

    const [disciplines, setDisciplines] = useState([]);

    const setDisciplineId = (disciplineId) =>{
        if (!iSOnPage) 
            setProps(disciplineId);
    }

    const status = () => {
        if (iSOnPage) {
            history.push("listOfTasks");
        }

    }

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
                        <div onClick={() => {
                            setDisciplineId(discipline);
                            status();
                        }} >{discipline.sigla}</div>
                    )}
                </div>
            </ContainerClass>
        </Container >
    );
}

export default NavTask;