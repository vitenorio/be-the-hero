import React from 'react'
import { FiTrash2 } from 'react-icons/fi'
import styled from 'styled-components'
import { Colors } from '../utils/colors'
import { Incident } from '../services/types'
import { api } from '../services/api'

const Icon = styled.button`
  position: absolute;
  right: 24px;
  top: 24px;
  border: 0;
  background: transparent;
`

const Title = styled.strong`
  display: block;
  margin-bottom: 10px;
  color: ${Colors.placeholder};
`

const Content = styled.p`
  color: #737380;
  line-height: 21px;
  font-size: 16px;
  margin-bottom: 12px;
`

export const Card: React.FC<{incident: Incident, setDeleted: any, setIdDeleted: any }> = ({incident, setDeleted, setIdDeleted}) => {
  const ongId = localStorage.getItem('ongId')

  const handleDelete = async (id: any) => {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      })
      setIdDeleted(id)
      setDeleted(true)
    } catch (e) {
      alert('Erro ao deletar caso, tente novamente.')
    }
   }

    return (
        <div>
            <Title>CASO:</Title>
            <Content>{incident.title}</Content>

            <Title>DESCRIÇÃO:</Title>
            <Content>{incident.description}</Content>

            <Title>VALOR:</Title>
            <Content>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</Content>

            <Icon type="button" onClick={() => handleDelete(incident.id)}>
                <FiTrash2 size={20} color="a8a8b3"/>
            </Icon>
        </div>
    )
}