import styled from "styled-components";
import { Colors } from "../../utils/colors";

export const Content = styled.div`
  width: 100%;
  padding: 96px;
  background: ${Colors.border};
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SectionContent = styled.section`
  width: 100%;
  max-width: 380px;
`

export const Title =  styled.h1`
  margin: 64px 0 32px;
  font-size: 32px;
` 

export const Description = styled.p`
  font-size: 18px;
  color: ${Colors.colorPrimary};
  line-height: 32px;
`

export const FormRegister = styled.form`
  width: 100%;
  max-width: 450px;
`
export const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  color: ${Colors.placeholder};
  border: 1px solid ${Colors.border};
  border-radius: 8px;
  padding: 8px 24px;
  margin-top: 8px;
  resize: vertical;
`