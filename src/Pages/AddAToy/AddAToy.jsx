// import React from 'react';
import {
  Button,
  Input,
  Option,
  Select,
  Textarea,
} from "@material-tailwind/react";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
const AddAToy = () => {
  const [temp, setTemp] = useState();
  const { user } = useContext(AuthContext);
  console.log(user?.displayName);

  const handleChange = (e) => {
    setTemp(e);
  };

  const addANewToyHandlersCallback = (event) => {
    event.preventDefault();

    const fieldValue = event.target;
    const toyPictureURL = fieldValue.toyPictureURL.value;
    const toyName = fieldValue.toyName.value;
    const email = fieldValue.email.value;
    const sellername = fieldValue.sellername.value;
    const price = parseInt(fieldValue.price.value);
    const rating = fieldValue.rating.value;
    const quantity = fieldValue.quantity.value;
    const category = temp;
    const description = fieldValue.description.value;

    const brainyAllData = {
      toyPictureURL,
      toyName,
      email,
      sellername,
      price,
      rating,
      quantity,
      category,
      description,
    };

    //  send data to server
      fetch("https://brainy-toy-store-server-side.vercel.app/brainy",{
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(brainyAllData)

      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.acknowledged === true) {
           
            toast.success('Toy Added Successfully')
         fieldValue.reset()
        }
      })

  };

  return (
    <div>
      <h1 className="text-center  mt-5 md:text-5xl">
        Add A New Toy in the
        <span className="text-orange-500">BrainYToy Store</span>{" "}
      </h1>
      <p className="text-center mt-3 text-gray-500">
        &quot;Wonderland of Knowledge: Unleashing Potential with Educational
        Toys! &quot;
      </p>
      <form
        onSubmit={addANewToyHandlersCallback}
        className="max-w-5xl mx-auto  mt-5 
        border md:p-7 gap-5 w-full h-full mb-20 p-4 rounded-lg md:mb-24"
      >
        <div
          className="max-w-5xl mx-auto  mt-5 
       grid md:grid-cols-2 border  gap-5 w-full h-full p-4 rounded-lg mb-5"
        >
          <div className="flex  flex-col gap-6">
            <Input
              name="toyPictureURL"
              color="blue"
              label="Picture URL of the toy"
            />
            <Input name="toyName" color="purple" label="Toy Name" />
            <Input
              name="sellername"
              color="indigo"
              label="Seller name"
              defaultValue={user?.displayName}
            />
            <Input
              name="email"
              color="teal"
              label="Seller email"
              defaultValue={user?.email}
            />
          </div>
          <div className="flex  flex-col gap-6">
            <Input name="price" color="blue" type="number" label="Price" />
            <Input name="rating" color="purple" label="Rating" />
            <Input
              name="quantity"
              color="indigo"
              type="number"
              label="Available quantity"
            />
            <div className="w-full">
              <Select onChange={handleChange} label="Select Category">
                <Option value="Math Toys">Math Toys</Option>
                <Option value="Science Toys">Science Toys</Option>
                <Option value="Language Toys">Language Toys</Option>
                <Option value="engineering tools">engineering tools</Option>
                {/* <Option>Material Tailwind Svelte</Option> */}
              </Select>
            </div>
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

export default AddAToy;
