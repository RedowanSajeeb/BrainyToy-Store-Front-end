// import React from 'react';
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
import { FacebookAuthProvider } from "firebase/auth";
const Login = () => {
  const { signInWithEmAndpass, googleAuthenticate, authenticateUsingFacebook } =
    useContext(AuthContext);

   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || "/";

  const registerFormHandler = (event) => {
    event.preventDefault();
    const formdata = event.target;

    const email = formdata.email.value;
    const password = formdata.password.value;

    console.log(email, password);

    signInWithEmAndpass(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        if (user) {
          toast.success("Login successful! Welcome");
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        toast.error(errorCode, errorMessage);
        console.log(errorMessage);
      });
  };
  // --------loginwithGoogleHandelar
  const loginwithGoogleHandelar = () => {
    googleAuthenticate()
      .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;

        const user = result.user;
        if (user) {
          toast.success("Login successful! Welcome to your account");
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode || errorMessage) {
          toast.error(errorMessage, errorCode);
        }
      });
  };

  // authenticateUsingFacebook
  const loginwithFacebook = () => {
    authenticateUsingFacebook()
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        if (user) {
          toast.success("Login successful! Welcome to your account");
          navigate(from, { replace: true });
        }
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        console.log(credential);

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode || errorMessage) {
          toast.error(errorMessage, errorCode);
        }
      });
  };
  return (
    <div className="md:mt-10">
      <Card
        className="mx-auto  max-w-max mt-5 "
        color="transparent"
        shadow={false}
      >
        <Typography variant="h4" color="blue-gray">
          Sign in
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to Sign in.
        </Typography>
        <form
          onSubmit={registerFormHandler}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input name="email" size="lg" label="Email" required />
            <Input
              name="password"
              type="password"
              size="lg"
              label="Password"
              required
            />
          </div>

          <Typography
            variant="small"
            color="gray"
            className="flex items-center font-normal"
          >
            You Want
            <Link
              to="https://en.wikipedia.org/wiki/Terms_of_service"
              className="font-medium transition-colors hover:text-blue-500"
            >
              &nbsp;
              <span className="text-deep-orange-500">Forgot password ?</span>
            </Link>
          </Typography>
          <button className="w-full">
            <Button className="mt-6" fullWidth>
              login
            </Button>
            <Toaster />
          </button>
          <div className="flex flex-col w-full border-opacity-200">
            <div className="grid h-10 mt-4 card border rounded-box place-items-center">
              <button
                onClick={loginwithGoogleHandelar}
                className="absolute  flex items-center justify-center ms-5"
              >
                <img
                  className="h-7 me-2"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
                  alt=""
                />
                <h6 className="text-lg font-medium">Login with Google</h6>
              </button>
            </div>
            <div className="divider">OR</div>
            <div
              onClick={loginwithFacebook}
              className="grid h-10  border card  rounded-box place-items-center"
            >
              <button className="absolute  flex items-center justify-center ms-5">
                <img
                  className="h-7 me-2"
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/480px-Facebook_f_logo_%282021%29.svg.png"
                  alt=""
                />
                <h6 className="text-lg font-medium">Login with Facebook</h6>
              </button>
            </div>
          </div>
          <Typography color="gray" className="mt-4 text-center font-normal">
            registration ?
            <Link
              to={"/registration"}
              className="font-medium ms-2  text-blue-500 transition-colors hover:text-blue-700"
            >
              Sign Up
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Login;