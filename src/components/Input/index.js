import { Container } from "./styles";

function Input({ id, value, handler, label, width, ...rest }) {
    return (
        <Container>
            <label>
                <input style={{
                    width: width,
                }}
                    id={id}
                    {...rest}
                    placeholder=" "
                    value={value}
                    onChange={handler}
                />
                <span>{label}</span>
            </label>
        </Container>
    );
}

export default Input;