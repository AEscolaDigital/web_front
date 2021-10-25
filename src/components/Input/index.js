import { Container } from "./styles";

function Input({ id, value, handler, label, width, height, type, colorLabel, ...rest }) {
    return (
        <Container>
            <label>
                <input style={{
                    width: width,
                    height: height,
                }}
                    id={id}
                    {...rest}
                    placeholder=" "
                    value={value}
                    onChange={handler}
                    type={type}
                />
                <span style={{
                    backgroundColor: colorLabel,
                }
                } >{label}</span>
            </label>
        </Container>
    );
}

export default Input;