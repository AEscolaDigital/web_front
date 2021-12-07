import Header from "../../components/Header";
import Nav from "../../components/Nav";
import BtnSubmit from "../../components/BtnSubmit";

import {
    ContainerTable,
    Container,
    ContainerFillInTheData
} from "./styles";


import arrowLeft from "../../assets/addMember/arrowLeft.svg";
import arrowRight from "../../assets/addMember/arrowRight.svg";

import { useLocation } from "react-router-dom";


function CastCrates() {

    const location = useLocation();
    const classe = location.state.classe

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
                                <select name="select">
                                    <option value="valor1">Selecione uma disciplina</option>
                                    <option value="valor2">Valor 2</option>
                                    <option value="valor3">Valor 3</option>
                                </select>
                                <select name="select1">
                                    <option value="valor0" >Selecione um termo</option>
                                    <option value="valor1" >1º Termo</option>
                                    <option value="valor2">2º Termo</option>
                                    <option value="valor3">3º Termo</option>
                                </select>
                            </div>

                        </fieldset>
                    </form>

                </ContainerFillInTheData>

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
                            <tr>
                                <td >
                                    <img
                                        className="imgTable"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUEgE45wBPSyEEe2Aigcp4bkCPuOs7rcLi3A&usqp=CAU"
                                        alt="Perfil" />
                                </td>

                                <td>Samuel Goulart</td>
                                <td>1</td>
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
                                <td>Aprovado</td>
                            </tr>
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

            </Container>

        </>
    );
}

export default CastCrates;