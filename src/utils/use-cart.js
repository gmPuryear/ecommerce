import React from "react";
import {useState} from "react";
//
// // Use context is for passing down props to ALL components, children their children, etc.
// // Use context is broken into two sections:
//     // 1. contextProvider: wraps all the code that needs access to the info in the context
//     // 2. value: is the props which is the value of the context
//
// const cartProvider = ({children}) => {
//     const [carItems, setCartItems] = useState([])
//
//     const cartContains
// }
// export const cartContext = React.createContext();

// export const CartContext = React.createContext(undefined);

const CartContext = React.createContext(undefined);

