import styled from "styled-components";
import { Colors } from "../../utils/colors";

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;
`
export const Title = styled.h1`
  margin-top: 80px;
  margin-bottom: 24px;
`

export const UL = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  list-style: none;
`
export const LI = styled.li`
  background: ${Colors.white};
  padding: 24px;
  border-radius: 8px;
  position: relative;
`