import React from "react";

function FoodPill({ name, measure, calories, onFoodPillClick }) {
  return (
    <div onClick={() => onFoodPillClick(calories)}>
      <span> {name} </span>
      <span> {measure}- </span>
      <span className="foodCal"> {calories} </span>
    </div>
  );
}

export default FoodPill;
