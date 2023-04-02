import React, { useContext } from 'react'
import { useEffect } from 'react'
import UserContext from '../context/UserContext';

const Home = () => {
    const { users, loading, fetchUsers } = useContext(UserContext)

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers]);

    if (loading) {
        return <>Loading...</>
    }

    return (
        <div className='home-page'>
            {users && users.map((user) => (
                <div className='content' key={user.id}>
                    <h1>{user.name}</h1>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    )
}

export default Home
