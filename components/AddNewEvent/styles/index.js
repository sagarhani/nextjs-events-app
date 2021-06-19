import styled from "styled-components";
import { colors, flexDisplayCenter } from "../../common/tokens";
import Image from "next/image";

export const AddNewEventPageContainer = styled.div`
  ${flexDisplayCenter()}
`;

export const AddNewEventFormContainer = styled.div`
  ${flexDisplayCenter()}
  padding: 1.75em 1.75em 2em;
  flex-direction: row;
  margin: 20px;
  border-radius: 6px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 1px 3px 0 ${colors.pageShadow};
  width: 80%;
`;

export const AddNewEventTextInput = styled.input`
  height: 36px;
  width: 100%;
  height: 36px;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  color: #000000;
  border: none;
  border-bottom: 2px dashed #97979761;
  margin-bottom: 20px;

  :focus-visible {
    outline: none;
  }

  ::placeholder {
    /* color: red; */
  }
`;

export const AddNewEventTextArea = styled.textarea`
  width: 100%;
  height: 200px;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  color: #000000;
  resize: none;
  border: none;
  border-bottom: 2px dashed #97979761;
  margin-bottom: 20px;

  :focus-visible {
    outline: none;
  }

  ::placeholder {
    /* color: red; */
  }
`;

export const StyledImage = styled(Image)`
  border-radius: 4px;
  object-fit: cover;
`;

export const ImageUploadContainer = styled.div`
  border: 1px dashed #aeaeae;
  width: inherit;
  height: 150px;
  ${flexDisplayCenter()}
  background-color: #efefef;

  :hover {
    cursor: pointer;
  }
`;

export const ImageInput = styled.input``;

export const FormFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  width: inherit;
  margin-top: 16px;
  align-items: center;
`;

export const ImagePreviewContainer = styled.div`
  width: 400px;
  height: 250px;
  position: relative;
`;

export const CancelUpload = styled.button`
  position: absolute;
  top: 10px;
  right: 16px;
  opacity: 0.5;
  padding: 4px;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;
