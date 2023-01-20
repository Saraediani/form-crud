import React, { useState, useEffect } from "react";

import  '../index.css';
import  axios  from 'axios' ;
import { format } from 'date-fns'
function GetUsers() {
    const baseURL = "http://localhost:3000/users";
  
    const [Users, set_Users] = useState([])
  
    async function getDAta() {
      try{
        const res = await axios.get(baseURL)
        if (res.data){
          set_Users(res.data)
        }
       
      }
      catch (err){
        console.log(err);
      }
      // let res = await axios.get(baseURL);
      // let user = await res.data;
      // if (user.data) {
      //   set_Users(user.data.Users);
      // }
    }
      const dateFormat = (date) => {
        const d = new Date(date);
        return d.toLocaleDateString('en-GB'); // dd/mm/yyyy
      }  
    useEffect(() => {
      getDAta();
    }, []);
    const data = Users.map((User, index) => {
        return (
          <tr key={index}>
            <td>{User.name}</td>
            <td>{User.email}</td>
            <td>{User.phone}</td>
            <td>{User.job}</td>
            <td>{User.company}</td>
            <td>{User.age}</td>
            <td>{User.city}</td>
            <td>{User.comingFrom}</td>
            <td>{dateFormat(User.created_at)}</td>
            <td>
            </td>
         </tr>
        );
   });
    return (
        <>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Job</th>
              <th scope="col">Company</th>
              <th scope="col">Age</th>
              <th scope="col">City</th>
              <th scope="col">ComingFrom</th>
              <th scope="col">CreatedAt</th>
              <th scope="col">
              </th>
          </tr>
        </thead>
        <tbody>{data}</tbody>
      </table>
      </>
);
}
export default GetUsers;