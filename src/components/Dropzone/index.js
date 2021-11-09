import Dropzone from "react-dropzone";
import { DropContainer, UploadMessage } from "./styles";


function DropZone(props) {

    const renderDragMessage = (isDragActive, isDragReject) => {

        if (!isDragActive) {
            return <UploadMessage>Arraste o arquivo aqui...</UploadMessage>;
        }

        if (isDragReject) {
            return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;
        }

        return <UploadMessage type="success">Solte o arquivo aqui</UploadMessage>;
    };
    
    const { onUpload } = props;

    return (
        
        <Dropzone accept="" onDropAccepted={onUpload} >
            {({ getRootProps, getInputProps, isDragActive, isDragReject }) =>
                <DropContainer
                    {...getRootProps()}
                    isDragActive={isDragActive}
                    isDragReject={isDragReject}
                >
                    <input {...getInputProps()} />
                    {renderDragMessage(isDragActive, isDragReject)}

                </DropContainer>
            }
        </Dropzone>
    );
}

export default DropZone;