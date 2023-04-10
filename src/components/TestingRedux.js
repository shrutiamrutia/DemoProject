import { useState, useEffect } from "react";
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/index'

const TestingRedux = props => {

    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setCount((count) => count + 2);
    //     }, 1000);
    // });

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCount(count + 2);
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, [count]);

    return (
        <div>
            <h1 align="center">{props.name}</h1>
            {/* <h1 align="center"> {props.counter}</h1> */}
            <h1 align="center"> count:{count}</h1>
            <button className="button1" onClick={props.handleIncrement}>Change</button>
            <button className="button1" onClick={props.onIncrementCounter}>Increment</button>
            <button className="button1" onClick={props.onDecrementCounter}>Decrement</button>
            <button className="button1" onClick={props.onResetCounter}>Reset</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        name: state.name,
        counter: state.counter
    }
};

const mapDispatchToProps = dispatch => {
    return {
        handleIncrement: () => dispatch(actionCreators.change()),
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onResetCounter: () => dispatch(actionCreators.reset())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TestingRedux);


