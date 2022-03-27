import { useState, useEffect } from "react";

import classes from "./Category.module.css";
import axios from "axios";

const Category = (props) => {
    const [categories, setCategories] = useState({});
    const [select, setSelect] = useState("");

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products/categories")
            .then((response) => {
                setCategories(response.data);
            });
    }, []);

    const getSelect = (e) => {
        setSelect(e.target.value);
    };

    props.category(select);

    return (
        <div className={classes.category}>
            <h1>Category</h1>
            <select onChange={getSelect}>
                {Object.keys(categories).map((i) => (
                    <option value={categories[i]} key={i}>
                        {categories[i]}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Category;
