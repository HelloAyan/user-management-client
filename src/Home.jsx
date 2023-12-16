import React, { useEffect, useState } from 'react';
import './App.css';

const Home = () => {
    const [user, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])


    const handleUserData = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email };
        console.log(user);
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }
    return (
        <div>
            <h2>User Management System</h2>
            <h3>Total Number of user: {user.length}</h3>
            <div>
                {user.map(user => <p key={user.id}> {user.id} : {user.name} : {user.email} </p>)}
            </div>
            <form onSubmit={handleUserData}>
                <input type="text" name='name' placeholder='Name' />
                <br />
                <input type="email" name='email' placeholder='Email' />
                <br />
                <input type="submit" />
            </form>
        </div>

    )
}

export default Home;
