import { Container } from "./styles";

function ProfilePicture({ name, profile_picture, style }) {
    const nameInitlias = () => {

        if (profile_picture === undefined || profile_picture === null) {
            name.split(" ")
            return (name[0].charAt(0) + "" + name[1].charAt(0)).toUpperCase();
        } else {
            return true
        }
    }

    return (
        <Container >
            <div className={style.style}>
                <div>
                    {nameInitlias()}
                    {nameInitlias() === true && <img src={profile_picture} alt="Imagem de perfil" />}
                </div>
            </div>

        </Container>
    );
}

export default ProfilePicture;