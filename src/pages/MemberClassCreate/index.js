import React from 'react';
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import { Section } from "./styles";
import memberCreate from "../../assets/memberClassCreate/createMember.svg";
import classCreate from "../../assets/memberClassCreate/createClass.svg";
import { Link } from 'react-router-dom';


function MemberClassCreate() {
    return (
        <>
            <Header />
            <Nav />
            <Section>
                <Link to="/createClass">
                    <div>

                        <img src={classCreate} alt="" />
                        <p>Criar Turmas</p>
                    </div>
                </Link>

                <Link to="/addMember">
                    <div>
                        <img src={memberCreate} alt="" />
                        <p>Adicionar Membros</p>
                    </div>
                </Link>
            </Section>
        </>
    );
}



export default MemberClassCreate;