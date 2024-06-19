import { singlePostApi } from "@/app/utils/singlePostApi";

export const generateMetadata = async ({ params }) => {
  const postId = params.id;
  const { title, body } = await singlePostApi(postId);

  return {
    title: `${title}`,
    description: `${body}`,
    keywords: `${body.split(" ")}`,
  };
};

const PostDetailsPage = async ({ params }) => {
  const postId = params.id;
  const { title, body } = await singlePostApi(postId);

  return (
    <div className="px-10">
      <div className="border rounded p-5 mx-auto">
        <h1 className="text-center text-2xl border-b w-fit mx-auto pb-2 mb-3">
          {title}
        </h1>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default PostDetailsPage;
