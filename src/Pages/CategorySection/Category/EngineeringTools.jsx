// import React from 'react';

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EngineeringTools = () => {
     const [engineerin, setEngineerin] = useState([]);
     useEffect(() => {
       fetch("https://brainy-toy-store-server-side.vercel.app/engineeringTools")
         .then((res) => res.json())
         .then((data) => setEngineerin(data));
     }, []);

    return (
      <div className="grid grid-cols-1 md:grid-cols-3  mx-auto md:max-w-max gap-5 mt-3 md:mt-20">
        {engineerin.map((eng) => (
          <div className="card   w-auto  md:w-96 glass" key={eng._id}>
            <figure>
              <img className="h-52 mt-3 " src={eng.toyPictureURL} alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl mt-2 mb-3">{eng?.toyName}</h2>
              <p>
                <span className="text-lg font-semibold">Price:</span> $
                {eng.price}
              </p>
              <h6>
                <span className="text-lg font-semibold">rating:</span>{" "}
                {eng.rating}
              </h6>
              <Link to={`/details/${eng._id}`}>
                <div className="card-actions mt-3">
                  <button className="btn btn-outline w-full">
                    View Details
                  </button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
};

export default EngineeringTools;