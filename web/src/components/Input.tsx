import React from 'react'
import styled from 'styled-components'
import { Colors } from '../utils/colors'

const TextField = styled.input`
  width: 100%;
  height: 60px;
  color: ${Colors.placeholder};
  border: 1px solid ${Colors.border};
  border-radius: 8px;
  padding: 0 24px;
  margin-top: 8px;
`
interface InputProps {
  text: string
  name?: string
  setValue?: any
}

export const Input: React.FC<InputProps> = ({text, name, setValue}) => {
    return (
        <TextField value={name} onChange={(e) => setValue(e.target.value)} placeholder={text}/>
    )
}