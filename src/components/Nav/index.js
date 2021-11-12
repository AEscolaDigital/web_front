import { ContainerNav } from "./styles";
import iconFeed from "../../assets/nav/iconFeed.svg"
import iconTeam from "../../assets/nav/iconTeam.svg"
import iconActivities from "../../assets/nav/iconActivities.svg"
import iconFoul from "../../assets/nav/iconFoul.svg"
import iconNotes from "../../assets/nav/iconNotes.svg"
import addMember from "../../assets/nav/addMember.svg"
import { Link } from "react-router-dom";
import { useState } from "react";

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
                    <Link to="addMember">
                        <img src={iconFeed} alt="Ícone de feed" />
                        <p style={{
                            display: display
                        }} >Feed</p>
                    </Link>
                </div>
                <div>
                    <Link to="/Teams">
                        <img src={iconTeam} alt="Ícone de turmas" />
                        <p  style={{
                            display: display
                        }} >Turmas</p>
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
                    <Link to="addMember">
                        <img 
                            src={iconFoul} 
                            alt="Ícone de faltas" />
                        <p  style={{
                            display: display
                        }}>Faltas</p>
                    </Link>
                </div>
                <div>
                    <Link to="addMember">
                        <img src={iconNotes} alt="Ícone de notas" />
                        <p style={{
                            display: display
                        }}>Notas</p>
                    </Link>
                </div>
                <div>
                    <Link to="memberClassCreate">
                        <img src={addMember} alt="Ícone de adicionar turma ou membro" />
                        <p style={{
                            display: display
                        }} >Adicionar</p>
                    </Link>
                </div>
            </ContainerNav>
    );
}

export default Nav;