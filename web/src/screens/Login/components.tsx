import styled from "styled-components"
import { Colors } from "../../utils/colors"
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FormContainer = styled.section`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;
`

export const Form = styled.form`
  margin-top: 100px;
`

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 32px;
` 
export const Linkto = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 40px;
  color: ${Colors.colorPrimary};
  font-size: 18px;
  text-decoration: none;
  font-weight: 500;
`