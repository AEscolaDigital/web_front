import { Container, DivContainer, InputFilter, inputBarraPesquisa, Table } from "./styled";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import iconMore from "../../assets/validation/iconMore.svg";
import iconeMagnifier from "../../assets/validation/iconeMagnifier.svg";


function Validation() {
    return (

        <Container>
            <Header />
            <Nav />
            <div>
                <DivContainer>
                    <div className="divInputs">
                        <input id="inputFilter" type="text" value="Filter"/>


                        <input id="inputBarraPesquisa" type="text" placeholder="Pesquisa">
                            <button type="submit">
                                <img src={iconeMagnifier} />
                            </button>
                        </input>
                        
                    </div>

                    <Table>
                        <thead>
                            <tr id="trTh">
                                <th>NOME</th>
                                <th>FUNÇÃO</th>
                                <th>IDADE</th>
                                <th>TELEFONE</th>
                                <th>STATUS</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="tdSpan" >
                                    <span>Samuel Goulart</span>
                                    <span>example@email.com</span>
                                </td>
                                <td>Aluno</td>
                                <td>19 anos</td>
                                <td>(11) 98751 - 2020</td>
                                <td className="tdSpan">
                                    <span className="pending" >
                                        <span />
                                        <span>Pendente</span>
                                    </span>
                                    <span>15 / ABR / 2020</span>
                                </td>
                                <td>
                                    <img src={iconMore} />
                                </td>
                            </tr>
                            <tr>
                                <td className="tdSpan" >
                                    <span>Samuel Goulart</span>
                                    <span>example@email.com</span>
                                </td>
                                <td>Aluno</td>
                                <td>19 anos</td>
                                <td>(11) 98751 - 2020</td>
                                <td className="tdSpan">
                                    <span className="pending" >
                                        <span />
                                        <span>Pendente</span>
                                    </span>
                                    <span>15 / ABR / 2020</span>
                                </td>
                                <td>
                                    <img src={iconMore} />
                                </td>
                            </tr>
                            <tr>
                                <td className="tdSpan" >
                                    <span>Samuel Goulart</span>
                                    <span>example@email.com</span>
                                </td>
                                <td>Aluno</td>
                                <td>19 anos</td>
                                <td>(11) 98751 - 2020</td>
                                <td className="tdSpan">
                                    <span className="pending" >
                                        <span />
                                        <span>Pendente</span>
                                    </span>
                                    <span>15 / ABR / 2020</span>
                                </td>
                                <td>
                                    <img src={iconMore} />
                                </td>
                            </tr>
                            <tr>
                                <td className="tdSpan" >
                                    <span>Samuel Goulart</span>
                                    <span>example@email.com</span>
                                </td>
                                <td>Aluno</td>
                                <td>19 anos</td>
                                <td>(11) 98751 - 2020</td>
                                <td className="tdSpan">
                                    <span className="pending" >
                                        <span />
                                        <span>Pendente</span>
                                    </span>
                                    <span>15 / ABR / 2020</span>
                                </td>
                                <td>
                                    <img src={iconMore} />
                                </td>
                            </tr>
                            <tr>
                                <td className="tdSpan" >
                                    <span>Samuel Goulart</span>
                                    <span>example@email.com</span>
                                </td>
                                <td>Aluno</td>
                                <td>19 anos</td>
                                <td>(11) 98751 - 2020</td>
                                <td className="tdSpan">
                                    <span className="pending" >
                                        <span />
                                        <span>Pendente</span>
                                    </span>
                                    <span>15 / ABR / 2020</span>
                                </td>
                                <td>
                                    <img src={iconMore} />
                                </td>
                            </tr>
                            <tr>
                                <td className="tdSpan" >
                                    <span>Samuel Goulart</span>
                                    <span>example@email.com</span>
                                </td>
                                <td>Aluno</td>
                                <td>19 anos</td>
                                <td>(11) 98751 - 2020</td>
                                <td className="tdSpan">
                                    <span className="pending" >
                                        <span />
                                        <span>Pendente</span>
                                    </span>
                                    <span>15 / ABR / 2020</span>
                                </td>
                                <td>
                                    <img src={iconMore} />
                                </td>
                            </tr>
                            <tr>
                                <td className="tdSpan" >
                                    <span>Samuel Goulart</span>
                                    <span>example@email.com</span>
                                </td>
                                <td>Aluno</td>
                                <td>19 anos</td>
                                <td>(11) 98751 - 2020</td>
                                <td className="tdSpan">
                                    <span className="pending" >
                                        <span />
                                        <span>Pendente</span>
                                    </span>
                                    <span>15 / ABR / 2020</span>
                                </td>
                                <td>
                                    <img src={iconMore} />
                                </td>
                            </tr>
                            <tr>
                                <td className="tdSpan" >
                                    <span>Samuel Goulart</span>
                                    <span>example@email.com</span>
                                </td>
                                <td>Aluno</td>
                                <td>19 anos</td>
                                <td>(11) 98751 - 2020</td>
                                <td className="tdSpan">
                                    <span className="concluded" >
                                        <span />
                                        <span>Pendente</span>
                                    </span>
                                    <span>15 / ABR / 2020</span>
                                </td>
                                <td>
                                    <img src={iconMore} />
                                </td>
                            </tr>
                            <tr>
                                <td className="tdSpan" >
                                    <span>Samuel Goulart</span>
                                    <span>example@email.com</span>
                                </td>
                                <td>Aluno</td>
                                <td>19 anos</td>
                                <td>(11) 98751 - 2020</td>
                                <td className="tdSpan">
                                    <span className="concluded" >
                                        <span />
                                        <span>Pendente</span>
                                    </span>
                                    <span>15 / ABR / 2020</span>
                                </td>
                                <td>
                                    <img src={iconMore} />
                                </td>
                            </tr>
                            <tr>
                                <td className="tdSpan" >
                                    <span>Samuel Goulart</span>
                                    <span>example@email.com</span>
                                </td>
                                <td>Aluno</td>
                                <td>19 anos</td>
                                <td>(11) 98751 - 2020</td>
                                <td className="tdSpan">
                                    <span className="concluded" >
                                        <span />
                                        <span>Pendente</span>
                                    </span>
                                    <span>15 / ABR / 2020</span>
                                </td>
                                <td>
                                    <img src={iconMore} />
                                </td>
                            </tr>
                        </tbody>

                        <tfoot>
                            <div>

                            </div>
                        </tfoot>

                    </Table>
                </DivContainer>
            </div>
        </Container >

    );
}

export default Validation;