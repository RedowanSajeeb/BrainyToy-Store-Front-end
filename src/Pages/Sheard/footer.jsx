// import React from 'react';

const Footer = () => {
    return (
      <div>
        <footer className="footer p-10 md:mt-24 mt-5 bg-base-200 text-base-content">
          <div>
            <img
              className="h-24"
              src="https://images.vexels.com/media/users/3/189965/isolated/preview/2fa8f49698539df25f9d1bb0ea22e5d9-toy-dice-icon.png"
              alt=""
            />
            <p className="text-xl">BrainYToy Store ®</p>
            <p className="md:w-96 text-gray-500">
              BrainYToy Store is your ultimate destination for educational toys
              that spark curiosity and inspire young minds to learn. We believe
              in the power of play to ignite imagination and promote cognitive
              development.
            </p>
            <h6>123 Main Street, Cityville, State, Country</h6>
          </div>
          <div>
            <span className="footer-title text-xl">Services</span>
            <a className="link link-hover">Personalized Toy Recommendations</a>
            <a className="link link-hover">Toy Repair</a>
            <a className="link link-hover">Gift Wrapping</a>
            <a className="link link-hover">Maintenance Toy</a>
          </div>
          <div>
            <span className="footer-title text-xl">Contact us</span>
            <a className="link link-hover">Phone: 123-456-7890</a>
            <a className="link link-hover">Email: info@brainytoystore.com</a>
            <a className="link link-hover">123 Main Street, Cityville</a>
            <div className="flex gap-4 justify-center items-center">
              <img
                className="h-7 mt-3"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
                alt=""
              />
              <img
                className="h-7 mt-3"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                alt=""
              />
              <img
                className="h-9 mt-3"
                src="https://static.vecteezy.com/system/resources/previews/018/930/587/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png"
                alt=""
              />
              <img
                className="h-7 mt-3"
                src="https://img.freepik.com/free-icon/twitter_318-788985.jpg?w=2000"
                alt=""
              />
            </div>
          </div>
          <div>
            <span className="footer-title text-xl">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </footer>
        <p className="text-center  mb-3 text-gray-500 bg-base-200 ">
          Copyright © 2023 - All right reserved by BrainYToy Ltd
        </p>
      </div>
    );
};

export default Footer;