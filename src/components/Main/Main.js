import { useEffect, useState } from "react";

import classes from "./Main.module.css";
import axios from "axios";
import Products from "../Products/Products";

const Main = (props) => {
    const [data, setData] = useState([]);
    const [result, setResult] = useState("5");

    const getResult = (e) => {
        setResult(e.target.value);
    };

    let category = "";

    if(props.categories !== "" && props.categories !== undefined) {
      category = `/category/${props.categories}`;
    } else {
      category = "";
    }

    useEffect(() => {
      axios
          .get(`https://fakestoreapi.com/products${category}?limit=${result}`)
          .then((response) => {
              setData(response.data);
      });
    }, [result])
    

    return (
        <div className={classes.main}>
            <div>
                <select
                    className={classes.limitResults}
                    defaultValue="5"
                    onChange={getResult}
                >
                    <option value="5">5</option>
                    <option value="8">8</option>
                    <option value="10">10</option>
                </select>
            </div>
            <div className={classes.products}>
                {data.map((product) => (
                    <Products
                        key={product.id}
                        image={product.image}
                        title={product.title}
                        rating={product.rating.rate}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default Main;
