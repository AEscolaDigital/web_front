import { ContainerNav } from "./styles";
import iconTeam from "../../assets/nav/iconTeam.svg"
import iconActivities from "../../assets/nav/iconActivities.svg"
import iconNotes from "../../assets/nav/iconNotes.svg"
import addMember from "../../assets/nav/addMember.svg"
import { Link } from "react-router-dom";
import { useState } from "react";
import PermissionComponent from "../PermissionComponent";

function Nav() {

    const [display, setDisplay] = useState("none")

    const onMouseOver = () => {
        setDisplay("block");
    }
    const onMouseOut = () => {
        setDisplay("none");
    }

    return (
        <ContainerNav
            onMouseOver={onMouseOver} onMouseOut={onMouseOut} >
            <div>
                <Link to="teams">
                    <img src={iconTeam} alt="Ícone de turmas" />
                    <p style={{
                        display: display
                    }} >Disciplinas</p>
                </Link>
            </div>
            <div>
                <Link to="listOfTasks">
                    <img
                        src={iconActivities}
                        alt="Ícone de atividades" />
                    <p style={{
                        display: display
                    }} >Tarefas</p>
                </Link>
            </div>

            <div>
                <Link to="notes">
                    <img src={iconNotes} alt="Ícone de notas" />
                    <p style={{
                        display: display
                    }}>Notas</p>
                </Link>
            </div>

            <PermissionComponent role="ROLE_ADMIN" >
                <div>
                    <Link to="memberClassCreate">
                        <img src={addMember} alt="Ícone de adicionar turma ou membro" />
                        <p style={{
                            display: display
                        }} >Adicionar</p>
                    </Link>
                </div>
            </PermissionComponent>

        </ContainerNav>
    );
}

export default Nav;