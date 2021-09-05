import React, { useContext, useState } from 'react'
import { Form, Button } from "react-bootstrap";
import { withRouter } from 'react-router';
import UserContext from '../context/UserContext';
import { getToken } from '../queries/service';

function Login(props) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {setToken} = useContext(UserContext)


    const handleSubmit = async e => {
        e.preventDefault()

        const {err, token} = await getToken(email, password)
        if (!err) {
            setToken(token)
            props.history.push('/')
        }
    }


    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default withRouter(Login)
