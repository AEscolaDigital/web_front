import React from 'react';
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import { Container, Section, } from "./styles";
import memberCreate from "../../assets/memberClassCreate/createMember.svg";
import classCreate from "../../assets/memberClassCreate/createClass.svg";
import { Link } from 'react-router-dom';



function MemberClassCreate() {
    return (
        <Container>
            <Header />
            <Nav />


            <Section>
                <Link to="/CreateClass">
                <div>
                   
                    <img src={classCreate} />
                    <p>Criar Turmas</p>
                </div>
                </Link>

                <Link to="/AddMember">
                <div>
                    <img src={memberCreate} />
                    <p>Adicionar Membros</p>
                </div>
                </Link>
            </Section>
        </Container>
    );
}



export default MemberClassCreate;