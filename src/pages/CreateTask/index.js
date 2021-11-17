import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Input from "../../components/Input";
import NavTask from "../../components/NavTask";

import {
    ContainerTask,
    ReferenciaAnexo,
    ActivityDeliveryContainer,
    ContainerStudentAnexo,
    InputFile,
} from "./styles";

import iconAnexo from "../../assets/iconAnexo/Group.svg"
import imageHttpError503 from "../../assets/alert/imageHttpError503.svg"

import { useState } from "react";

import plusSign from "../../assets/iconsGlobal/plusSign.svg"
import BtnSubmit from "../../components/BtnSubmit";
import { api } from "../../services/api";
import Swal from "sweetalert2";


function CreateTask() {

    const [discipline, setDiscipline] = useState([]);


    const [inputs, setInput] = useState([{ id: 'link' }])


    const [filesMax, setFilesMax] = useState(1)

    const handleAddInputs = async () => {

        const itensCopy = Array.from(inputs);

        if (inputs.length < 3) {
            itensCopy.push({ id: `link${filesMax}` });

            setFilesMax(filesMax + 1)
        }

        if (inputs.length === 3) {
            alert("O número máximo é de 3 links")
        }

        setInput(itensCopy);

    }

    const [formTask, setFormTesk] = useState({
        name: "",
        description: "",
        date_delivery: "",
        spots: "",
        link: "",
        link1: "",
        link2: "",
        file: "",
        file1: "",
        file2: "",
    });


    const handleInput = (e) => {
        setFormTesk({ ...formTask, [e.target.id]: e.target.value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            let data = new FormData();

            data.append("name", formTask.name);
            data.append("description", formTask.description);
            data.append("date_delivery", formTask.date_delivery);
            data.append("spots", formTask.spots);
            data.append("link", formTask.link);
            data.append("link1", formTask.link1);
            data.append("link2", formTask.link2);
            data.append("file", "");
            data.append("file1", "");
            data.append("file2", "");


            await api.post(`tasks/${discipline.id}`, data, {
                headers: {
                    "content-type": "multipart/form-data"
                }
            })

            successAlert("Tarefa criada com sucesso");

        } catch (error) {

            if (error.response === undefined) {
                httpError503()

            } else {
                errorAlert(error.response.data)
            }

        }
    }

    const successAlert = (text) => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${text}`,
            showConfirmButton: false,
            timer: 1500
        })
    }

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

    const errorAlert = (error, textFooter) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${error.error}`,
            footer: `${textFooter}`
        })
    }


    return (
        <>
            <Header />
            <Nav />
            <NavTask setProps={setDiscipline} />

            <form onSubmit={handleSubmit} >
                <ContainerTask>
                    <div id="taskHeader" >
                        <div className="titulo">
                            <p>Preencha os campos para adicionar uma tarefa</p>
                        </div>

                        <div>
                            <BtnSubmit
                                width="247px"
                                text="Criar tarefa"
                            />

                        </div>
                    </div>

                    <div>
                        <Input
                            id="name"
                            label="Nome da Tarefa"
                            width="423px"
                            height="63px"
                            handler={handleInput} />

                        <div id="taskDescription" >
                            <label>Descrição da Tarefa:</label>
                            <textarea
                                id="description"
                                rows="5"
                                cols="30"
                                handler={handleInput} />
                        </div>

                        <Input
                            id="date_delivery"
                            label="Data de entrega"
                            type="date"
                            height="63px"
                            width="423px"
                            handler={handleInput} />

                        <Input
                            id="spots"
                            label="Pontos"
                            type="number"
                            width="423px"
                            height="63px"
                            handler={handleInput} />
                    </div>
                </ContainerTask>

                <ActivityDeliveryContainer>

                    <ContainerStudentAnexo>
                        <div>
                            <ReferenciaAnexo>
                                <div id="title" >
                                    <span>Material de referência </span>
                                </div>

                                <div class="subTitle" >
                                    <span>Links</span>
                                </div>

                                {inputs.map(input => (
                                    <div class="inputs" >
                                        <Input
                                            type="url"
                                            id={input.id}
                                            handler={handleInput}
                                            width="380px"
                                        />

                                        <img src={plusSign} onClick={() => handleAddInputs()} />
                                    </div>
                                ))}

                                <div class="subTitle" >
                                    <span>Arquivos</span>
                                </div>

                                <InputFile>
                                    <label>
                                        Selecione um arquivo
                                        <input type="file" />
                                    </label>

                                </InputFile>


                            </ReferenciaAnexo>

                            {/* <div id="imageAnexo">
                            <img src={iconClip} />
                            <p>Anexo</p>
                        </div> */}
                        </div>

                    </ContainerStudentAnexo>
                </ActivityDeliveryContainer>
            </form>

        </>
    );
}

export default CreateTask;