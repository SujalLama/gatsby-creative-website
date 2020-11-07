import React from 'react'
import { Container, Row , Col } from 'reactstrap'

const Demos = () => {
    return (
        <Container className="my-5">
            <h3 className="text-center mb-3"> Demos </h3>
            <Row>
                <Col  xs="12" md="4" className="mt-3">
                    <img width="100%" src="../../assets/website.jpg"></img>
                </Col>
                <Col xs="12" md="4" className="mt-3">
                    <img width="100%" src="../../assets/website.jpg"></img>
                </Col>
                <Col xs="12" md="4" className="mt-3">
                    <img width="100%" src="../../assets/website.jpg"></img>
                </Col>
            </Row>
            <Row className="my-3">
                <Col xs="12" md="4" className="mt-3">
                    <img width="100%" src="../../assets/website.jpg"></img>
                </Col>
                <Col xs="12" md="4" className="mt-3">
                    <img width="100%" src="../../assets/website.jpg"></img>
                </Col>
                <Col xs="12" md="4" className="mt-3">
                    <img width="100%" src="../../assets/website.jpg"></img>
                </Col>
            </Row>
        </Container>
    )
}

export default Demos
