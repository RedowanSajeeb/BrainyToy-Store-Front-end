// import React from 'react';

import { useLoaderData } from "react-router-dom";

const ToysShowAll = () => {
     const allToys = useLoaderData();
    return (
      <div>
        <div className="overflow-x-auto w-full mt-5 md:mt-20 mb-4 md:mb-12">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name & Category</th>
                <th>Price & Available Quantity</th>
                <th>Seller Name</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {allToys.map((toy) => (
                <tr key={toy._id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
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
                      Available Quantity:{" "}
                      <span className="text-red-400">{toy.quantity}</span>
                    </span>
                  </td>
                  <td>{toy.sellername}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              ))}

              {/* row 1 */}
            </tbody>

          
          </table>
        </div>
      </div>
    );
};

export default ToysShowAll;