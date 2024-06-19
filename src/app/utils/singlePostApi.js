export const singlePostApi = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SINGLE_POST_API}/${id}`)
    const data = res.json();
    return data;
}