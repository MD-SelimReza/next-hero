import MealContents from "@/components/MealContents";
export const metadata = {
  title: "Meals",
  description: "Meals Page",
};

const MealsPage = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl mb-3 text-blue-500">Choose Your Meals</h1>
      <p>Choose meals of you choice by searching ....... </p>
      <MealContents />
    </div>
  );
};

export default MealsPage;
