import {
    Container,
    CreateClassAndSelectClass,
    ContainerImg,
    ContainerAddMemberToClass,
    ContainerCreateClassAndSelectClass,
    Content,
    AddMemberWithWxcelWile,
    ContainerTable
} from "./styles";

import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Input from "../../components/Input";
import BtnSubmit from "../../components/BtnSubmit";
import Dropzone from "../../components/Dropzone";

import membro from "../../assets/createclass/membro.svg"
import foto from "../../assets/createclass/foto.svg";

import arrowLeft from "../../assets/addMember/arrowLeft.svg";
import arrowRight from "../../assets/addMember/arrowRight.svg";


function CreateClass() {
    return (
        <>
            <Header />
            <Nav />

            <Container>

                <ContainerCreateClassAndSelectClass>

                    <CreateClassAndSelectClass >
                        <h1>Criar uma Turma</h1>

                        <form>
                            <Input label="Nome da turma" />

                            <div id="button" >
                                <BtnSubmit text="Criar" />
                            </div>
                        </form>

                        <div id="selectClass" >
                            <h1>Selecione alguma turma para adicionar membros a ela:</h1>
                        </div>

                    </CreateClassAndSelectClass>


                    <ContainerImg id="img" >
                        <img src={membro} />
                    </ContainerImg>

                </ContainerCreateClassAndSelectClass>

                <ContainerAddMemberToClass>

                    <div id="AddMemberToClass" >
                        <h1>Adicionar  Membros : Português</h1>
                        <form>
                            <Input label="Informe o e-mail" />
                            <div id="buttonAddMemberToClass" >
                                <BtnSubmit text="Adicionar" />
                            </div>
                        </form>
                    </div>

                    <div id="AddMemberToClassExcel" >
                        <AddMemberWithWxcelWile>
                            <Content>
                                <Dropzone />
                            </Content>
                        </AddMemberWithWxcelWile>
                    </div>

                </ContainerAddMemberToClass>

                <form>
                    <select name="select-simples-grande" class="ls-select" style={{
                        width: "300px"
                    }}>
                        <option value="ac">Acre</option>
                        <option value="al">Alagoas</option>
                        ...
                    </select>
                </form> 

                <div>
                    <span>Turma: Português</span>
                </div>

                <ContainerTable>
                    <thead>
                        <tr id="trTh">
                            <th></th>
                            <th></th>
                            <th>Nome</th>
                            <th>E-mail</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr>
                            <td><input type="checkbox" /></td>
                            <td><img alt="" src={foto} /></td>
                            <td>Samuel</td>
                            <td>samuel@gmail.com</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td><img alt="" src={foto} /></td>
                            <td>Samuel</td>
                            <td>samuel@gmail.com</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td><img alt="" src={foto} /></td>
                            <td>Samuel</td>
                            <td>samuel@gmail.com</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td><img alt="" src={foto} /></td>
                            <td>Samuel</td>
                            <td>samuel@gmail.com</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td><img alt="" src={foto} /></td>
                            <td>Samuel</td>
                            <td>samuel@gmail.com</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td><img alt="" src={foto} /></td>
                            <td>Samuel</td>
                            <td>samuel@gmail.com</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td><img alt="" src={foto} /></td>
                            <td>Samuel</td>
                            <td>samuel@gmail.com</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td><img alt="" src={foto} /></td>
                            <td>Samuel</td>
                            <td>samuel@gmail.com</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td><img alt="" src={foto} /></td>
                            <td>Samuel</td>
                            <td>samuel@gmail.com</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td><img alt="" src={foto} /></td>
                            <td>Samuel</td>
                            <td>samuel@gmail.com</td>
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
                                <img alt=""
                                    src={arrowLeft}
                                    alt="Seta para esquerda" />

                                <img alt="" src={arrowRight}
                                    alt="Seta para direita" />

                            </div>
                        </div>
                    </tfoot>

                </ContainerTable>

            </Container>



        </>

    );
}

export default CreateClass;