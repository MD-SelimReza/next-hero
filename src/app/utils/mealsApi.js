export const getMeals = async (search) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_MEALS_API}=${search}`);
    const data = res.json();
    return data?.meals;
};