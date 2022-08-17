import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import Loading from './Loading';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios";

const UserSingle = () => {

    let { id } = useParams();
    let navigate = useNavigate();
    const [users, setUsers] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => {
            setUsers(res.data)
            setIsLoading(false)
        })
        .catch((error) => {
            console.log(error);
        });
    }, [id]);
    
    return (
        <div className="userSinglePage">
            <Card className="userSingleCard">
                {isLoading && <Loading/>}
                {
                    !isLoading && (
                        <div>
                            <div className="userSingle">
                                <p> - name: <span><strong>{users.name}</strong></span></p>
                                <p> - username: <span>{users.username}</span></p>
                                <p> - email: <span>{users.email}</span></p>
                                <p> - website: <span>{users.website}</span></p>
                                <p> - address:
                                    <li> Street: {users.address.street}</li>
                                    <li> Suite: {users.address.suite}</li>
                                    <li> City: {users.address.city}</li>
                                    <li> Zipcode: {users.address.zipcode}</li>
                                </p>
                            </div>
                        </div>
                    )
                }
                <Button variant='primary' onClick={()=>navigate(-1)}>Back to user's list</Button>
              </Card>
        </div>
    );
};

export default UserSingle;
