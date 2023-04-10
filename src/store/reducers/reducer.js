
import * as actionTypes from '../actions/actionTypes';
import { useState, useEffect } from "react";

const initialState = {
    name: "app",
    counter: 0,
    list: {
        name: "",
        age: ""
    },
    data: []
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE:
            // console.log("action........")
            return {
                ...state,
                name: action.val
            }
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.RESET:
            return {
                ...state,
                counter: state.counter = 0
            }
        case actionTypes.HANDLE_ADD:
            // console.log("HANDLE_ADD")
            return {
                ...state,
                list: {
                    ...state.list,
                    // [action.listName]: state.list[action.listName]
                    name: state.list.name,
                    age: state.list.age
                }
            }
        case actionTypes.FETCH_ORDERS_START:
            return {
                ...state,
                orders: action.orders,
                loading: true
            }
        case actionTypes.FETCH_ORDERS_SUCCESS:
            // console.log("reducer 4444", action)
            return {
                ...state,
                loading: false,
                orders: action.orders,
            }
        case actionTypes.FETCH_ORDERS_FAIL:
            return {
                ...state,
                loading: false
            }
        case actionTypes.HANDLE_ADD_START:
            return {
                ...state,
                // data: action.data,
                loading: true
            }
        case actionTypes.HANDLE_ADD_SUCCESS:
            return {
                ...state,
                loading: false,
                // data: action.data
            }
        case actionTypes.HANDLE_ADD_FAIL:
            return {
                ...state,
                loading: false
            }

        case actionTypes.FETCH_LIST_START:
            return {
                ...state,
                // data: action.data,
                loading: true
            }
        case actionTypes.FETCH_LIST_START_SUCCESS:
            // console.log("data", action)
            return {
                ...state,
                loading: false,
                data: action.data
            }
        case actionTypes.FETCH_LIST_START_FAIL:
            return {
                ...state,
                loading: false
            }


        case actionTypes.DELETE_DATA_START:
            return {
                ...state,
                // data: action.data,
                loading: true
            }

        case actionTypes.DELETE_DATA_SUCCESS:
            // console.log("reducer data", state.data)
            return {
                ...state,
                loading: false,
                data: state.data.filter((data, key) => key !== action.id)
            }
        case actionTypes.DELETE_DATA_FAIL:
            return {
                ...state,
                loading: false
            }

        case actionTypes.EDIT_DATA_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.EDIT_DATA_SUCCESS:
            console.log("dataEDIT_DATA_SUCCESS", action.data, state.data)
            // let array = [...state.data];
            // let obj = action.data
            // array.push(obj);

            // let myArray = [...state.data];
            // const objIndex = myArray.findIndex((obj, index) => index == action.data.index);
            // console.log("Before update: ", myArray[objIndex])
            // myArray[objIndex] = action.data
            // console.log("After update: ", myArray[objIndex])

            const array = state.data.map((obj) => {
                if (obj.index === action.data.index) {
                    // return state.data[obj] = action.data
                    console.log("object", action.data)
                    return Object.assign(obj, action.data)
                }
                return obj
            })
            // const myArray = state.data.map(arrayItem =>
            //     arrayItem.index === action.data.index ?
            //         { ...state.data, ...action.data } : arrayItem);
            return {
                ...state,
                loading: false,
                data: array
            }
        case actionTypes.EDIT_DATA_FAIL:
            return {
                ...state,
                loading: false
            }

        default:
            return state;
    }
}

export default reducer

