"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const navLinks = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Gallery",
      path: "/gallery",
    },
    {
      title: "Meals",
      path: "/meals",
    },
    {
      title: "Posts",
      path: "/posts",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
    {
      title: "Categories",
      path: "/categories",
    },
    {
      title: "Dashboard",
      path: "/dashboard",
    },
  ];

  const handleLogin = () => {
    router.push("/login");
  };

  if (pathName.includes("dashboard"))
    return (
      <div>
        <div>Dashboard Layout</div>
        {/* <div>{children}</div> */}
        <div>Dashboard Footer</div>
      </div>
    );
  return (
    <div>
      <nav className="flex items-center justify-between px-10 py-5 text-white bg-blue-600">
        <Link href={"/"} className="text-3xl font-bold text-cyan-300">
          <span className="text-emerald-500">Next</span> Hero
        </Link>
        <ul className="flex gap-5 lg:flex-row flex-col">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                className={`${
                  pathName === link.path &&
                  "text-cyan-400 border-b-2 border-b-cyan-400"
                }`}
                href={link.path}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={handleLogin}
          className="btn border py-2 px-6 rounded hover:text-emerald-400 border-emerald-400"
        >
          Login
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
