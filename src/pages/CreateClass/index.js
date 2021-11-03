import {
    Container,
    CreateClassAndSelectClass,
    ContainerImg,
    ContainerAddMemberToClass,
    ContainerCreateClassAndSelectClass,
    Content,
    AddMemberWithWxcelWile
} from "./styles";

import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Input from "../../components/Input";
import BtnSubmit from "../../components/BtnSubmit";
import Dropzone from "../../components/Dropzone";

import membro from "../../assets/createclass/membro.svg"
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

                <ContainerTable>
                    <thead>
                        <tr id="trTh">
                            <th>NOME</th>
                            <th>E-MAIL</th>
                            <th>TIPO DE USUÁRIO</th>
                            <th>Adicionado em</th>
                        </tr>
                    </thead>

                    <tbody>

                        {users.map(user =>
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{role[user.role_id]}</td>
                                <td>{user.created_at}</td>
                            </tr>
                        )}
                    </tbody>

                    <tfoot>
                        <div>
                            Total de membros: {totalUsers}
                        </div>

                        <div>

                            <div>
                                Linhas por pagina: 10
                            </div>

                            <div>
                                {currentPage} de {pages}
                            </div>

                            <div id="divImgSetas">
                                {currentPage > 1 && (
                                    <img
                                        src={arrowLeft}
                                        onClick={() => setCurrentPage(currentPage - 1)}
                                        alt="Seta para esquerda" />
                                )}

                                {currentPage < pages && (
                                    <img src={arrowRight}
                                        onClick={() => setCurrentPage(currentPage + 1)}
                                        alt="Seta para direita" />
                                )}

                            </div>
                        </div>
                    </tfoot>

                </ContainerTable>

            </Container>



        </>

    );
}

export default CreateClass;