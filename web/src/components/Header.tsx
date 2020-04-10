import React from 'react'
import { Button } from './Button'
import { Colors } from '../utils/colors'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import { logo } from '../assets'
import { FiPower } from 'react-icons/fi'
import { Sizes } from '../utils/sizes'

export const BtnLink = styled(Link)`
  width: 260px;
  height: 60px;
  background: ${Colors.colorPrimary};
  border: 0;
  border-radius: 8px;
  color: ${Colors.white};
  font-weight: 500;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  margin-left: auto;
`

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
`

const Span = styled.span`
  font-size: 20px;
  margin-left: 24px;
`

const Icon = styled.button`
  height: 60px;
  width: 60px;
  border-radius: 4px;
  border: 1px solid ${Colors.border};
  margin-left: 16px;
`

export const Header: React.FC<{}> = ({}) => {
    const ongName = localStorage.getItem('ongName')
    const history = useHistory()

    const handleLogout = () => {
      localStorage.clear()
      history.push("/")
    }

    return (
        <HeaderContainer>
            <img src={logo} alt="Be The Hero" height={64}/>
            <Span>Bem vinda, {ongName}</Span>
            <BtnLink className="link" to="/incidents/new">Cadastrar novo caso</BtnLink>
            <Icon type={"button"} onClick={handleLogout}>
                <FiPower size={32} color={Colors.colorPrimary}/>
            </Icon> 
        </HeaderContainer>
    )
}