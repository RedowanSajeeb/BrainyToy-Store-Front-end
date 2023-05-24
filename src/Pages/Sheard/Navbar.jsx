import React, { useContext } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  Bars2Icon,
} from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-hot-toast";

// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
  },
  {
    label: <Link to="/signin">Login</Link>,
    icon: InboxArrowDownIcon,
  },
  {
    label: (
      <button className="w-full">
        <Link to="/registration">Registration</Link>
      </button>
    ),
    icon: LifebuoyIcon,
  },
  // {
  //   label: <Link>Sign Out</Link>,
  //   icon: PowerIcon,
  // },
];

function ProfileMenu() {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);

  const signOutHandelar = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        toast.success("Sign-out successful");
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center md:me-20 gap-1 rounded-full  pr-2 pl-0.5 lg:ml-auto"
        >
          {user ? (
            <>
              <Tooltip content={user.displayName} placement="top">
                <img
                  className="h-10 rounded-full "
                  src={user.photoURL}
                  alt=""
                />
              </Tooltip>
            </>
          ) : (
            <>
              <Avatar
                variant="circular"
                size="sm"
                alt="candice wu"
                className="border border-blue-500 p-0.5"
                src="https://cdn.onlinewebfonts.com/svg/img_237553.png"
              />
            </>
          )}

          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={key}
              as="a"
              to="/"
              variant="small"
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
        <MenuItem className="ms-0 ">
          <button
            onClick={signOutHandelar}
            className=" text-red-500 flex items-center  "
          >
            <img
              className="h-5  "
              src="https://icones.pro/wp-content/uploads/2022/07/symbole-de-puissance-et-d-energie-rouge.png"
              alt="icon"
            />
            <span className="ms-2 text-sm"> Sign Out</span>
          </button>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

// nav list menu
const navListMenuItems = [
  // ----------
];

function NavListMenu() {
  // const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // const triggers = {
  //   onMouseEnter: () => setIsMenuOpen(true),
  //   onMouseLeave: () => setIsMenuOpen(false),
  // };

  const renderItems = navListMenuItems.map(({ title, description }, idx) => (
    <link key={idx}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </link>
  ));

  return (
    <React.Fragment>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}

// nav list component

function NavList() {
  const { user } = useContext(AuthContext);
  // console.log(user);
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />

      <NavLink to={"/"}>
        <Typography>
          <MenuItem className="text-gray-800 text-sm  flex items-center lg:rounded-full ">
            Home
          </MenuItem>
        </Typography>
      </NavLink>
      <NavLink to={"/allToys"}>
        <Typography>
          <MenuItem className="text-gray-800 text-sm  flex items-center lg:rounded-full ">
            All Toys
          </MenuItem>
        </Typography>
      </NavLink>
      {!user ? (
        <NavLink to={"/signin"}>
          <Typography>
            <MenuItem className="text-gray-800 text-sm  flex items-center lg:rounded-full ">
              Login
            </MenuItem>
          </Typography>
        </NavLink>
      ) : null}
      {user && (
        <NavLink to={"/mytoy"}>
          <Typography>
            <MenuItem className="text-gray-800 text-sm  flex items-center lg:rounded-full ">
              My Toys
            </MenuItem>
          </Typography>
        </NavLink>
      )}
      {user && (
        <NavLink to={"/addAToy"}>
          <Typography>
            <MenuItem className="text-gray-800 text-sm  flex items-center lg:rounded-full 2">
              Add A Toy
            </MenuItem>
          </Typography>
        </NavLink>
      )}
      <NavLink to={"/blogs"}>
        <Typography>
          <MenuItem className="text-gray-800 text-sm  flex items-center lg:rounded-full ">
            Blogs
          </MenuItem>
        </Typography>
      </NavLink>
    </ul>
  );
}

export default function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar className="sticky inset-0 z-10 h-max max-w-full p-2  lg:pl-6">
      <div className="relative mx-auto flex items-center text-blue-gray-900">
        <Link to={"/"}>
          <Typography className="mr-4 ml-2 cursor-pointer py-1.5 font-medium">
            <div className="flex justify-center items-center">
              <img
                className="h-16"
                src="https://images.vexels.com/media/users/3/189965/isolated/preview/2fa8f49698539df25f9d1bb0ea22e5d9-toy-dice-icon.png"
                alt=""
              />
              <span className="md:text-3xl">BrainYToy Store</span>
            </div>
          </Typography>
        </Link>
        <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
        <ProfileMenu />
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
}
