// import React from 'react';

import { useEffect, useState } from "react";

const Science = () => {

     const [science, setScience] = useState([]);
     useEffect(() => {
       fetch("http://localhost:5000/scienceToys")
         .then((res) => res.json())
         .then((data) => setScience(data));
     }, []);

    return (
      <div className="grid grid-cols-1 md:grid-cols-3  mx-auto md:max-w-max gap-5 mt-3 md:mt-20">
        {science.map((scien) => (
          <div className="card   w-auto  md:w-96 glass" key={scien._id}>
            <figure>
              <img className="h-52 mt-3 " src={scien.toyPictureURL} alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl mt-2 mb-3">{scien?.toyName}</h2>
              <p>
                <span className="text-lg font-semibold">Price:</span> $
                {scien.price}
              </p>
              <h6>
                <span className="text-lg font-semibold">rating:</span>{" "}
                {scien.rating}
              </h6>
              <div className="card-actions mt-3">
                <button className="btn btn-outline w-full">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default Science;