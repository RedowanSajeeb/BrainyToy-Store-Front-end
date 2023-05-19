// import React from 'react';
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
const Registration = () => {
    return (
      <div>
        <Card
          className="mx-auto  max-w-max mt-5 "
          color="transparent"
          shadow={false}
        >
          <Typography variant="h4" color="blue-gray">
            Sign Up
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Enter your details to register.
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
              <Input size="lg" label="Name" />
              <Input size="lg" label="Email" />
              <Input type="password" size="lg" label="Password" />
              <Input type="password" size="lg" label=" Confirm Password" />
              <Input type="password" size="lg" label="Photo URL" />
            </div>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <Link
                    to="https://en.wikipedia.org/wiki/Terms_of_service"
                    className="font-medium transition-colors hover:text-blue-500"
                  >
                    &nbsp;{" "}
                    <span className="text-deep-orange-500">
                      {" "}
                      Terms and Conditions
                    </span>
                  </Link>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button className="mt-6" fullWidth>
              Register
            </Button>
            <div className="flex flex-col w-full border-opacity-200">
              <div className="grid h-10 mt-4 card border rounded-box place-items-center">
                <div className="absolute  flex items-center justify-center ms-5">
                  <img
                    className="h-7 me-2"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
                    alt=""
                  />
                  <h6 className="text-lg font-medium">Login with Google</h6>
                </div>
              </div>
              <div className="divider">OR</div>
              <div className="grid h-10  border card  rounded-box place-items-center">
                <div className="absolute  flex items-center justify-center ms-5">
                  <img
                    className="h-7 me-2"
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/480px-Facebook_f_logo_%282021%29.svg.png"
                    alt=""
                  />
                  <h6 className="text-lg font-medium">Login with Facebook</h6>
                </div>
              </div>
            </div>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <Link
                href="#"
                className="font-medium text-blue-500 transition-colors hover:text-blue-700"
              >
                Sign In
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    );
};

export default Registration;