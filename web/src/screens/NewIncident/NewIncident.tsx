import React, { useState } from 'react'
import { Container, Title, Linkto } from '../Login/components'
import { Content, SectionContent, Description, TextArea } from './components'
import { logo } from '../../assets'
import { FiArrowLeft } from 'react-icons/fi'
import { Sizes } from '../../utils/sizes'
import { Colors } from '../../utils/colors'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { api } from '../../services/api'
import { useHistory } from 'react-router-dom'

export const NewIncident: React.FC<{}> = ({}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')

    const ongId = localStorage.getItem('ongId')

    const history = useHistory()

    const handleNewIncident = async (e: any) => {
        e.preventDefault()

        const data = {
            title,
            description,
            value
        }

        try {
            await api.post('/incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })

            history.push('/profile')
        } catch (e) {
            alert('Erro ao cadastrar caso, tente novamente.')
        }
    }

    return (
        <Container>
            <Content>
                <SectionContent>
                    <img src={logo} alt="Be The Hero"/>
                    <Title>Cadastrar novo caso</Title>
                    <Description>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</Description>
                    <Linkto to="/profile">
                        <FiArrowLeft size={Sizes.regular} color={Colors.colorPrimary} style={{marginRight: 8}}/>
                        Voltar para Home
                    </Linkto>
                </SectionContent>
                <form onSubmit={handleNewIncident}>
                    <Input name={title} setValue={setTitle} text={'Título do Caso'}/>
                    <TextArea value={description} onChange={(e: any) => setDescription(e.target.value)} placeholder={'Descrição'}/>
                    <Input name={value} setValue={setValue} text={'Valor em reais'}/>

                    <Button type={'submit'} text={'Cadastrar'}/>
                </form>
            </Content>
        </Container>
    )
}