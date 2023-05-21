// import React, { useState } from "react";
import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
const ToysShowAll = () => {
  const allToys = useLoaderData();
// console.log(toyone);
const {user} = useContext(AuthContext)

const userLoginAlart = () =>{
    if(!user){
        toast.error("Please login  first than visit!")
    }
}
  return (
    <div className="max-w-main mx-auto md:ms-14 md:mr-14">
      <div className="overflow-x-auto w-full mt-5 md:mt-20 mb-4 md:mb-12">
        <table className="table table-zebra rounded-2xl w-full">
          <thead>
            <tr>
              <th>Name & Category</th>
              <th>Price & Available Quantity</th>
              <th>Seller Name</th>
              <th> details</th>
            </tr>
          </thead>
          <tbody>
            {allToys.map((toy) => (
              <tr key={toy._id}>
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
                      <div className="text-sm opacity-100">{toy.category}</div>
                    </div>
                  </div>
                </td>
                <td>
                  Price: $ {toy.price}
                  <br />
                  <span className="badge badge-ghost text-sm badge-sm">
                    Available Quantity:{" "}
                    <span className="text-red-400">{toy.quantity}</span>
                  </span>
                </td>
                <td>{toy.sellername}</td>
                <th>
                  <Link to={`/details/${toy._id}`} onClick={userLoginAlart}>
                    <button className="btn btn-outline btn-xs">details</button>
                    <Toaster></Toaster>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ToysShowAll;
