import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout";
import {Container, Jumbotron, Row, Col} from 'reactstrap';
import '../styles/main.css';
import Demos from "../components/demos";
import {motion} from 'framer-motion';

const headingVariants = {
  hidden: {
    opacity: 0,
    scale: 1
  },
  visible: {
    opacity: 1,
    scale: 1.5,
    transition: {
      delay: 1,
      duration: 3,
      type: 'spring',
      stiffness: 400

    }
  }
}

export default function Home() {
  return (
    <>
      <Layout>
      <Jumbotron className=" jumbo">
        <Container className="text-center my-5">
        <motion.h1 className="h3 font-weight-bold" 
        variants={headingVariants}
        initial="hidden"
        animate="visible"
        >
          Create beautiful websites with ease
        </motion.h1>
        <motion.p className="lead"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
        >So easy that you won't forget.</motion.p>
        </Container>
      </Jumbotron>
      <Container className="bg-light box">
          <Row>
              <Col md="4">
                <Row>
                  <Col xs="4" className="text-center mt-4">
                    <img width="50%" src="../../assets/price-tag.png"></img>
                  </Col>
                  <Col xs="8" className="my-4"><h4>One click install</h4>
                  <p>One click is all you need to start using demo that you like!</p>
                  </Col>
                </Row>
              </Col>

              <Col md="4">
                <Row>
                <Col xs="4" className="text-center mt-4">
                  <img width="50%" src="../../assets/price-tag.png"></img></Col>
                  <Col xs="8" className="my-4"><h4>One click install</h4>
                  <p>One click is all you need to start using demo that you like!</p>
                  </Col>
                  </Row> 
              </Col>
              
              <Col md="4">
                <Row>
                <Col xs="4" className="text-center mt-4">
                  <img width="50%" src="../../assets/price-tag.png"></img></Col>
                  <Col  xs="8" className="my-4"><h4>One click install</h4>
                  <p>One click is all you need to start using demo that you like!</p>
                  </Col>
                  </Row> 
              </Col>
          </Row>
      </Container>
      <Demos />
      <Container>
        <Row>
              <Col xs="6" md="3">
                <Row>
                  <Col xs="12" className="text-center mt-4">
                    <img width="50%" src="../../assets/price-tag.png"></img></Col>
                  <Col xs="12" className="my-4"><h4>One click install</h4>
                  <p>One click is all you need to start using demo that you like!</p>
                  </Col>
                </Row>
              </Col>
              <Col xs="6" md="3" >
                <Row>
                <Col xs="12" className="text-center mt-4">
                  <img width="50%" src="../../assets/price-tag.png"></img></Col>
                  <Col xs="12" className="my-4"><h4>One click install</h4>
                  <p>One click is all you need to start using demo that you like!</p>
                  </Col>
                  </Row> 
              </Col>
              <Col xs="6" md="3">
                <Row>
                <Col xs="12" className="text-center mt-4">
                  <img width="50%" src="../../assets/price-tag.png"></img></Col>
                  <Col  xs="12" className="my-4"><h4>One click install</h4>
                  <p>One click is all you need to start using demo that you like!</p>
                  </Col>
                  </Row> 
              </Col>
              <Col xs="6" md="3">
                <Row>
                <Col xs="12" className="text-center mt-4">
                  <img width="50%" src="../../assets/price-tag.png"></img></Col>
                  <Col  xs="12" className="my-4"><h4>One click install</h4>
                  <p>One click is all you need to start using demo that you like!</p>
                  </Col>
                  </Row> 
              </Col>
          </Row>
      </Container>
      </Layout>
    </>
  )
}
