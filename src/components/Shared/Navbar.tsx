/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import DropdownMenu from "./DropDown";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
          >
            <li>
              {" "}
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="">Service</Link>
              <ul className="p-2">
                <li>
                  <Link href="">Website Development</Link>
                </li>
                <li>
                  <Link href="">Mobile App Development</Link>
                </li>
                <li>
                  <Link href="">Ecommerce-site Development</Link>
                </li>
                <li>
                  <Link href="">UI/UX Design & Dev</Link>
                </li>
                <li>
                  <Link href="">API Integration</Link>
                </li>
                <li>
                  <Link href="">Digital Marketing</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Link href="">
          <img className="w-[250px]" src="/images/logo.jpg" alt="" />
          
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 hidden md:flex gap-x-4 text-xl">
          <li>
            {" "}
            <Link href="/">Home</Link>
          </li>
          <li>
           <DropdownMenu></DropdownMenu>

            {/* <details >
              <summary className="z-[-1]">Services</summary>
              <ul className="p-2 ">
                <li>
                  <Link href="">Website Development</Link>
                </li>
                <li>
                  <Link href="">Mobile App Development</Link>
                </li>
                <li>
                  <Link href="">Ecommerce-site Development</Link>
                </li>
                <li>
                  <Link href="">UI/UX Design & Dev</Link>
                </li>
                <li>
                  <Link href="">API Integration</Link>
                </li>
                <li>
                  <Link href="">Digital Marketing</Link>
                </li>
              </ul>
            </details> */}
          </li>
          <li>
            <Link href="">Projects</Link>
          </li>
          <li>
            <Link href="">Careers</Link>
          </li>
          <li>
            <Link href="">Our Team</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/about" className="btn text-xl">
          Know More
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
