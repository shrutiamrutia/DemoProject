import React, { Component } from 'react'
import './App.css'
import Modal from "./list/Modal";
import TestingRedux from "./components/TestingRedux";
import Table from "./list/Table";
import axios from './list/axios-order';
import { connect } from 'react-redux';

class App extends Component {

    state = {
        // list: [],
        isOpen: false
    }

    componentDidMount() {

        axios.get('https://react-my-burger-a1af7-default-rtdb.firebaseio.com/data.json')
            .then(response => {
                const fetchedOrders = []
                const res = response.data
                for (let key in res) {
                    console.log("key", key)
                    fetchedOrders.push({
                        ...res[key],
                        id: key
                    })
                }
                console.log("fetchedOrders", fetchedOrders)
                console.log("res", response)
                this.setState({ list: fetchedOrders })
            })
            .catch(error => {
            })
    }

    handleClick = (props) => {
        this.setState({ isOpen: !this.state.isOpen })
    };

    handleDelete = () => {
        axios.delete('/data/-NOmQIaJIGbLB5Ly-9tb', { name: "pal", age: 12 }
        )
            .then(response => {
                console.log(response)
                console.log(response.data)
            })
    }

    handleAdd = (user) => {
        const data = {
            name: user.name,
            age: user.age
        }
        axios.post('/data.json', data)
            .then(response => {
                console.log(response)
            })
        const result = [...this.state.list]
        result.push(user)
        console.log("update", result)
        this.setState({ list: result })
        this.setState({ isOpen: false })
    };
    render() {
        return (
            <div>
                <div>
                    <header className="header">
                        <h2 align="center">Add A Students</h2>
                        <button className='btn' onClick={this.handleClick}>
                            Add
                        </button>
                        <button className='btn' onClick={this.handleDelete}>
                            delete
                        </button>
                    </header>
                    <Table list={this.state.list} />
                    <div className='Modal'>
                        {this.state.isOpen ? (
                            <Modal isOpen={this.state.isOpen} handleAdd={this.handleAdd} />
                        ) : ""}
                    </div>
                    <TestingRedux />

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("state............")
    return {
        value: state.name,
    }
};

export default connect(mapStateToProps)(App)




