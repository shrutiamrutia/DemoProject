import React, { Component } from 'react'
import './App.css'
import Modal from "./list/Modal";
import TestingRedux from "./components/TestingRedux";

import Table from "./list/Table";
import { connect } from 'react-redux';
import * as action from './store/actions/index'
class App extends Component {

  state = {
    // list: [],
    isOpen: false,
    activeUser: null,
    isEdit: false
  }

  componentDidMount() {

    this.props.onFetchOrders()

    this.props.onHandleAddToList()
    // axios.get('https://react-my-burger-a1af7-default-rtdb.firebaseio.com/data.json')
    //   .then(response => {
    //     const fetchedOrders = []
    //     const res = response.data
    //     for (let key in res) {
    //       console.log("key", key)
    //       fetchedOrders.push({
    //         ...res[key],
    //         id: key
    //       })
    //     }
    //     console.log("fetchedOrders", fetchedOrders)
    //     console.log("res", response)

    //     this.setState({ list: fetchedOrders })
    //   })
    //   .catch(error => {
    //   })
  }

  handleClick = (props) => {
    this.setState({ isOpen: !this.state.isOpen })
  };

  // handleDelete = () => {
  //   axios.delete('/data/-NOmQIaJIGbLB5Ly-9tb', { name: "pal", age: 12 }
  //   )
  //     .then(response => {
  //       console.log(response)
  //       console.log(response.data)
  //     })
  // }

  handleAdd = (data) => {
    // console.log("handleAdd..........", data)
    // const data = this.props.lists
    // const data = {
    //   name: user.name,
    //   age: user.age
    // }
    // axios.post('/data.json', data)
    //   .then(response => {
    //     console.log(response)
    //   })
    // const result = [...this.state.list]
    // result.push(user)
    // console.log("update", result)
    // this.setState({ list: result })
    if (this.state.isEdit) {
      // edit 
      this.props.onEdit(data)
    } else {
      // add
      this.props.onAdd(data)
    }
    // this.setState({ isOpen: false })
  };

  handleEdit = (data) => {
    // console.log("222222handleEdit..........", data)
    this.setState({ isOpen: true })
    this.setState({ activeUser: data })
    this.setState({ isEdit: true })
  }

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
          <Table list={this.props.dataList} transferEditData={this.handleEdit} />

          <div className='Modal'>
            {this.state.isOpen ? (
              <Modal handleAdd={this.handleAdd} user={this.state.activeUser} isEdit={this.state.isEdit} />
            ) : ""}
          </div>
          <TestingRedux />

        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    value: state.name,
    list: state.list,
    orderList: state.orders,
    dataList: state.data
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onHandleAddToList: () => dispatch(action.handleAddToList()),
    onFetchOrders: () => dispatch(action.fetchOrders()),
    onAdd: (data) => dispatch(action.AddData(data)),
    onEdit: (data) => dispatch(action.EditData(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)






// import React, { useState, useEffect } from 'react'
// import './App.css'
// import Modal from "./list/Modal";
// import TestingRedux from "./components/TestingRedux";

// import Table from "./list/Table";
// import { connect } from 'react-redux';
// import * as action from './store/actions/index'


// const App = props => {



//   const [isOpen, setIsOpen] = useState(false);
//   const [activeUser, setActiveUser] = useState(null);
//   const [isEdit, setIsEdit] = useState(false)

//   useEffect(() => {
//     props.onFetchOrders()

//     props.onHandleAddToList()
//   })



//   const handleClick = (props) => {
//     setIsOpen(!isOpen)

//   };


//   const handleAdd = (data) => {

//     if (isEdit) {
//       // edit 
//       props.onEdit(data)
//     } else {
//       // add
//       props.onAdd(data)
//     }
//     // this.setState({ isOpen: false })
//   };

//   const handleEdit = (data) => {
//     // console.log("222222handleEdit..........", data)
//     setIsOpen(true)
//     setActiveUser(data)
//     setIsEdit(true)
//   }


//   return (
//     <div>
//       <div>
//         <header className="header">
//           <h2 align="center">Add A Students</h2>
//           <button className='btn' onClick={handleClick}>
//             Add
//           </button>

//         </header>
//         <Table list={props.dataList} transferEditData={handleEdit} />

//         <div className='Modal'>
//           {isOpen ? (
//             <Modal handleAdd={handleAdd} user={activeUser} isEdit={isEdit} />
//           ) : ""}
//         </div>
//         <TestingRedux />

//       </div>
//     </div>
//   )
// }

// const mapStateToProps = state => {
//   return {
//     value: state.name,
//     list: state.list,
//     orderList: state.orders,
//     dataList: state.data
//   }
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onHandleAddToList: () => dispatch(action.handleAddToList()),
//     onFetchOrders: () => dispatch(action.fetchOrders()),
//     onAdd: (data) => dispatch(action.AddData(data)),
//     onEdit: (data) => dispatch(action.EditData(data))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)

