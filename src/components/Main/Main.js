import { Container } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";
import CardUI from "../Card/CardUI";
import "./Main.css";

function Main() {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      await axios
        .get(`https://dummyjson.com/products?limit=${limit}`)
        .then((res) => setProducts(res.data.products));
      setLoading(false);
    };
    fetchProduct();
  }, [limit]);

  const scrollToEnd = () => {
    if (limit < 100) {
      setLimit((prevLimit) => {
        return prevLimit + 5;
      });
    }
  };

  window.onscroll = function () {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      scrollToEnd();
    }
  };

  return (
    <>
      <div className="main">
        {products &&
          products.map((product) => (
            <Container maxWidth="xs" key={product.id}>
              <CardUI
                title={product.title}
                category={product.category}
                description={product.description}
                discountPercentage={product.discountPercentage}
                id={product.id}
                price={product.price}
                rating={product.rating}
                stock={product.stock}
                brand={product.brand}
                thumbnail={product.thumbnail}
              />
            </Container>
          ))}
      </div>

      <div className="spinner">
        <PuffLoader
          color="#00BFFF"
          loading={loading}
          height={800}
          width={100}
        />
      </div>
    </>
  );
}

export default Main;
