import imgMathematics from "../../assets/teams/imgMathematics.svg"
import iconTeam from "../../assets/teams/iconTeam.svg"

import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import BtnSubmit from "../../components/BtnSubmit";
import BtnCancel from "../../components/BtnCancel";
import Card from "../../components/Card";


import {
    Container,
    Section
} from "./styles";

import { useState } from 'react';
import { Link } from "react-router-dom";

function Teams() {

    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <Container>
            {isModalVisible ?
                <Modal title="Criar turma">
                    <div id="inputsModal" >
                        <Input className="labelWhite" label="Nome da turma" />
                        <Input className="labelWhite" label="Nome do professor" />
                        <Input className="labelWhite" label="Disciplina" />
                    </div>
                    <div id="btnModal" >
                        <div onClick={() => setIsModalVisible(false)} >
                            <BtnCancel text="Cancelar" />
                        </div>
                        <BtnSubmit text="Próximo" />
                    </div>
                </Modal> : null}
            <Header />
            <Nav />
            <div id="btnCreateTeam" >
                <span onClick={() => setIsModalVisible(true)}>
                    <img src={iconTeam} alt="Icone de um grupo de pessoas" /> <span>Criar Turma</span> </span>
            </div>
            <div id="titleYourTeams" >
                <h1>Suas turmas</h1>
            </div>
            <Section>
                <Link to="videoCall" >
                    <Card>
                        <img src={imgMathematics} alt="" />
                    </Card>
                </Link>

                <Card>
                    <img src={imgMathematics} alt="" />
                </Card>
                <Card>
                    <img src={imgMathematics} alt="" />
                </Card>
                <Card>
                    <img src={imgMathematics} alt="" />
                </Card>
                <Card>
                    <img src={imgMathematics} alt="" />
                </Card>
                <Card>
                    <img src={imgMathematics} alt="" />
                </Card>
                <Card>
                    <img src={imgMathematics} alt="" />
                </Card>
                <Card>
                    <img src={imgMathematics} alt="" />
                </Card>
            </Section>
        </Container>

    );
}

export default Teams;