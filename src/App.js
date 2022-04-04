// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import './App.css';
// import EmailIcon from "./assets/email.svg";
// import LocationIcon from "./assets/location.svg";
// import PhoneIcon from "./assets/phone.svg";
// import Button from '@mui/material/Button'

// function App() {
//   const [user, setUser] = useState([])

//   const fetchData = async () => {
//     const response = await axios("https://randomuser.me/api/")
//     console.log(response.data);
//     setUser(response.data.results[0])
//     console.log(user);
//   }

//   const randomUser = () => {
//     fetchData()
//   }

//   useEffect(() => {
//     fetchData()
//   }, [])

//   return (
//     <div classNameName="App">
//       <div classNameName="main">
//         {user?.name && (<>
//           <div classNameName='mainInfo'>
//             <div classNameName="infoGroup">
//               <img src={user?.picture?.medium} alt="user" style={{ borderRadius: "50%" }} />
//               {/* <EmailIcon style={{ width: "30px", height: "30px" }} /> */}
//               <img src={EmailIcon} alt="" style={{ width: "30px", height: "30px" }} />
//               <img src={PhoneIcon} alt="" style={{ width: "30px", height: "30px" }} />
//               <img src={LocationIcon} alt="" style={{ width: "30px", height: "30px" }} />

//               {/* <PhoneIcon style={{ width: "30px", height: "30px" }} />
//               <LocationIcon style={{ width: "30px", height: "30px" }} /> */}
//             </div>
//             <div classNameName="infoGroup">
//               <h2>{user?.name?.title + " " + user?.name.first + " " + user?.name.last}</h2>
//               <p>{user?.email}</p>
//               <p>{user?.phone}</p>
//               <p>{user?.location?.state + "-" + user?.location?.country}</p>
//             </div>
//           </div>
//           <div classNameName="infoGroupBottom">
//             <p>Age:{user?.dob.age}</p>
//             <p>Register Date: {user?.registered?.date.slice(0, 10)}</p>
//           </div>
//         </>)}
//       </div>
//       <Button onClick={randomUser} variant="contained" classNameName='btn' style={{ margin: "1rem auto" }}>Random User</Button>
//     </div>

//   );
// }

// export default App;


import React, { useState, useEffect } from 'react'
import axios from 'axios'
import email from "./assets/email.svg"
import location from "./assets/location.svg"
import phone from "./assets/phone.svg"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

const App = () => {
  const [users, setUsers] = useState([])

  const fetchData = async () => {
    const response = await axios("https://randomuser.me/api/")
    setUsers(response.data.results[0]);
  }
  useEffect(() => {
    fetchData()
  }, [])

  const randomUser =()=>{
    fetchData()
  }

  console.log(users);

  return (
    <div className="card">
      <div className="card-body">
        <img src={users?.picture?.medium} className="card-img-top" alt="foto" />
        <h5 className="card-title">{users?.name?.title + " " + users?.name?.first + " " + users?.name?.last}</h5>
      </div>

      <div className="card-body">
        <img src={email} style={{ width: "40px" }} className="card-img" alt="" />
        <p>{users?.email}</p>
      </div>

      <div className="card-body">
        <img src={phone} style={{ width: "40px" }} className="card-img" alt="" />
        <p>{users?.phone}</p>
      </div>

      <div className="card-body">
        <img src={location} style={{ width: "40px" }} className="card-img" alt="" />
        <p>{users?.location?.state +"-"+  users?.location?.country}</p>
      </div>

      <a onClick={randomUser} href="#" className="btn btn-primary">Random User</a>
    </div>


  )
}

export default App