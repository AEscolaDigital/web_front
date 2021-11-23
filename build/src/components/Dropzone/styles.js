import styled, { css } from "styled-components";

const dragActive = css`
  border-color: #78e5d5;
`;

const dragReject = css`
  border-color: #e57878;
`;

export const DropContainer = styled.div.attrs({
  className: "dropzone"
})`
   background-color: var(--color-blue);
   height: 70px;

  border: 2px dashed #FFFF;
  border-radius: 4px;

  cursor: pointer;
  transition: height 0.2s ease;

  ${props => props.isDragActive && dragActive};
  ${props => props.isDragReject && dragReject};
`;

const messageColors = {
  default: "#FFFFFF",
  error: "#e57878",
  success: "#78e5d5"
};

export const UploadMessage = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${props => messageColors[props.type || "default"]};
  padding: 23px 0;
`;