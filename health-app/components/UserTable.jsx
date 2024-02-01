import React, { useState, useEffect } from 'react';

const UserTable = (props) => {
    const [users, setUsers] = useState([]);

    const refreshUsers = () => {
        props.client.getUser().then((response) => {
            setUsers(response.data);
        });
    };

    useEffect(() => {
        refreshUsers();
    }, []);

    return (
        <div className='w-full item-center justify-center bg-blue-800'>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Weight</th>
                        <th>Weight Unit</th>
                        <th>Height</th>
                        <th>Height Unit</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((currentUser) => (
                        <tr key={currentUser._id}>
                            <td>{currentUser.name}</td>
                            <td>{currentUser.age}</td>
                            <td>{currentUser.weight}</td>
                            <td>{currentUser.weightUnit}</td>
                            <td>{currentUser.height}</td>
                            <td>{currentUser.heightUnit}</td>
                            <td>{currentUser.gender}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;
