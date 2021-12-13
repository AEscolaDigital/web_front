import Header from "../../components/Header";
import Nav from "../../components/Nav";
import BtnSubmit from "../../components/BtnSubmit";
import ProfilePicture from "../../components/ProfilePicture";

import {
    ContainerTable,
    Container,
    ContainerFillInTheData
} from "./styles";


import arrowLeft from "../../assets/addMember/arrowLeft.svg";
import arrowRight from "../../assets/addMember/arrowRight.svg";

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";


function CastNote() {

    const location = useLocation();
    const classe = location.state.classe

    const [notes, setNotes] = useState([]);
    const [disciplineSelects, setDisciplineSelects] = useState([]);
    const [semester, setSemester] = useState([]);   

    console.log(notes);

    useEffect(() => {
        let loadNotes = async () => {
            try {
                const response = await api.get(`/notes/class_id/${classe.id}/discipline_id/${disciplineSelects}`);

                setNotes(response.data)

            } catch (error) {
                console.log(error.response);
            }
        };

        loadNotes();

    }, [classe, disciplineSelects]);

    const [disciplines, setDisciplines] = useState([]);

    useEffect(() => {
        let loadDisciplines = async () => {

            try {
                const response = await api.get(`/disciplines`);
                setDisciplines(response.data)


            } catch (error) {
                console.log(error.response);
            }
        };

        loadDisciplines();

    }, []);

    
    let profilePictureStyle = {
        style: "style2"
    };

    return (
        <>
            <Header />
            <Nav />
            <Container>

                <ContainerFillInTheData>
                    <h1>Lançamento de notas</h1>
                    <span>Classe: {classe.sigla} - {classe.course_name}</span>

                    <form>
                        <fieldset>
                            <legend>Preencha</legend>
                            <div id="selects" >
                                <select name="select" onChange={e => setDisciplineSelects(e.target.value)} >
                                    <option value="0">Selecione uma disciplina</option>
                                    {disciplines.map(discipline =>

                                        <option value={discipline.id}>{discipline.sigla} - {discipline.name}</option>
                                    )}
                                </select>
                                <select name="select1" onChange={e => setSemester(e.target.value)} >
                                    <option value="valor0" >Selecione um termo</option>
                                    <option value="1">1º Termo</option>
                                    <option value="2">2º Termo</option>
                                    <option value="3">3º Termo</option>
                                </select>
                            </div>

                        </fieldset>
                    </form>

                </ContainerFillInTheData>


                {disciplineSelects > 0 && semester > 0 && (
                    <form>
                        <ContainerTable>
                            <thead>
                                <tr id="trTh">
                                    <th></th>
                                    <th>Nome</th>
                                    <th>Termo</th>
                                    <th>1ºAS</th>
                                    <th>2ºAS</th>
                                    <th>3ºAS</th>
                                    <th>4ºAS</th>
                                    <th>Avaliação Final</th>
                                </tr>
                            </thead>
                            <tbody>
                                {notes.map(note =>
                                    <tr>
                                        <td>
                                            <ProfilePicture
                                                style={profilePictureStyle}
                                                name={note.user.name}
                                                profile_picture={note.user.profile_picture} />
                                        </td>

                                        <td>{note.user.name}</td>
                                        <td>{semester} </td>
                                        <td>
                                            <select className="selectGrades" name="select">
                                                <option value="valor1">INFORME NOTA</option>
                                                <option value="100">Nota - 100</option>
                                                <option value="75">Nota - 75</option>
                                                <option value="50">Nota - 50</option>
                                                <option value="25">Nota - 25</option>
                                                <option value="0">Nota - 0</option>
                                                <option value="200">Dispensado</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select className="selectGrades" name="select">
                                                <option value="valor1">INFORME NOTA</option>
                                                <option value="valor2">Nota - 100</option>
                                                <option value="valor3">Nota - 75</option>
                                                <option value="valor3">Nota - 50</option>
                                                <option value="valor3">Nota - 25</option>
                                                <option value="valor3">Nota - 0</option>
                                                <option value="valor3">Dispensado</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select className="selectGrades" name="select">
                                                <option value="valor1">INFORME NOTA</option>
                                                <option value="valor2">Nota - 100</option>
                                                <option value="valor3">Nota - 75</option>
                                                <option value="valor3">Nota - 50</option>
                                                <option value="valor3">Nota - 25</option>
                                                <option value="valor3">Nota - 0</option>
                                                <option value="valor3">Dispensado</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select className="selectGrades" name="select">
                                                <option value="valor1">INFORME NOTA</option>
                                                <option value="valor2">Nota - 100</option>
                                                <option value="valor3">Nota - 75</option>
                                                <option value="valor3">Nota - 50</option>
                                                <option value="valor3">Nota - 25</option>
                                                <option value="valor3">Nota - 0</option>
                                                <option value="valor3">Dispensado</option>
                                            </select>
                                        </td>
                                        <td>{note.assessment}</td>
                                    </tr>
                                )}
                            </tbody>
                            <tfoot>
                                <div>
                                    Total de membros:
                                </div>

                                <div>

                                    <div>
                                        Linhas por pagina: 10
                                    </div>

                                    <div>
                                        1 de 10
                                    </div>

                                    <div id="divImgSetas">
                                        <img
                                            src={arrowLeft}
                                            alt="Seta para esquerda" />

                                        <img src={arrowRight}
                                            alt="Seta para direita" />

                                    </div>
                                </div>
                            </tfoot>

                        </ContainerTable>

                        <div id="btnSubmit" >
                            <BtnSubmit text="Salvar" />
                        </div>

                    </form>

                )}


            </Container>

        </>
    );
}

export default CastNote;