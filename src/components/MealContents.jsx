"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../app/meals/style.module.css";

const MealContents = () => {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);

  const getMeals = async () => {
    const { data } = await axios(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );
    setMeals(data.meals);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    getMeals();
  }, [search]);

  return (
    <div className="mt-8 px-10">
      <input
        onChange={handleSearch}
        className="p-3 text-black"
        type="text"
        name="search"
        placeholder="search meals"
        id=""
      />
      <button onClick={() => getMeals()} className="btn bg-blue-700 py-3 px-8">
        Search
      </button>
      <div className="grid grid-cols-3 gap-10 mt-10">
        {meals && meals.length ? (
          meals.map((meal) => (
            <div key={meal.idMeal} className="border text-left">
              <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                <Image
                  src={meal?.strMealThumb}
                  alt={meal.strMeal}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-5">
                <h3 className={styles.heading_3}>{meal.strMeal}</h3>
                <p>{meal.strInstructions.slice(0, 250)}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Not found meals....</p>
        )}
      </div>
    </div>
  );
};

export default MealContents;
