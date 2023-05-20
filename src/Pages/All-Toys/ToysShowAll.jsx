// import React, { useState } from "react";
import {
  Dialog,
  DialogBody,
  DialogHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const ToysShowAll = () => {
  const [toyone, setToyone] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [selectedToyId, setSelectedToyId] = useState(null);
  const allToys = useLoaderData();
console.log(selectedToyId);
  const detailsModalHandler = (id) => {
    setSelectedToyId(id);
    setShowModal(true);
    fetch(`http://localhost:5000/brainy/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setToyone(data);
      });
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedToyId(null);
    setToyone({});
  };

  return (
    <div>
      <div className="overflow-x-auto w-full mt-5 md:mt-20 mb-4 md:mb-12">
        <table className="table w-full">
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
                  <button
                    onClick={() => detailsModalHandler(toy._id)}
                    className="btn btn-outline btn-xs"
                  >
                    details
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <Dialog
          className="w-full"
          size="lg"
          open={showModal}
          onClose={closeModal}
        >
          <DialogHeader className="justify-between">
            <Typography variant="h5" color="blue-gray">
              <h1 className="text-center text-3xl md:ms-10">
                {toyone.toyName}
              </h1>
              <hr className="w-full ms-5" />
            </Typography>

            <IconButton
              color="blue-gray"
              size="xs"
              onClick={closeModal}
              ripple="dark"
            >
              <XMarkIcon strokeWidth={2} className="h-5 w-5" />
            </IconButton>
          </DialogHeader>
          <DialogBody className="overflow-y-scroll md:flex justify-start  ">
            <div className="md:ms-10 text-neutral-800">
              <img className="h-32 mb-5" src={toyone.toyPictureURL} alt="" />
              <Typography variant="body2">
                <span className="md:text-xl font-bold"> Category:</span>{" "}
                {toyone.category}
              </Typography>
              <Typography variant="body2">
                <span className="md:text-xl font-bold">Price:</span> $
                {toyone.price}
              </Typography>
              <Typography variant="body2">
                <span className="md:text-xl font-bold">
                  Available Quantity:
                </span>{" "}
                {toyone.quantity}
              </Typography>
              {/* Add other details here */}
            </div>
            <div className="md:ms-10 mt-3 text-neutral-800">
              <h6>
                <span className="md:text-xl font-bold">seller name : </span>
                {toyone.sellername}
              </h6>
              <h6>
                <span className="md:text-xl font-bold">seller email: </span>{" "}
                {toyone.email}
              </h6>
              <h6>
                <span className="md:text-xl font-bold">rating : </span>
                {toyone.rating}
              </h6>
              <h6>
                <span className="md:text-xl font-bold">
                  available quantity :
                </span>
                {toyone.quantity}
              </h6>
              <h6>
                <span className="md:text-xl font-bold">description : </span>
                {toyone.quantity}
              </h6>
            </div>
          </DialogBody>
        </Dialog>
      )}
    </div>
  );
};

export default ToysShowAll;
