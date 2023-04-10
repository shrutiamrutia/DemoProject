import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import * as action from '../store/actions/index';
import Spinner from '../list/Spinner/Spinner';

class Table extends Component {
    removeData = (key) => {
        // console.log("handleDelete..........", key)
        this.props.onDelete(key)
    }

    editData = (data) => {
        this.props.transferEditData(data)
        // this.props.onEdit(data)
    }

    render() {
        if (this.props.loading) {
            return <Spinner />;
        }
        return (
            < div >
                <div className="app-container">
                    <table>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Delete</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>

                            {this.props.list.length > 0
                                ? this.props.list.map((data, key) => {
                                    // console.log("data,", data)
                                    return (
                                        <tr key={key}>
                                            <td>{key + 1}</td>
                                            <td>{data.name}</td>
                                            <td>{data.age}</td>
                                            <td><button onClick={() => this.removeData(key)}>Delete</button></td>
                                            <td><button onClick={() => this.editData(Object.assign(data, { index: key }))}>Edit</button></td>
                                        </tr>
                                    );
                                })
                                : 'No Student'}
                            {/* {props.list.map((data) => (
                            <tr>
                                <td>{data.name}</td>
                                <td>{data.age}</td>
                             </tr>
                        ))} */}
                        </tbody>
                    </table>
                </div>
            </div >
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.data,
        loading: state.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onDelete: (key) => dispatch(action.DeleteData(key)),
        // onEdit: (data) => dispatch(action.EditData(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Table);





// import React, { useEffect } from 'react';
// // import axios from 'axios';
// import { connect } from 'react-redux';
// import * as action from '../store/actions/index';
// import Spinner from '../list/Spinner/Spinner';

// const Table = props => {
//     const removeData = (key) => {
//         // console.log("handleDelete..........", key)
//         props.onDelete(key)
//     }

//     const editData = (data) => {
//         props.transferEditData(data)
//         // this.props.onEdit(data)
//     }


//     if (props.loading) {
//         return <Spinner />;
//     }
//     return (
//         < div >
//             <div className="app-container">
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>No</th>
//                             <th>Name</th>
//                             <th>Age</th>
//                             <th>Delete</th>
//                             <th>Edit</th>
//                         </tr>
//                     </thead>
//                     <tbody>

//                         {props.list.length > 0
//                             ? props.list.map((data, key) => {
//                                 // console.log("data,", data)
//                                 return (
//                                     <tr key={key}>
//                                         <td>{key + 1}</td>
//                                         <td>{data.name}</td>
//                                         <td>{data.age}</td>
//                                         <td><button onClick={() => removeData(key)}>Delete</button></td>
//                                         <td><button onClick={() => editData(Object.assign(data, { index: key }))}>Edit</button></td>
//                                     </tr>
//                                 );
//                             })
//                             : 'No Student'}
//                         {/* {props.list.map((data) => (
//                             <tr>
//                                 <td>{data.name}</td>
//                                 <td>{data.age}</td>
//                              </tr>
//                         ))} */}
//                     </tbody>
//                 </table>
//             </div>
//         </div >
//     )
// }


// const mapStateToProps = state => {
//     return {
//         data: state.data,
//         loading: state.loading
//     }
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         onDelete: (key) => dispatch(action.DeleteData(key)),
//         // onEdit: (data) => dispatch(action.EditData(data))
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Table);