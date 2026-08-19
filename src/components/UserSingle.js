// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from 'react-router-dom';
// import Loading from './Loading';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import axios from "axios";

// const UserSingle = () => {

//     let { id } = useParams();
//     let navigate = useNavigate();
//     const [users, setUsers] = useState();
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
//             .then((res) => {
//             setUsers(res.data)
//             setIsLoading(false)
//         })
//         .catch((error) => {
//             console.log(error);
//         });
//     }, [id]);
    
//     return (
//         <div className="userSinglePage">
//             <Card className="userSingleCard">
//                 {isLoading && <Loading/>}
//                 {
//                     !isLoading && (
//                         <div>
//                             <div className="userSingle">
//                                 <p> - name: <span><strong>{users.name}</strong></span></p>
//                                 <p> - username: <span>{users.username}</span></p>
//                                 <p> - email: <span>{users.email}</span></p>
//                                 <p> - website: <span>{users.website}</span></p>
//                                 <p> - address:
//                                     <li> Street: {users.address.street}</li>
//                                     <li> Suite: {users.address.suite}</li>
//                                     <li> City: {users.address.city}</li>
//                                     <li> Zipcode: {users.address.zipcode}</li>
//                                 </p>
//                             </div>
//                         </div>
//                     )
//                 }
//                 <Button variant='primary' onClick={()=>navigate(-1)}>Back to user's list</Button>
//               </Card>
//         </div>
//     );
// };

// export default UserSingle;


import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";

const UserSingle = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setUser(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return (
      <div className="userSinglePage">
        <Card className="userSingleCard">
          <Loading />
        </Card>
      </div>
    );
  }

  return (
    <div className="userSinglePage">
      <Card className="userSingleCard">

        {/* Header */}
        <div className="profile-header">
          <div className="profile-avatar">
            {user.name.charAt(0).toUpperCase()}
          </div>

          <h2>{user.name}</h2>
          <p>@{user.username}</p>
        </div>

        {/* User Information */}
        <div className="profile-section">
          <h5>Contact Information</h5>

          <div className="info-row">
            <span>Email</span>
            <strong>{user.email}</strong>
          </div>

          <div className="info-row">
            <span>Website</span>
            <a
              href={`http://${user.website}`}
              target="_blank"
              rel="noreferrer"
            >
              {user.website}
            </a>
          </div>
        </div>

        {/* Address */}
        <div className="profile-section">
          <h5>Address</h5>

          <div className="info-row">
            <span>Street</span>
            <strong>{user.address.street}</strong>
          </div>

          <div className="info-row">
            <span>Suite</span>
            <strong>{user.address.suite}</strong>
          </div>

          <div className="info-row">
            <span>City</span>
            <strong>{user.address.city}</strong>
          </div>

          <div className="info-row">
            <span>Zipcode</span>
            <strong>{user.address.zipcode}</strong>
          </div>
        </div>

        {/* Back button */}
        <Button
          className="back-btn"
          onClick={() => navigate(-1)}
        >
          ← Back to Users
        </Button>

      </Card>
    </div>
  );
};

export default UserSingle;