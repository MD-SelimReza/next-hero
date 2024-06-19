// import Image from "next/image";

import Heading from "@/components/Heading";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Heading />
      <h1 className="text-2xl text-sky-400">Hello Next Hero</h1>
      <button className="btn btn-primary bg-sky-500 py-3 px-8 rounded mt-5">Call me</button>
    </main>
  );
}
