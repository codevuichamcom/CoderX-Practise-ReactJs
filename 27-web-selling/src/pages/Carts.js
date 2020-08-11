import React, { Component } from 'react';
import { Table } from 'reactstrap';

export default class Carts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cartItems: []
        }
    }
    componentDidMount(props) {
        this.setState({ cartItems: JSON.parse(localStorage.getItem('cartItems')) || [] })
    }
    render() {
        const { cartItems } = this.state;
        return (
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((product) => {
                        return (
                            <tr>
                                <th scope="row">{product.id}</th>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <img src={product.imageUrl}/>
                            </tr>
                        );
                    })}


                </tbody>
            </Table>
        );
    }

}