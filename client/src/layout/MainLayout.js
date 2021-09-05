import React from 'react'
import { Container } from 'react-bootstrap'

function MainLayout(props) {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export default MainLayout
