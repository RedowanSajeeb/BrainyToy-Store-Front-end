// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import { Link } from "react-router-dom";
// import { Toaster } from "react-hot-toast";

const Mytoy = () => {
    const {user} = useContext(AuthContext)
    const [usertoy,setUsertoy] = useState([])
    const url = `https://brainy-toy-store-server-side.vercel.app/brainyemail?email=${user?.email}`;
    
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setUsertoy(data))
    },[url])

    console.log(user);


   const  handlerDeltItmInMongodb = (id) =>{
    
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://brainy-toy-store-server-side.vercel.app/brainy/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {

                const remaining = usertoy.filter(toy => toy._id !== id)
                   setUsertoy(remaining)
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
              }
            });
        }
      });
   }


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
                <th>Remove itm</th>
                <th>Name & Category</th>
                <th>Price & Available Quantity</th>
                <th>User email</th>
                <th> Upddate</th>
              </tr>
            </thead>
            <tbody>
              {usertoy.map((toy) => (
                <tr key={toy._id}>
                  <td>
                    <button
                      onClick={() => handlerDeltItmInMongodb(toy._id)}
                      className="btn btn-square btn-outline"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </td>
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
                    <Link to={`/update/${toy._id}`}>
                      <button className="btn btn-outline">
                        <img
                          className="h-10"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQybgGQF6AaXQEVTBvforov6RwN6BUDLHT8B-uiaFGyO_0PIrNO1gYFu13UF7AWgScjWxA&usqp=CAU"
                          alt=""
                        />
                        Upddate
                      </button>
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

export default Mytoy;