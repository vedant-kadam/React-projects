import React, { useCallback, useEffect, useState } from "react";
import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import Error from "./Error";
const getMealConfig = {};
const Meals = () => {
  // const [mealsData, setMealsData] = useState([]);
  const {
    data: mealsData,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", getMealConfig, []);

  // useEffect(() => {
  //   async function getMealsData() {
  //     let data = await fetchMealsData();
  //     setMealsData(data);
  //   }
  //   getMealsData();
  // }, []);

  // const fetchMealsData = useCallback(function fetchMealsData() {
  //   return new Promise(async (res) => {
  //     try {
  //       const urlRes = await fetch("http://localhost:3000/meals");
  //       if (urlRes.ok) {
  //         let jsonData = await urlRes.json();
  //         res(jsonData);
  //       } else {
  //         res([]);
  //       }
  //       console.log(urlRes);
  //     } catch (error) {
  //       res([]);
  //       console.log(error);
  //     }
  //   });
  // }, []);
  if (isLoading) {
    return <p className="center">Data Loading....</p>;
  }
  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }
  console.log(mealsData);
  return (
    <ul id="meals">
      {mealsData.map((meal) => {
        return <MealItem key={meal.id} mealObj={meal} />;
      })}
    </ul>
  );
};

export default Meals;
