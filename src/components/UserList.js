import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Row } from "react-bootstrap";
import Usercard from "./Usercard";
import {Container} from "react-bootstrap";
import Loading from "./Loading";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getUsers = () => {
        axios.get('https://jsonplaceholder.typicode.com/users/')
        .then((res) => {
            setUsers(res.data)
                setIsLoading(false);
        })
        .catch(error => {
            console.log(error)
        });
    }

    useEffect(()=>{
    getUsers();
    }, []);
    
    return (
        <div>
            <Container>
                <Row xs={2} md={4} lg={5} className="justify-content-between my-5 d-flex gap-3 m-5">
                    {isLoading && <Loading />}
                    {
                        !isLoading &&
                        users.map((user) => (
                            <Usercard
                                key={user.name}
                                name={user.name}
                                username={user.username}
                                website={user.website}
                                id = {user.id}
                            />
                        ))}
                </Row>
            </Container>
        </div>
    );
};

export default UserList;
