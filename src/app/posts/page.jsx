import PostContents from "@/components/PostContents";
import { getPosts } from "../utils/postApi";
export const metadata = {
  title: "Posts",
  description: "Posts Page",
};

const PostsPage = async () => {
  const postData = await getPosts();

  return (
    <div className="px-5">
      <PostContents postData={postData} />
    </div>
  );
};

export default PostsPage;
