// import React, { useState } from "react";
import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
  MenuItem,
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
    <div className="max-w-main mx-auto md:ms-14 md:mr-14">
      <div className="overflow-x-auto w-full mt-5 md:mt-20 mb-4 md:mb-12">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name & Category</th>
              <th>Price & Available Quantity</th>
              <th>Seller Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allToys.map((toy) => (
              <tr key={toy._id}>
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
          className="block"
          size="xs"
          open={showModal}
          onClose={closeModal}
        >
          <DialogHeader className="justify-between w-full">
            <Typography variant="h5" color="blue-gray">
              ToyName: {toyone.toyName}
              <img className="h-30" src={toyone.toyPictureURL} alt="" />
            </Typography>
            <IconButton
              color="blue-gray"
              size="xs"
              variant="text"
              onClick={closeModal}
            >
              <XMarkIcon strokeWidth={2} className="h-5 w-5" />
            </IconButton>
          </DialogHeader>
          <DialogBody className="overflow-y-scroll w-full ">
            <div className="mb-6">
              <Typography
                variant="small"
                color="gray"
                className="font-semibold opacity-70"
              >
                Details
              </Typography>
              <ul className="mt-1 -ml-2 flex flex-col gap-1">
                <MenuItem className="flex items-center gap-3">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1924/1924892.png"
                    alt="metamast"
                    className="h-6 w-6"
                  />
                  <Typography color="blue-gray" variant="h6">
                    Seller Name :{" "}
                    <span className="text-sm">{toyone.sellername}</span>
                  </Typography>
                </MenuItem>
                <MenuItem className="md:flex items-center gap-3">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
                    alt="metamast"
                    className="h-6 w-6 rounded-md"
                  />
                  <Typography color="blue-gray" variant="h6">
                    Seller Email :{" "}
                    <span className="text-sm">{toyone.email}</span>
                  </Typography>
                </MenuItem>
                <MenuItem className="flex items-center gap-3">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4001/4001136.png"
                    alt="metamast"
                    className="h-6 w-6 rounded-md"
                  />
                  <Typography color="blue-gray" variant="h6">
                    Rating : <span className="text-sm">{toyone.rating}</span>
                  </Typography>
                </MenuItem>
              </ul>
            </div>
            <div>
              <Typography
                variant="small"
                color="gray"
                className="font-semibold opacity-70"
              >
                More
              </Typography>
              <ul className="mt-1 -ml-2.5 flex flex-col gap-1">
                <MenuItem className="flex items-center gap-3">
                  <img
                    src="https://t4.ftcdn.net/jpg/05/41/83/71/360_F_541837163_2vhlUtqGKz16Rn5g19H31GtFBathjckN.jpg"
                    alt="metamast"
                    className="h-7  rounded-md border border-blue-gray-50"
                  />
                  <Typography color="blue-gray" variant="h6">
                    Price : <span className="text-sm">${toyone.price}</span>
                  </Typography>
                </MenuItem>
                <MenuItem className="flex items-center gap-3">
                  <img
                    src="https://icons.veryicon.com/png/o/business/sunshine/quantity.png"
                    alt="metamast"
                    className="h-7  rounded-md border border-blue-gray-50"
                  />
                  <Typography color="blue-gray" variant="h6">
                    available quantity
                    <span className="text-sm">: {toyone.quantity}</span>
                  </Typography>
                </MenuItem>
              </ul>
            </div>
          </DialogBody>
          <DialogFooter className="justify-between gap-2 border-t border-blue-gray-50">
            <Typography variant="small" color="gray" className="font-normal">
              {toyone.description}
            </Typography>
          </DialogFooter>
        </Dialog>
      )}
    </div>
  );
};

export default ToysShowAll;
