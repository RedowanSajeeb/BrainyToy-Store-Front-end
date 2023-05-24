// import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
import {
  Button,
  CardHeader,
  Input,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useContext, useEffect, useState } from "react";


const ToysShowAll = () => {
  const alltoys = useLoaderData();
  const [alltoy, setAlltoy] = useState(alltoys);
  const [searchText, setSearchText] = useState("");
  const { user } = useContext(AuthContext);

  const userLoginAlert = () => {
    if (!user) {
      toast.error("Please log in first before visiting!");
    }
  };
useEffect(() => {
  document.title = "All Toys";
}, []);
  const search = () => {
    fetch(
      `https://brainy-toy-store-server-side.vercel.app/getSearchByToyName/${searchText}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAlltoy(data);
      });
  };

  const all = () => {
    fetch("https://brainy-toy-store-server-side.vercel.app/brainy")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAlltoy(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://brainy-toy-store-server-side.vercel.app/brainy"
        );
        const data = await response.json();
        console.log(data);
        setAlltoy(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const aSCENDING = () => {
    fetch("https://brainy-toy-store-server-side.vercel.app/ascending")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAlltoy(data);
      });
  };

  const dESCENDING = () => {
    fetch("https://brainy-toy-store-server-side.vercel.app/descending")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAlltoy(data);
      });
  };

  const TABS = [
    {
      label: (
        <Button  color="amber" onClick={all}>
          All
        </Button>
      ),
      value: "all",
    },
    {
      label: (
        <Button color="amber" onClick={dESCENDING}>
          DESCENDING
        </Button>
      ),
      value: "DESCENDING",
    },
    {
      label: (
        <Button color="amber" onClick={aSCENDING}>
          ASCENDING
        </Button>
      ),
      value: "ASCENDING",
    },
  ];

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    search();
  };

  return (
    <div className="max-w-main mx-auto md:ms-14 md:mr-14">
      <CardHeader floated={false} shadow={false} className="rounded-none mt-5">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              All Toys list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all Educational and learning toys
            </Typography>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs className="mt-6 w-full" value="html">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody>
              {TABS.map(({ value, desc }) => (
                <TabPanel key={value} value={value}>
                  {desc}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
          <form onChange={handleSearchSubmit} className="w-full md:w-72">
            <Input
              name="search"
              label="Search"
              value={searchText}
              onChange={handleSearchChange}
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
            <button className="w-full">
              <Button className="w-full  mt-3" variant="outlined">
                Enter
              </Button>
            </button>
          </form>
        </div>
      </CardHeader>
      {/* -------------------------------------------------------------------- */}
      <div className="overflow-x-auto w-full mt-5 md:mt-20 mb-4 md:mb-12">
        <table className="table table-zebra rounded-2xl w-full">
          <thead>
            <tr>
              <th>Name & Category</th>
              <th>Price & Available Quantity</th>
              <th>Seller Name</th>
              <th> details</th>
            </tr>
          </thead>
          <tbody>
            {alltoy.map((toy) => (
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
                  <Link to={`/details/${toy._id}`} onClick={userLoginAlert}>
                    <button className="btn btn-outline btn-xs">details</button>
                    <Toaster></Toaster>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ToysShowAll;
