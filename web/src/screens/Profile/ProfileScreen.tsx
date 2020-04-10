import React, { useEffect, useState } from 'react'
import { Container, Title, UL, LI } from './components'
import { Header } from '../../components/Header'
import { Card } from '../../components/Card'
import { api } from '../../services/api'

export const ProfileScreen: React.FC<{}> = ({}) => {
    const [incidents, setIncidents] = useState([])
    const [deleted, setDeleted] = useState(false)
    const [idDeleted, setIdDeleted] = useState()
    const ongId = localStorage.getItem('ongId')

    useEffect(() => {
        //@ts-ignore
        setIncidents(incidents.filter(inciden => inciden.id !== idDeleted))
    }, [deleted])
    
    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data)
        })
    }, [ongId])

    return (
        <Container>
            <Header/>
            <Title>Casos Cadastrados</Title>
            
            <UL>
                {incidents.map((incident) => 
                <LI>
                    <Card incident={incident} setDeleted={setDeleted} setIdDeleted={setIdDeleted}/>
                </LI>
                )}
            </UL>
        </Container>
    )
}