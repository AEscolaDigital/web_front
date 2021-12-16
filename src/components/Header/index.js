import { Container, Card } from "./styles";

import iconeMagnifier from "../../assets/header/iconeMagnifier.svg"
import configurationIcon from "../../assets/header/configurationIcon.svg"
import puzzleIcon from "../../assets/header/puzzleIcon.svg"
import downloadIcon from "../../assets/header/downloadIcon.svg"
import iconExit from "../../assets/header/iconExit.svg"
import camera from "../../assets/header/camera.svg"


import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { getUser, signOut } from "../../services/security";
import ProfilePicture from "../ProfilePicture";


function Header() {

    const [toogle, setToogle] = useState(true);
    const [value, setOpenClose] = useState('none');
    const [valueHeight, setHeight] = useState('0px');

    useEffect(() => {
        setOpenClose(() => toogle ? 'none' : 'block');
        setHeight(() => toogle ? '0px' : '365px');
    }, [toogle]);

    let profilePictureStyle = {
        style: "style2"
    };

    return (
        <Container>
            <div></div>
            <div>
                <input type="text" placeholder="Pesquisar" />
                <button type="submit">
                    <img src={iconeMagnifier} alt="ícone de uma lupa" />
                </button>
            </div>

            <div id="profilePicture" onClick={e => setToogle(state => !state)} >
                <ProfilePicture
                    style={profilePictureStyle}
                    name={getUser().name}
                />
            </div>

            <Card style={{
                height: valueHeight,
            }}
            srcCamera={camera}>
                <div style={{
                    display: value,
                }} >
                    <div id="profile" >
                        <ProfilePicture
                            id="profilePictureCard"
                            style={profilePictureStyle}
                            name={getUser().name}
                        />
                    </div>
                    <div>{getUser().name}</div>
                    <div>{getUser().email}</div>
                    <hr />
                    <Link to="/teams" >

                        <div>
                            <img src={configurationIcon} alt="Icone de configuração" />
                        </div>
                        <div>Configuraçãoes</div>
                    </Link>
                    <Link to="/teams">

                        <div>
                            <img src={puzzleIcon} alt="Ícone de quebra-cabeça" />
                        </div>
                        <div>Atalhos</div>
                    </Link>
                    <Link to="/teams" >

                        <div>
                            <img src={downloadIcon} alt="Ícone de download" />
                        </div>
                        <div>Download do aplicativo</div>

                    </Link>
                    <hr />
                    <Link to="/" onClick={() => signOut()} >
                        <div>
                            <img src={iconExit} alt="Icone de sair" />
                        </div>
                        <div>Saída</div>
                    </Link>
                </div>
            </Card>
        </Container>
    );
}

export default Header;