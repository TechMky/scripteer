import React from 'react'
import { Layout, Row, Col } from "antd";

const { Content, Header, Footer } = Layout

function MainLayout(props) {
    return (
        <Layout>
            <Header></Header>
            <Content>
                <Row justify='center'>
                    <Col span={22}>
                        {props.children}
                    </Col>
                </Row>
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    )
}

export default MainLayout
