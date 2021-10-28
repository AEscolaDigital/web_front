import { Container, DivTurma, DivImage, DivMembro, ContainerTable, ContainerCreateClass } from "./styles";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Input from "../../components/Input";
import membro from "../../assets/createclass/membro.svg";
import BtnSubmit from "../../components/BtnSubmit";
import BtnCancel from "../../components/BtnCancel";
import lupa from "../../assets/createclass/lupa.svg";
import excel from "../../assets/createclass/excel.svg"
import arrowLeft from "../../assets/memberRegistration/arrowLeft.svg";
import arrowRight from "../../assets/memberRegistration/arrowRight.svg";
import lixo from "../../assets/createclass/lixo.svg"
import foto from "../../assets/createclass/foto.svg"

function CreateClass() {
    return (
        <Container>

            <Header />
            <Nav />

            <ContainerCreateClass>
                <DivTurma>
                    <div>
                        <header>
                            <h1>Criar uma turma</h1>
                        </header>
                        <div>
                            <Input label="Nome da turma" type="text" width="480px" height="55px" />
                        </div>

                        <div>
                            <img src={excel} />
                        </div>
                    </div>
                </DivTurma>

                <DivMembro>
                    <div>
                        <div>
                            <h1>Adicionar Membros</h1>

                            <div>
                                <BtnSubmit text="Adicionar" />
                            </div>
                        </div>

                        <div className="membro">
                            <Input width="480px" height="30px" />
                            <div className="lupa">
                                <img src={lupa} />
                            </div>
                        </div>
                    </div>
                </DivMembro>

                <DivImage>
                    <div id="img" >
                        <img src={membro} />
                    </div>

                    <div>
                        <BtnCancel text="Voltar" />
                    </div>

                    <div>
                        <BtnSubmit text="Criar" />
                    </div>
                </DivImage>
            </ContainerCreateClass>


            <ContainerTable>
                <thead>
                    <tr id="trTh">
                        <th></th>
                        <th>NOME</th>
                        <th>TIPO DE USUÁRIO</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td id="image">
                            <img src={foto} /></td>
                        <td>NOME</td>
                        <td>E-mail</td>
                        <div>
                            <img src={lixo} />
                        </div>
                    </tr>
                    <tr>
                        <td id="image">
                            <img src={foto} />
                        </td>

                        <td>NOME</td>
                        <td>E-mail</td>
                        <div>
                            <img src={lixo} />
                        </div>
                    </tr>

                    <tr>
                        <td id="image">
                            <img src={foto} />
                        </td>
                        
                        <td>NOME</td>
                        <td>E-mail</td>
                        <div>
                            <img src={lixo} />
                        </div>
                    </tr>
                </tbody>

                <tfoot>
                    <div>
                        <div>
                            Linhas por pagina: 10
                        </div>

                        <div>
                            1 de 2
                        </div>

                        <div id="divImgSetas">
                            <img src={arrowLeft} />
                            <img src={arrowRight} />
                        </div>
                    </div>
                </tfoot>

            </ContainerTable>

        </Container>

    );
}

export default CreateClass;