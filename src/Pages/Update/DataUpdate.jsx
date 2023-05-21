// import React from 'react';

import {
  Button,
  Input,
 

  Textarea,
} from "@material-tailwind/react";


import { Toaster, toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const DataUpdate = () => {
    const { _id } = useLoaderData()
    // console.log(_id);
    const addANewToyHandlersCallback1 = (event) => {
    event.preventDefault();

    const fieldValue = event.target;
    const price = fieldValue.price.value;
    const quantity = fieldValue.quantity.value;
    const description = fieldValue.description.value;
    const brainyAllData = {
      price,
      
      quantity,
      description,
    };
//    console.log(brainyAllData);

        fetch(`https://brainy-toy-store-server-side.vercel.app/brainy/${_id}`,{
            method: "PUT",

            headers :{'content-type': 'application/json'},
            body : JSON.stringify(brainyAllData)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                toast.success('Data modified successfully')
            }
        })


    }

    return (
      <div className="overflow-hidden">
        <h1 className="text-center md:mt-12  mt-5 md:text-5xl">
          Can you update the Toy information
          {/* <span className="text-orange-500"> BrainYToy Store</span>{" "} */}
        </h1>
        <p className="text-center mt-3 text-gray-500">
          &quot;Wonderland of Knowledge: Unleashing Potential with Educational
          Toys! &quot;
        </p>
        <form
          onSubmit={addANewToyHandlersCallback1}
          className="max-w-5xl mx-auto  mt-5 
        border md:p-7 gap-5 w-full h-full mb-20 p-4 rounded-lg md:mb-24"
        >
          <div
            className="max-w-5xl mx-auto md:ms-64 mt-5 
               grid md:grid-cols-2 justify-center   gap-5 w-full h-full p-4 rounded-lg mb-5"
          >
            <div className="flex  flex-col gap-6">
              <Input name="price" color="blue" type="number" label="Price" />
              <Input
                name="quantity"
                color="indigo"
                type="number"
                label="Available quantity"
              />
            </div>
          </div>
          <div className="w-full    mx-auto ">
            <Textarea name="description" label="Detail description" />
          </div>

          <button className="w-full">
            <Button className="w-full mt-4 " variant="outlined">
              Add A Toy
            </Button>
            <Toaster></Toaster>
          </button>
        </form>
      </div>
    );
};

export default DataUpdate;