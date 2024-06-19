"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const session = useSession();
  console.log(session);
  const imageUrl = session?.data?.user?.image;
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
    router.push("/api/auth/signin");
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
        <div className="flex gap-3">
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
          <div className="flex gap-3">
            <h3>
              {session?.data?.user?.name} <br />
              {session?.data?.user?.type}
            </h3>
            {imageUrl && (
              <div className="rounded-full mr-3 overflow-hidden size-12">
                <Image
                  height={50}
                  width={50}
                  alt={session?.data?.user?.name}
                  src={imageUrl}
                />
              </div>
            )}
          </div>
        </div>
        {session.status !== "authenticated" ? (
          <button
            onClick={handleLogin}
            className="btn border py-2 px-6 rounded hover:text-emerald-400 border-emerald-400"
          >
            Login
          </button>
        ) : (
          <button
            onClick={() => signOut()}
            className="btn border py-2 px-6 rounded hover:text-emerald-400 border-emerald-400"
          >
            Logout
          </button>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
