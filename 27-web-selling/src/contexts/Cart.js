import React, { Component } from 'react';

export const CartContext = React.createContext();

export class CartProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cartItems: []
        }
    }
    componentDidMount() {
        this.setState({ cartItems: JSON.parse(localStorage.getItem('cartItems')) || [] });
    }
    addToCart = async (product) => {
        await this.setState({ cartItems: this.state.cartItems.concat(product) });
        localStorage.setItem('cartItems', JSON.stringify(this.state.cartItems));
    }
    render() {
        return (
            <CartContext.Provider value={{
                cartItems: this.state.cartItems,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </CartContext.Provider>
        );
    }
}