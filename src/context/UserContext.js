import { createContext, useReducer } from "react";
import UserReducer from "./UserReducer";

const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const initialState = {
        users: [],
        loading: true
    }

    const [state, dispatch] = useReducer(UserReducer, initialState)

    const fetchUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const json = await response.json()

        dispatch({
            type: 'GET_USERS',
            payload: json
        })
    }

    return <UserContext.Provider value={{
        users: state.users,
        loading: state.loading,
        fetchUsers
    }}>
        {children}
    </UserContext.Provider>
}

export default UserContext