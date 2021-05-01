import React, { useState } from "react";
import ReactDOM from "react-dom";
import FoodPill from "./food-pill";
import calorieData from "./data/caloriedata";

// import "./styles.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";

let imgs = [
  "data:image/jpeg;base64,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"
];

function TotalCalory({ totalCalorie }) {
  return <h2> Calorie consumed: {totalCalorie}</h2>;
}

function Header({ heading }) {
  return <h1>{heading} </h1>;
}
function FoodTable({ calorieData, foodPillClickHandler }) {
  return calorieData
    .slice(0, 10)
    .map(({ name, measure, calories }) => (
      <FoodPill
        key={name}
        name={name}
        measure={measure}
        calories={calories}
        onFoodPillClick={foodPillClickHandler}
      />
    ));
}

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  const [totalCalorie, setTotal] = useState(0);
  // hook to add save and add to the total calories
  const [addCal, setCal] = useState(0);
  const foodPillClickHandler = (totalCalorie) => {
    setCal(totalCalorie + addCal);
    setTotal(totalCalorie + addCal);
  };
  //Put the click handler here.
  // const foodPillClickHandler = (totalCalorie) => {

  //   this.setState({ totalCalorie: this.state.totalCalorie + totalCalorie });

  // };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="App">
        <img className="thumbnail" alt="new" src={imgs} />
        <Header heading={"Let's see how many calories"} />
        <FoodTable
          calorieData={calorieData}
          foodPillClickHandler={foodPillClickHandler}
        />
        <TotalCalory totalCalorie={totalCalorie} />
      </div>
      <button className="mainButton" onClick={toggleTheme}>
        Switch mode
      </button>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
