import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="shadow py-4 px-4 text-white bg-black fixed w-full z-10">
      <ul className="flex justify-between md:max-w-[50%] mx-auto ">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        {/* <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/service"}>Service</Link>
        </li> */}
        <li>
          <Link href={"/product"}>Product</Link>
        </li>
        <li>
          <Link href={"/productTwo"}>Product2</Link>
        </li>
        <li>
          <Link href={"/dashboard/blog"}>Blogs</Link>
        </li>
        <li>
          <Link href={"/dashboard/blog-graphql"}>blog-graphql</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
