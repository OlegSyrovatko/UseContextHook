import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext/ThemeContext";
import ThemedComponent from "./components/ThemedComponent";
import "./App.css";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <h1>Welcome to the Themed App</h1>
      <ThemedComponent />
    </div>
  );
};

export default App;
