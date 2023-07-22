import React from 'react'
import reducer from './reducer';

const initialState = {user:{email:'', password:''}}

export const AppContext = React.createContext(initialState);

export default function AppContentProvider({children}) {
    const [state, dispatch] = React.useReducer(reducer, initialState)

  return <AppContext.Provider value={{state, dispatch}}>{children}</AppContext.Provider>
}
