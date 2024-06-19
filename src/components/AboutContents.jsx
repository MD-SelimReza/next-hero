import Link from "next/link";

const AboutContents = () => {
  return (
    <div>
      <h1 className="text-center">This is About Us page.</h1>
      <div className="flex gap-5 mt-5 justify-center *:bg-blue-500 *:rounded *:py-2 *:px-6 text-white">
        <Link href={"/about/history"}>History</Link>
        <Link href={"/about/mission"}>Mission</Link>
      </div>
    </div>
  );
};

export default AboutContents;
