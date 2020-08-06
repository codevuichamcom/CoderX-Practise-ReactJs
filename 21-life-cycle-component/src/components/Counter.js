import React, { Component } from 'react';
import './Counter.css';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    increase = () => {

        this.setState({ count: this.state.count + 1 });
    }

    decrease = () => {
        this.setState({ count: this.state.count - 1 });
    }

    componentDidMount() {
        console.log('Counter did Mount');
    }
    componentDidUpdate() {
        console.log('Counter did update');
    }
    componentWillUnmount() {
        console.log('Counter will unMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !(this.state.count === nextState.count)
    }

    render() {
        console.log('Counter render');
        const { count } = this.state;
        return (
            <div className="Counter">
                <button onClick={() => this.decrease()}>-</button>
                <span>{count}</span>
                <button onClick={() => this.increase()}>+</button>
            </div>
        );
    }
}