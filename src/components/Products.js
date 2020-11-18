import React from 'react'
import './css/products.css'
import veg from '../images/veg.jpg';
import tomato2 from '../images/tomato2.jpg';
import grain from '../images/grain.jpg';
import vegetables from '../images/vegetables.jpg'
import spices from '../images/spices.jpg'
import rice from '../images/rice.jpg'
import Tomatos from '../images/Tomatos.jpg'
import t1 from '../images/tomato3.jpg'
import sp from '../images/Spices1.jpg'
import rc from '../images/redchili.jpg'
import rc1 from '../images/Redcchili.jpg'
import Ap from '../images/Apple.jpg'
import pt from '../images/potato.jpg'
import { Container, Row, Col, Carousel, Card, Image, Button, Badge, Tab, Nav } from 'react-bootstrap/';




const Products = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Carousel className='my-3'>
                        <Carousel.Item >
                            <img className="d-block w-100 " src={tomato2} />
                            <Carousel.Caption className='text-white'>
                                <h1><strong>Tomato</strong></h1>
                                <h5>Get Farm fresh tomatos at less price !.</h5>

                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={grain}
                                alt="Third slide"
                            />
                            <Carousel.Caption className='text-white'>
                                <h1><strong>Grains</strong></h1>
                                <h5>Get 20% Discount on Grains You buy during offer period !</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 "
                                src={veg}
                                alt="Third slide"
                            />
                            <Carousel.Caption className='text-white'>
                                <h1 ><strong>Vegetables</strong></h1>
                                <h5>Farm fresh vegetables for you at Discount Price !.</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Row>
            </Container>

            {/* 3 cards start here>*/}


            <Container>
            <h1 className="text-center cat my-4"><strong>Shop With Category</strong></h1>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                   
                        <Nav variant="pills" className="flex-column my-3">
                            <Nav.Item >
                                <Nav.Link eventKey="first"><strong>Fruits</strong></Nav.Link>
                                <Nav.Link eventKey="second"><strong>Vegetables</strong></Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row className="cr">
                                <Col className="cr1" lg md="6" sm="12">
                                    <Card className="bg-dark text-white mx-2 my-3">
                                        <Card.Img src={spices} alt="Card image" roundedCircle />
                                        <Card.ImgOverlay>
                                            <Card.Title><h1 className="text-center text-white"><strong>Spices</strong></h1></Card.Title>
                                            <Card.Text><strong>
                                                Spices give aroma, color, flavor, and sometimes even texture to food.
                                            </strong>
                                            </Card.Text>
                                            <Card.Text><strong>spicy, sulfury, and woody.</strong></Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </Col>
                                <Col className="cr1" lg md="6" sm="12">
                                    <Card className="bg-dark text-white mx-2 my-3">
                                        <Card.Img src={rice} alt="Card image" roundedCircle />
                                        <Card.ImgOverlay>
                                            <Card.Title><h1 className="text-center text-white"><strong>Spices</strong></h1></Card.Title>
                                            <Card.Text><strong>
                                                Spices give aroma, color, flavor, and sometimes even texture to food.
                                                </strong>
                                            </Card.Text>
                                            <Card.Text><strong>spicy, sulfury, and woody.</strong></Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </Col>
                                <Col className="cr1" lg md="6" sm="12">
                                    <Card className="bg-dark text-white mx-2 my-3">
                                        <Card.Img src={vegetables} alt="Card image" roundedCircle />
                                        <Card.ImgOverlay>
                                            <Card.Title><h1 className="text-center text-white"><strong>Spices</strong></h1></Card.Title>
                                            <Card.Text><strong>
                                                Spices give aroma, color, flavor, and sometimes even texture to food.
                                                </strong>
                                            </Card.Text>
                                            <Card.Text><strong>spicy, sulfury, and woody.</strong></Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </Col>
                            </Row> 
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <Row className="cr">
                                <Col className="cr1" lg md="6" sm="12">
                                    <Card className="bg-dark text-white my-3">
                                        <Card.Img src={t1} alt="Card image" roundedCircle />
                                        <Card.ImgOverlay>
                                            <Card.Title><h1 className="text-center text-white"><strong>Spices</strong></h1></Card.Title>
                                            <Card.Text><strong>
                                                Spices give aroma, color, flavor, and sometimes even texture to food.
                                    </strong>
                                            </Card.Text>
                                            <Card.Text><strong>spicy, sulfury, and woody.</strong></Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </Col>
                                <Col className="cr1" lg md="6" sm="12">
                                    <Card className="bg-dark text-white my-3">
                                        <Card.Img src={vegetables} alt="Card image" roundedCircle />
                                        <Card.ImgOverlay>
                                            <Card.Title><h1 className="text-center text-white"><strong>Spices</strong></h1></Card.Title>
                                            <Card.Text><strong>
                                                Spices give aroma, color, flavor, and sometimes even texture to food.
                                    </strong>
                                            </Card.Text>
                                            <Card.Text><strong>spicy, sulfury, and woody.</strong></Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </Col>
                                <Col className="cr1" lg md="6" sm="12">
                                    <Card className="bg-dark text-white my-3">
                                        <Card.Img src={tomato2} alt="Card image" roundedCircle />
                                        <Card.ImgOverlay>
                                            <Card.Title><h1 className="text-center text-white"><strong>Spices</strong></h1></Card.Title>
                                            <Card.Text><strong>
                                                Spices give aroma, color, flavor, and sometimes even texture to food.
                                    </strong>
                                            </Card.Text>
                                            <Card.Text><strong>spicy, sulfury, and woody.</strong></Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </Col>
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                </Tab.Container>

                {/* <Card Starts Here> */}

                <h1 className="my-4"><strong>Shop For Fresh Products</strong></h1>

                <Row>
                    <Col className="mb-4" lg="4" md="6" >
                        <Card style={{ width: '18rem;margin:auto' }}>
                            <Card.Img variant="top" src={t1} />
                            <Card.Body>
                                <Card.Title><strong>Tomato</strong></Card.Title>
                                <Badge pill variant="primary" className="float-right">
                                    $12
                                </Badge><br />
                                <Card.Text className="my-2">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary" >Add to Cart</Button>
                                <Button variant="outline-primary" className="float-right">Quick View</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-4" lg="4" md="6">
                        <Card style={{ width: '18rem;margin:auto' }}>
                            <Card.Img variant="top" src={sp} />
                            <Card.Body>
                                <Card.Title><strong>Spices</strong></Card.Title>
                                <Badge pill variant="warning" className="float-right">
                                    $21
                                </Badge><br />
                                <Card.Text className="my-2">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary" >Add to Cart</Button>
                                <Button variant="outline-primary" className="float-right">Quick View</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-4" lg="4" md="6" >
                        <Card style={{ width: '18rem;margin:auto' }}>
                            <Card.Img variant="top" src={rc} />
                            <Card.Body>
                                <Card.Title><strong>Red Chili</strong></Card.Title>
                                <Badge pill variant="danger" className="float-right">
                                    $10
                                </Badge><br />
                                <Card.Text className="my-2">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary" >Add to Cart</Button>
                                <Button variant="outline-primary" className="float-right">Quick View</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-4" lg="4" md="6" >
                        <Card style={{ width: '18rem;margin:auto' }}>
                            <Card.Img variant="top" src={rc1} />
                            <Card.Body>
                                <Card.Title><strong>Red Chili</strong></Card.Title>
                                <Badge pill variant="secondary" className="float-right">
                                    $11
                                </Badge><br />
                                <Card.Text className="my-2">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary" >Add to Cart</Button>
                                <Button variant="outline-primary" className="float-right">Quick View</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-4" lg="4" md="6" >
                        <Card style={{ width: '18rem;margin:auto' }}>
                            <Card.Img variant="top" src={Ap} />
                            <Card.Body>
                                <Card.Title><strong>Apples</strong></Card.Title>
                                <Badge pill variant="danger" className="float-right">
                                    $50
                                </Badge><br />
                                <Card.Text className="my-2">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary" >Add to Cart</Button>
                                <Button variant="outline-primary" className="float-right">Quick View</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-4" lg="4" md="6" >
                        <Card style={{ width: '18rem;margin:auto' }}>
                            <Card.Img variant="top" src={pt} />
                            <Card.Body>
                                <Card.Title><strong>Potatos</strong></Card.Title>
                                <Badge pill variant="info" className="float-right">
                                    $20
                                </Badge><br />
                                <Card.Text className="my-2">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary" >Add to Cart</Button>
                                <Button variant="outline-primary" className="float-right">Quick View</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-4" lg="4" md="6" >
                        <Card style={{ width: '18rem;margin:auto' }}>
                            <Card.Img variant="top" src={t1} />
                            <Card.Body>
                                <Card.Title><strong>Tomato</strong></Card.Title>
                                <Badge pill variant="primary" className="float-right">
                                    $12
                                </Badge><br />
                                <Card.Text className="my-2">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary" >Add to Cart</Button>
                                <Button variant="outline-primary" className="float-right">Quick View</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-4" lg="4" md="6">
                        <Card style={{ width: '18rem;margin:auto' }}>
                            <Card.Img variant="top" src={sp} />
                            <Card.Body>
                                <Card.Title><strong>Spices</strong></Card.Title>
                                <Badge pill variant="secondary" className="float-right">
                                    $50
                                </Badge><br />
                                <Card.Text className="my-2">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary" >Add to Cart</Button>
                                <Button variant="outline-primary" className="float-right">Quick View</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-4" lg="4" md="6" >
                        <Card style={{ width: '18rem;margin:auto' }}>
                            <Card.Img variant="top" src={rc} />
                            <Card.Body>
                                <Card.Title><strong>Red Chili</strong></Card.Title>
                                <Badge pill variant="danger" className="float-right">
                                    $22
                                </Badge><br />
                                <Card.Text className="my-2">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary" >Add to Cart</Button>
                                <Button variant="outline-primary" className="float-right">Quick View</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Products;
