export const getPosts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_POST_API}/posts`);
    const data = res.json();
    return data;
};