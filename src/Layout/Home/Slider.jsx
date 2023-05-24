// import React from 'react';
import { Carousel, Typography, Button } from "@material-tailwind/react";

const Slider = () => {
  return (
    <div>
      <Carousel autoplay={true} className=" md:h-[700px] ">
        <div className="relative h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1595550903979-1969e5adeb92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white">
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
              <Typography
                color="white"
                className="mb-4  md:text-4xl lg:text-5xl"
              >
                Where Learning Meets Play, a Haven for Growth
              </Typography>

              <div className="flex gap-2">
                <Button size="lg" color="white">
                  Explore
                </Button>
                <Button size="lg" color="white" variant="text">
                  Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1567619863709-1d5361a78241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white">
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
              <Typography
                color="white"
                className="mb-4  md:text-4xl lg:text-5xl"
              >
                Where Curiosity Thrives, Learning Flourishes - LearnPlay Haven
              </Typography>

              <div className="flex gap-2">
                <Button size="lg" color="white">
                  Explore
                </Button>
                <Button size="lg" color="white" variant="text">
                  Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="https://momlovesbest.com/wp-content/uploads/2021/02/Educational-Toys-For-5-Year-Olds-scaled.jpg"
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-end  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white">
            <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-60">
              <Typography
                color="white"
                className="mb-4  md:text-4xl lg:text-5xl"
              >
                Empowering Minds and Hearts through Learning and Play at
                LearnPlay Haven
              </Typography>

              <div className="flex gap-2">
                <Button size="lg" color="white">
                  Explore
                </Button>
                <Button size="lg" color="white" variant="text">
                  Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
