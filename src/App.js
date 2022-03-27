import {useState} from "react";

import Category from "./components/Category/Category";
import Main from "./components/Main/Main";
import classes from './App.module.css';

function App() {
  
  let category;
  const passCategory = (e) => {
    category = e;
  }

  return (
    <div className={classes.app}>
      <Category category={passCategory} />
      <Main categories={category} />
    </div>
  );
}

export default App;
