import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/Cart'
const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link to="/">Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/products">Products</Link>
                        </NavItem>
                        <NavItem>
                            <CartContext.Consumer>
                                {({ cartItems }) => <Link to="/products">Cart ({cartItems.length})</Link>}
                            </CartContext.Consumer>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;