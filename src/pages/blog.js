import React from 'react'
import Layout from '../components/layout'
import {Card, CardImg, CardBody, CardTitle, CardText, 
    Col, Row, Jumbotron, 
    ListGroup, ListGroupItem,
    Pagination, PaginationItem, PaginationLink, Container} from 'reactstrap'
import {Link} from 'gatsby';


const Blog = () => {
    return (
         <div className="bg-secondary">
        <Layout>
            <Jumbotron>
               <Row>
                   <Col md="10" className="mb-3">
                   <h4>Blog Masonry 2.0</h4>
                   </Col >
                   <Col md="2">
                   <Pagination>
                        <PaginationItem >
                            <PaginationLink first href="#"></PaginationLink>
                        </PaginationItem>
                        <PaginationItem >
                            <PaginationLink href="#">
                                <Link to="/" style={{color: '#000'}}>Home</Link>
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem active>
                            <PaginationLink  href="#">
                                <Link to="/blog" style={{color: '#000'}}>Blog</Link>
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem >
                            <PaginationLink last href="#"></PaginationLink>
                        </PaginationItem>
                </Pagination>
                   </Col>
               </Row>                
             </Jumbotron>                       
             <Container>
                 <Row>
                     <Col md="4">
                         <Row>
                             <Col md="8">
                                <input type="text" className="form-control shadow" placeholder="Search here..."></input>
                            </Col>
                         </Row>
                        <Row className="mt-5 mb-3">
                            <h4>Categories</h4>
                        </Row>
                        <Row className="mb-4">
                             <ListGroup className="shadow">
                                <ListGroupItem>Cras justo odio</ListGroupItem>
                                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                <ListGroupItem>Morbi leo risus</ListGroupItem>
                                <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                                <ListGroupItem>Vestibulum at eros</ListGroupItem>
                            </ListGroup>
                        </Row>
                     </Col>
                     <Col md="8">
                         <Row>
                             <Col>
                                <Card>
                                     <CardImg top width="100%" src="../../assets/website.jpg" alt="Card image cap" />
                                        <CardBody>
                                            <p>{new Date().getFullYear()}</p>
                                            <CardTitle tag="h5">Card title</CardTitle>
                                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                            <hr></hr>
                                            <p>Categories</p>
                                        </CardBody>
                                </Card>
                             </Col>

                             <Col>
                                <Card>
                                     <CardImg top width="100%" src="../../assets/website.jpg" alt="Card image cap" />
                                        <CardBody>
                                            <p>{new Date().getFullYear()}</p>
                                            <CardTitle tag="h5">Team Player</CardTitle>
                                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                            <hr></hr>
                                            <p>Categories</p>
                                        </CardBody>
                                </Card>
                             </Col>
                         </Row>


                            <Row className="my-4">
                             <Col>
                                <Card>
                                     <CardImg top width="100%" src="../../assets/website.jpg" alt="Card image cap" />
                                        <CardBody>
                                            <p>{new Date().getFullYear()}</p>
                                            <CardTitle tag="h5">Card title</CardTitle>
                                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                            <hr></hr>
                                            <p>Categories</p>
                                        </CardBody>
                                </Card>
                             </Col>

                             <Col>
                                <Card>
                                     <CardImg top width="100%" src="../../assets/website.jpg" alt="Card image cap" />
                                        <CardBody>
                                            <p>{new Date().getFullYear()}</p>
                                            <CardTitle tag="h5">Team Player</CardTitle>
                                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                            <hr></hr>
                                            <p>Categories</p>
                                        </CardBody>
                                </Card>
                             </Col>
                         </Row>

                     </Col>
                 </Row>
                 
             </Container>
        </Layout>
        </div>
    )
}

export default Blog
