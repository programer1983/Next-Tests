import React from "react"
import { createContext } from "react";

export const globalContext = createContext()

const TOGGLE = "TOGGLE"

const initialState = {
    isToggle: false,
}


const reducer = (state, action) => {
    switch(action.type){
        case TOGGLE:
            return {
                ...state,
                isToggle: !state.isToggle
            }
        default:
            return state
    }
}

export const GlobalContext = ({children}) => {
    const [state, dispatch] = React.useReducer(reducer, initialState)


    return (
        <globalContext.Provider
           value={{
            isToggle: state.isToggle,
            dispatch,
           }}
        >
            {children}
        </globalContext.Provider>
    )
}