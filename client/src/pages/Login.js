import React, { useContext } from 'react'
import { withRouter } from 'react-router';
import AppContext from '../context/AppContext';
import { getToken } from '../queries/service';
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { BASE_URL } from '../urlLinks';

function Login(props) {


    const { setToken } = useContext(AppContext)



    const onFinish = async (values) => {
        console.log('Success:', values);
        const { email, password} = values

        const { err, token } = await getToken(email, password)
        if (!err) {
            setToken(token)
            props.history.push(BASE_URL)
        }
    };

    // const onFinishFailed = (errorInfo) => {
    //     console.log('Failed:', errorInfo);
    // };

    return (
        <Row justify="center" >
            <Col span={12} md={8}>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ email: "", password: "" }}
                    onFinish={onFinish}
                    style={{margin: '1rem 1rem'}}
                >
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your Email!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </Col>

        </Row>

    );
}

export default withRouter(Login)
