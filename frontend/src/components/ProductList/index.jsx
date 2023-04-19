import React, { useEffect, useState } from "react";
import data from "../../data.json";

import CartItems from "../CartItems";

import FadeIn from "react-fade-in/lib/FadeIn";
import { useAddDishMutation, useGetDishesQuery } from "../../app/apiSlice";
import "./style.css";
const ProductList = () => {
  const [addDish, res] = useAddDishMutation();
  const query = useGetDishesQuery();

  const handleClick = (e) => {
    const newDish = {
      image: e.image,
      title: e.title,
      price: e.price,
    };
    addDish(newDish);
  };
  useEffect(() => {
    query.refetch();
  }, [res.isLoading]);
  return (
    <div className=" md:grid md:grid-flow-row md:grid-cols-4 md:grid-rows-1 grid-rows-2 grid-flow-col">
      <div className="md:col-span-3  order-1">
        <div className="grid gap-2 grid-cols-1 md:grid-cols-3">
          {data.map((product) => (
            <div className="md:w-5/6 h-fit border-2 mb-5 bg-con border-black rounded-3xl">
              <FadeIn transitionDuration="800">
                <a className="flex justify-center" href={"#" + product._id}>
                  <img
                    className="rounded-t-2xl w-4/5 h-4/5 "
                    src={product.image}
                    alt=""
                  />
                </a>
              </FadeIn>

              <div>
                <p className="font-bold px-4"> {product.title} </p>
                <div className="px-4"> {product.price} DA </div>
                <button
                  onClick={() => handleClick(product)}
                  className="float-right flex items-center gap-1 pr-2 p-1 lg:p-2 rounded-tl-xl text-black rounded-br-3xl bg-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5    "
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:col-span-1 text-white  order-2">
        <h1 className="text-white mb-2">Ajouter a Votre Panier</h1>

        <CartItems />
      </div>
    </div>
  );
};

export default ProductList;
