import { Headland_One } from "next/font/google";
const headland = Headland_One({ weight: ["400"], subsets: ["latin"] });
import AboutContents from "@/components/AboutContents";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
export const metadata = {
  title: "About",
  description: "About Page",
};

const getTime = async () => {
  const res = await fetch("http://localhost:3000/time", {
    next: { revalidate: 5 },
  });
  const data = await res.json();
  return data.currentTime;
};

const AboutPage = async () => {
  const currentTime = await getTime();
  const session = getServerSession(authOptions);
  console.log({ session });

  return (
    <div className={headland.className}>
      <AboutContents />
      <h3 className="text-3xl mt-3 text-sky-400 text-center">
        Time : {currentTime}
      </h3>
    </div>
  );
};

export default AboutPage;
