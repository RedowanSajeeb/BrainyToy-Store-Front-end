// import React from 'react';

import { Button } from "@material-tailwind/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const F404 = () => {
  useEffect(() => {
    document.title = "404";
  }, []);
    return (
      <div>
        <img
          className="mx-auto"
          src="https://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg"
          alt=""
        />
        <Link to={'/'}>
          <Button className="text-center w-full md:mt-20">Go To back</Button>
        </Link>
      </div>
    );
};

export default F404;