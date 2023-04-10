import * as actionTypes from './actionTypes'
import axios from '../../list/axios-order'

export const change = (value) => {

    return {
        type: actionTypes.CHANGE,
        val: "hello"
    };
};

export const increment = () => {
    return {
        type: actionTypes.INCREMENT,
    };
};

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    };
};

export const reset = () => {
    return {
        type: actionTypes.RESET
    };
};

export const handleAdd = (value) => {
    // console.log("11111state.............")
    return {
        type: actionTypes.HANDLE_ADD,
        val: value
    };
};

export const fetchOrdersSuccess = (orders) => {
    // console.log("orders2333333", orders)
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    };
};

export const fetchOrdersFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    };
};

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    };
};

export const fetchOrders = () => {
    return dispatch => {
        dispatch(fetchOrdersStart())
        axios.get('/orders.json')
            .then(res => {
                // console.log("res222", res)
                const fetchedOrders = []
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    })
                }
                // console.log("fetchedOrders", fetchedOrders)
                dispatch(fetchOrdersSuccess(fetchedOrders))
            })
            .catch(err => {
                dispatch(fetchOrdersFail(err))
            })
    }
}

export const handleAddSuccess = (data) => {
    return {
        type: actionTypes.HANDLE_ADD_SUCCESS,
        data: data
    };
};

export const handleAddFail = (error) => {
    return {
        type: actionTypes.HANDLE_ADD_FAIL,
        error: error
    };
};

export const handleAddStart = () => {
    return {
        type: actionTypes.HANDLE_ADD_START
    };
};

export const handleAddToList = () => {
    return dispatch => {
        dispatch(fetchListStart())
        axios.get('https://react-my-burger-a1af7-default-rtdb.firebaseio.com/data.json')
            .then(response => {
                const fetchedOrders = []
                const res = response.data
                for (let key in res) {
                    // console.log("key", key)
                    fetchedOrders.push({
                        ...res[key],
                        id: key
                    })
                }
                dispatch(fetchListSuccess(fetchedOrders))
            })
            .catch(error => {
                dispatch(fetchListFail(error))
            })
    }
}

export const fetchListSuccess = (data) => {
    // console.log("Adddd33333333", data)
    return {
        type: actionTypes.FETCH_LIST_START_SUCCESS,
        data: data
    };
};

export const fetchListFail = (error) => {
    return {
        type: actionTypes.FETCH_LIST_START_FAIL,
        error: error
    };
};

export const fetchListStart = () => {
    return {
        type: actionTypes.FETCH_LIST_START
    };
};

export const AddData = (data) => {
    // console.log("AddData11111111", data)
    return dispatch => {
        dispatch(fetchListStart())
        axios.post('/data.json', data)
            .then(response => {
                // console.log("Addddd22222222222", response)
                console.log(response.data)
                dispatch(fetchListSuccess(data))
            })
            .catch(error => {
                dispatch(fetchListFail(error))
            });
    }
}


export const deleteDataSuccess = (key) => {
    // console.log("Adddd33333333", data)
    return {
        type: actionTypes.DELETE_DATA_SUCCESS,
        id: key,
    };
};

export const deleteDataFail = (error) => {
    return {
        type: actionTypes.DELETE_DATA_FAIL,
        error: error
    };
};

export const deleteDataStart = () => {
    return {
        type: actionTypes.DELETE_DATA_START
    };
};

export const DeleteData = (data) => {
    // console.log("AddData11111111", data)
    return dispatch => {
        dispatch(deleteDataStart())
        dispatch(deleteDataSuccess(data))
        dispatch(deleteDataFail())
    }
}



export const EditDataSuccess = (data) => {
    return {
        type: actionTypes.EDIT_DATA_SUCCESS,
        data: data
    };
};
export const EditDataFail = (error) => {
    return {
        type: actionTypes.EDIT_DATA_FAIL,
        error: error
    };
};
export const EditDataStart = () => {
    return {
        type: actionTypes.EDIT_DATA_START
    };
};
export const EditData = (data) => {
    // console.log("EditData11111111", data)
    return dispatch => {
        dispatch(EditDataStart())
        dispatch(EditDataSuccess(data))
        dispatch(EditDataFail())
    }
};
