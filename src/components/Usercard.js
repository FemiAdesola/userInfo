import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Usercard = ({ name, username, website, id }) => {
    let url = `http://${website}`
    return (
        <Card className="usersInfo" key={id} bg="white" text="dark" style={{ width: '18rem' }}>
            <Card.Body >
                <Card.Header className="userInitial">
                {name.charAt(0).toUpperCase()}
                </Card.Header>
                <Card.Title>{name}</Card.Title>
                <Card.Text>@{username}</Card.Text>
                <Card.Link className="link" href={url} target="_blank">http://{website}</Card.Link>
            </Card.Body>
            <Card.Footer className="d-grid">
              <LinkContainer to={{ pathname: `/${id}`}}>
                    <Button className="my-3" variant="primary" size="m">
                      MORE DETAILS
                    </Button>
                </LinkContainer>
            </Card.Footer>
        </Card>
    );
};

export default Usercard;
