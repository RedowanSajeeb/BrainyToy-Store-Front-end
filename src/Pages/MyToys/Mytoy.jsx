// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
// import { Link } from "react-router-dom";
// import { Toaster } from "react-hot-toast";

const Mytoy = () => {
    const {user} = useContext(AuthContext)
    const [usertoy,setUsertoy] = useState([])
    const url = `http://localhost:5000/brainyemail?email=${user?.email}`;
    
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setUsertoy(data))
    },[url])

    console.log(user);
    return (
      <div className="max-w-main mx-auto md:ms-14 md:mr-14">
        {user && (
          <h1 className="md:text-3xl text-2xl text-center mt-5 md:mt-16">
            Hey{" "}
            <span className="text-orange-600 text-2xl">
              {user?.displayName}
            </span>{" "}
            Your Added Toy Itms
          </h1>
        )}
        <div className="overflow-x-auto w-full mt-2 md:mt-10 mb-4 md:mb-12">
          <table className="table table-zebra rounded-2xl w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name & Category</th>
                <th>Price & Available Quantity</th>
                <th>User email</th>
                <th> details</th>
              </tr>
            </thead>
            <tbody>
              {usertoy.map((toy) => (
                <tr key={toy._id}>
                  <td></td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={toy.toyPictureURL}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{toy.toyName}</div>
                        <div className="text-sm opacity-100">
                          {toy.category}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Price: $ {toy.price}
                    <br />
                    <span className="badge badge-ghost text-sm badge-sm">
                      Available Quantity:
                      <span className="text-red-400"> {toy.quantity}</span>
                    </span>
                  </td>
                  <td>{toy.email}</td>
                  <th>
                    {/* <Link to={`/details/${toy._id}`} onClick={userLoginAlart}>
                      <button className="btn btn-outline btn-xs">
                        details
                      </button>
                      <Toaster></Toaster>
                    </Link> */}
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Mytoy;