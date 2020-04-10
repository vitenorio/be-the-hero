import React, { useState } from 'react'
import { logo } from '../../assets'
import { Container, Linkto } from '../Login/components'
import { FiArrowLeft } from 'react-icons/fi'
import { Sizes } from '../../utils/sizes'
import { Colors } from '../../utils/colors'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Content, SectionContent, Title, Description, InputUf, InputGroup } from './components'
import { Ong } from '../../services/types'
import { useHistory } from 'react-router-dom'
import { api } from '../../services/api'

export const RegisterScreen: React.FC<{}> = ({}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsApp] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUf] = useState('')

    const history = useHistory()

    const handleRegister = async (e: any) => {
      e.preventDefault()
      const data: Ong = {
          name,
          email,
          whatsapp,
          city,
          uf
      }

      try {
        const response = await api.post('/ongs', data)
        alert(`Seu ID de acesso: ${response.data.id}`)
        history.push("/")
    } catch(e) {
        alert(`Erro no cadastro, tente novamente.`)
    }}

    return (
        <Container>
            <Content>
                <SectionContent>
                    <img src={logo} alt="Be The Hero"/>
                    <Title>Cadastro</Title>
                    <Description>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</Description>
                    <Linkto to="/">
                        <FiArrowLeft size={Sizes.regular} color={Colors.colorPrimary} style={{marginRight: 8}}/>
                        Voltar para Login
                    </Linkto>
                </SectionContent>
                <form onSubmit={handleRegister}>
                    <Input name={name} setValue={setName}text={'Nome da Ong'}/>
                    <Input name={email} setValue={setEmail} text={'Email'}/>
                    <Input name={whatsapp} setValue={setWhatsApp} text={'WhatApp'}/>
                    <InputGroup>
                        <Input name={city} setValue={setCity} text={'Cidade'}/>
                        <InputUf value={uf} onChange={(e:any) => setUf(e.target.value)} placeholder={'UF'}/>
                    </InputGroup>

                    <Button type={'submit'} text={'Cadastrar'}/>
                </form>
            </Content>
        </Container>
    )
}