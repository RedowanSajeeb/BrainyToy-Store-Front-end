// import React from 'react';

import { useLoaderData } from "react-router-dom";

const Details = () => {
    const {
      _id,
      toyPictureURL,
      toyName,
      email,
      sellername,
      price,
      rating,
      quantity,
      category,
      description,
    } = useLoaderData();
    console.log(_id,);
    return (
      <div>
        <h1 className="md:text-3xl text-center  mt-6">Here are the details of the products</h1>
        <div className="card md:max-w-max max-h-full md:mt-10 mb-7 mt-6 md:mb-14	md:mx-auto md:card-side bg-base-100 shadow-xl">
          <figure>
            <img src={toyPictureURL} alt="photo" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{toyName}</h2>
            <div>
              <h1 className="text-3xl mb-4 mt-4">Seller Info</h1>
              <p>name: {sellername}</p>
              <p>email: {email}</p>
              <h1 className="text-3xl mb-4 mt-4">Product Info</h1>
              <p>rating: {rating}</p>
              <p>available quantity: {quantity}</p>
              <p>category: {category}</p>
              <p>price: ${price}</p>
            </div>
            <div className="mockup-window border mt-4 border-base-200">
              <div className=" px-3 py-10 border-t border-base-300">
                {description}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Details;