import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import React from "react";

const PostContents = ({ postData }) => {
  return (
    <div>
      <h3 className="text-center underline mb-10 text-3xl">
        All Post : {postData.length}
      </h3>
      <div className="grid grid-cols-3 gap-6">
        {postData?.slice(0, 21)?.map((post) => (
          <div key={post?.id} className="border flex flex-col p-5">
            <div className="flex-1 mb-3">
              <h1 className="text-xl mb-2">
                Title : {post?.title?.slice(0, 25)}
              </h1>
              <h1>Description : {post.body}</h1>
            </div>
            <button className="btn py-3 px-8 rounded bg-blue-700">
              <Link href={`/posts/${post?.id}`}>View Details</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostContents;
