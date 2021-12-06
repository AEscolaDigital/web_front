import Header from "../../components/Header";
import Nav from "../../components/Nav";

import BtnSubmit from "../../components/BtnSubmit";


import {
    ContainerTable,
    Container
} from "./styles";

function CastCrates() {

    return (
        <>
            <Header />
            <Nav />
            <Container>

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
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUEgE45wBPSyEEe2Aigcp4bkCPuOs7rcLi3A&usqp=CAU" />
                                </td>

                                <td>Samuel Goulart</td>
                                <td>1</td>
                                <td>
                                    <input 
                                        className="inputGrades" 
                                        max="100" 
                                        maxLength="3" 
                                        min="1" 
                                        required/>
                                </td>
                                <td>
                                    <input 
                                        className="inputGrades" 
                                        max="100" 
                                        maxLength="3" 
                                        min="1" />
                                </td>
                                <td>
                                    <input 
                                        className="inputGrades" 
                                        max="100" 
                                        maxLength="3" 
                                        min="1" 
                                        required />
                                </td>
                                <td>
                                    <input 
                                        className="inputGrades" 
                                        max="100" 
                                        maxLength="3" 
                                        min="1" 
                                        required />
                                </td>
                                <td>Aprovado</td>
                            </tr>
                        </tbody>

                    </ContainerTable>
                    <BtnSubmit text="Ingressar" />

                </form>

            </Container>

        </>
    );
}

export default CastCrates;