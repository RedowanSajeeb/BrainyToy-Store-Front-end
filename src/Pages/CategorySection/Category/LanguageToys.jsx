// import React from 'react';

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LanguageToys = () => {

      const [language, setLanguage] = useState([]);
      useEffect(() => {
        fetch("http://localhost:5000/languageToys")
          .then((res) => res.json())
          .then((data) => setLanguage(data));
      }, []);

    return (
      <div className="grid grid-cols-1 md:grid-cols-3  mx-auto md:max-w-max gap-5 mt-3 md:mt-20">
        {language.map((Lang) => (
          <div className="card   w-auto  md:w-96 glass" key={Lang._id}>
            <figure>
              <img className="h-52 mt-3 " src={Lang.toyPictureURL} alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl mt-2 mb-3">{Lang?.toyName}</h2>
              <p>
                <span className="text-lg font-semibold">Price:</span> $
                {Lang.price}
              </p>
              <h6>
                <span className="text-lg font-semibold">rating:</span>{" "}
                {Lang.rating}
              </h6>
              <Link to={`/details/${Lang._id}`}>
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

export default LanguageToys;