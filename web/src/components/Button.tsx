import React from 'react'
import styled from 'styled-components'
import { Colors } from '../utils/colors'

const Btn = styled.button`
  width: 100%;
  height: 60px;
  background: ${Colors.colorPrimary};
  border: 0;
  border-radius: 8px;
  color: ${Colors.white};
  font-weight: 500;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
`

interface ButtonProps {
  text?: string
  type?: "submit" | "button" | "reset" | undefined
  icon?: any
}

export const Button: React.FC<ButtonProps> = ({text, type, icon}) => {
    return (
      <Btn type={type}>{icon}{text}</Btn>
    )
}