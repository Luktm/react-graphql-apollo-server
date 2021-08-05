import React, { useEffect, useState } from 'react';

// remeber to create grapql folder with two files, one is mutation, one is query
import { useQuery } from '@apollo/client';
import { LOAD_USERS } from '../graphql/Queries'

const GetUsers = () => {

    const { error, loading, data } = useQuery(LOAD_USERS);

    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (data) {
            const array = [];
            array.push(data.getAllUsers[0]);            
            setUsers(array);
        }
    }, [data])

    return (
        <div>
            
        </div>
    );
}

export default GetUsers;