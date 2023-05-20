// import React from 'react';
import { Input, Option, Select, Textarea } from "@material-tailwind/react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const AddAToy = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.displayName);
  return (
    <div>
      <h1 className="text-center md:mt-10 mt-5 md:text-5xl">
        Add A New Toy in the{" "}
        <span className="text-orange-500">BrainYToy Store</span>{" "}
      </h1>
      <p className="text-center mt-3 text-gray-500">
        &quot;Wonderland of Knowledge: Unleashing Potential with Educational
        Toys! &quot;
      </p>
      <div
        className="max-w-5xl mx-auto md:mt-16 mt-5 
        border md:p-10 gap-5 w-full h-full mb-20 p-4 rounded-lg md:mb-24"
      >
        <div
          className="max-w-5xl mx-auto  mt-5 
       grid md:grid-cols-2 border  gap-5 w-full h-full p-4 rounded-lg mb-5"
        >
          <div className="flex  flex-col gap-6">
            <Input color="blue" label="Picture URL of the toy" />
            <Input color="purple" label="Toy Name" />
            <Input
              color="indigo"
              label="Seller name"
              defaultValue={user?.displayName}
            />
            <Input
              color="teal"
              label="Seller email"
              defaultValue={user?.email}
            />
          </div>
          <div className="flex  flex-col gap-6">
            <Input color="blue" label="Price" />
            <Input color="purple" label="Rating" />
            <Input color="indigo" label="Available quantity" />
            <Select label="Category ">
              <Option>Math Toys</Option>
              <Option>Science Toys</Option>
              <Option>Language Toys</Option>
              <Option>engineering tools</Option>
              {/* <Option>Material Tailwind Svelte</Option> */}
            </Select>
          </div>
        </div>
        <div className="w-full mx-auto ">
          <Textarea label="Detail description" />
        </div>
      </div>
    </div>
  );
};

export default AddAToy;
