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
import { useState } from "react";

import plusSign from "../../assets/iconsGlobal/plusSign.svg"
import BtnSubmit from "../../components/BtnSubmit";


function CreateTask() {

    const [discipline, setDiscipline] = useState();

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


    console.log(formTask);

    const handleInput = (e) => {
        setFormTesk({ ...formTask, [e.target.id]: e.target.value });
    };


    return (
        <>
            <Header />
            <Nav />
            <NavTask setProps={setDiscipline} />

            <form>
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
                            handler={handleInput}/>

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
                                            type="text"
                                            id={input.id} 
                                            handler={handleInput}
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