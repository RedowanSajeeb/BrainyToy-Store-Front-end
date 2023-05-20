// import React from 'react';
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
import { FacebookAuthProvider } from "firebase/auth";
const Registration = () => {
const {
  createUserWithEmailAndPass,
  googleAuthenticate,
  userProfile,
  authenticateUsingFacebook,
} = useContext(AuthContext);

    const registerFormHandler = (event) =>{
      event.preventDefault();
      const formdata = event.target;
      const name = formdata.name.value;
      const email = formdata.email.value;
      const password = formdata.password.value;
      const confirmPassword = formdata.confirmPassword.value;
      const PhotoUrl = formdata.PhotoUrl.value;

      if(password !== confirmPassword){
        return toast.error(
          "This didn't work The password and confirm password values do not match."
        );
      }
    //  ------------------regular expression password validation having special characters

    if (!/^(?=.*[A-Z]).*$/.test(password)) {
      return toast.error(
        "Password must have at least one Uppercase Character."
      );
    }
    if (!/^(?=.*[a-z]).*$/.test(password)){
      return toast.error(
        "Password must have at least one Lowercase Character."
      );
    }
    if (!/^(?=.*[0-9]).*$/.test(password)){
      return toast.error("Password must contain at least one Digit");
    }
      console.log(name, email, password, confirmPassword, PhotoUrl);

      // createUserWithEmailAndPassword

  createUserWithEmailAndPass(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // -----------------------------
        userProfile(name, PhotoUrl)
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
            console.log(error);
          });
          // --------------------------
      if(user){
        toast.success(
          "Congratulations on successfully registering !"
        );
      }
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage);
      toast.error(errorCode,errorMessage);
      // ..
    });

    

    }

  

// --------loginwithGoogleHandelar
const loginwithGoogleHandelar = () =>{
  googleAuthenticate()
    .then((result) => {

      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      
      const user = result.user;
      if(user){
        toast.success("Login successful! Welcome to your account");
      }
 
    
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      if(errorCode || errorMessage){
        toast.error(errorMessage,errorCode)
      }
    
      
    });
}

// authenticateUsingFacebook
const loginwithFacebook = () =>{
  authenticateUsingFacebook()
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
       if (user) {
         toast.success("Login successful! Welcome to your account");
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
    
}
 

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
          <form
            onSubmit={registerFormHandler}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-4 flex flex-col gap-6">
              <Input name="name" size="lg" label="Name" required />
              <Input name="email" size="lg" label="Email" required />
              <Input
                name="password"
                type="password"
                size="lg"
                label="Password"
                required
              />
              <Input
                name="confirmPassword"
                type="password"
                size="lg"
                label=" Confirm Password"
                required
              />
              <Input name="PhotoUrl" type="text" size="lg" label="Photo URL" />
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
              required
            />
            <button className="w-full">
              <Button className="mt-6" fullWidth>
                Register
              </Button>
              <Toaster />
            </button>
            <div className="flex flex-col w-full border-opacity-200">
              <div className="grid h-10 mt-4 card border rounded-box place-items-center">
                <button onClick={loginwithGoogleHandelar} className="absolute  flex items-center justify-center ms-5">
                  <img
                    className="h-7 me-2"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
                    alt=""
                  />
                  <h6 className="text-lg font-medium">Login with Google</h6>
                </button>                
              </div>
              <div className="divider">OR</div>
              <div onClick={loginwithFacebook} className="grid h-10  border card  rounded-box place-items-center">
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
              Already have an account?{" "}
              <Link
                to={"/signin"}
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