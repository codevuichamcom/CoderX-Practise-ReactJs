import React, { Component } from 'react';
import {
    Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap'

import axios from 'axios';

import { CartContext } from '../contexts/Cart';

import './Products.css';
export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            isLoading: false
        }
    }

    async componentDidMount() {
        this.setState({ isLoading: true })

        const response = await axios.get('https://6sdtw.sse.codesandbox.io/products');
        this.setState({ products: response.data });

        this.setState({ isLoading: false });
    }
    render() {
        const { products, isLoading } = this.state;
        return (
            <Container>

                <Row>
                    {
                        !isLoading ?
                            (products.map(product => (
                                <Col key={product.id} sm="3">
                                    <Card>
                                        <CardImg top width="100%" src={product.imageUrl} alt="Card image cap" />
                                        <CardBody>
                                            <CardTitle>{product.name}</CardTitle>
                                            <CardText>{product.description}</CardText>
                                            <CartContext.Consumer>
                                                {({ addToCart }) => <Button onClick={() => addToCart(product)}>Add to cart</Button>}
                                            </CartContext.Consumer>

                                        </CardBody>
                                    </Card>
                                </Col>
                            )))
                            : <div className="loader"></div>

                    }

                </Row>
            </Container>
        );
    }
}