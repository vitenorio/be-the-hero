import React, { useState } from 'react'
import { logo, heroes } from '../../assets'
import { FiLogIn} from 'react-icons/fi'
import { Sizes } from '../../utils/sizes'
import { Colors } from '../../utils/colors'
import { Input } from '../../components/Input'
import { Container, FormContainer, Form, Title, Linkto } from './components'
import { Button } from '../../components/Button'
import { useHistory } from 'react-router-dom'
import { api } from '../../services/api'

export const LoginScreen: React.FC<{}> = () => {
    const [id, setID] = useState('')

    const history = useHistory()

    const handleLogin = async (e: any) => {
        e.preventDefault()

        try {
            const response = await api.post('/sessions', {id})
            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', response.data.name)
            history.push("/profile")
        } catch(e) {
            alert(`Falha no login, tente novamente.`)
        }}

    return (
        <Container>
            <FormContainer>
                <img src={logo} alt="Be The Hero"/>

                <Form onSubmit={handleLogin}>
                    <Title>Faça seu logon</Title>
                    <Input name={id} setValue={setID} text={'Seu ID'}/>
                    <Button type={"submit"} text={"Entrar"}/>
                    
                    <Linkto to="/register">
                        <FiLogIn size={Sizes.regular} color={Colors.colorPrimary} style={{marginRight: 8}}/>
                        Não tenho cadastro
                    </Linkto>
                </Form>
            </FormContainer>
            <img src={heroes} alt="Heroes"/>
        </Container>
    )
}