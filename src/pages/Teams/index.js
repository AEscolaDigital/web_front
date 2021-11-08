import imgMathematics from "../../assets/teams/imgMathematics.svg"
import iconTeam from "../../assets/teams/iconTeam.svg"
import imageHttpError503 from "../../assets/alert/imageHttpError503.svg"

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

import { useEffect, useState } from 'react';
import Swal from "sweetalert2";
import { api } from "../../services/api";

function Teams() {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const [disciplines, setDisciplines] = useState([]);

    useEffect(() => {
        let loadDisciplines = async () => {

            try {
                const response = await api.get(`/disciplines`);

                console.log(response.data);
                setDisciplines(response.data)

            } catch (error) {
                httpError503(error.response);
            }
        };

        loadDisciplines();

    }, []);


    const httpError503 = () => {
        Swal.fire({
            html: `
                   <img style="width: 300px; height: 250px; margin-top: 20px;" src=${imageHttpError503} />
                   </br>
                   <span>Error 503, serviço indisponível</span>
                   </br></br>
                   <span>Tente novamente mais tarde!</span>
                `,
        })
    }

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
                    <img src={iconTeam} alt="Icone de um grupo de pessoas" /> <span>Criar disciplina</span> </span>
            </div>
            <div id="titleYourTeams" >
                <h1>Suas turmas</h1>
            </div>
            <Section>
                
                {disciplines.map(discipline =>
                    <Card 
                        disciplinesName={discipline.name}
                        teacherName={discipline.school.name} >
                        <img src={discipline.image} alt="" />
                    </Card>
                )}

            </Section>
        </Container>

    );
}

export default Teams;