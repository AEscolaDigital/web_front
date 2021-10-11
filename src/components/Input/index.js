import { Container } from "./styles";

function Input({ id, value, handler, label, width, type, colorLabel,className, ...rest }) {

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
                    type={type}
                />
                <span className={className} style={{
                    backgroundColor: colorLabel,
                }
                } >{label}</span>
            </label>
        </Container>
    );
}

export default Input;