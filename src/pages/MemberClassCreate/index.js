import React from 'react';
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Card from "../../components/Card";
import { Container, Section, } from "./styles";
import memberCreate from "../../assets/memberClassCreate/createMember.svg";
import classCreate from "../../assets/memberClassCreate/createClass.svg";



function MemberClassCreate() {
    return (
        <Container>
            <Header />
            <Nav />


            <Section>
                <div>
                    {/* <div>
                        <img src={classCreate} onClick={e => setToogle(state => !state)}  /> 

                        <Card status={value} /> 
                    </div> */}

                    <img src={classCreate} />
                    <p>Criar Turmas</p>
                </div>


                <div>
                    {/* <div>
                        <img src={classCreate} />
                    </div> */}

                    <img src={memberCreate} />
                    <p>Adicionar Membros</p>
                </div>
            </Section>
        </Container>
    );
}



export default MemberClassCreate;