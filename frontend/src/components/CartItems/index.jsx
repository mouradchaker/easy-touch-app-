import React, { useEffect, useState } from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
import Checkout from "../Checkout";
import { useDeleteDishMutation, useGetDishesQuery } from "../../app/apiSlice";

const CartItems = () => {
  const { data } = useGetDishesQuery();

  const query = useGetDishesQuery();
  const [deleteDish, res] = useDeleteDishMutation();

  const [showCheckout, setShowCheckout] = useState(false);
  const productsNames = data?.map((one) => one.title);

  useEffect(() => {
    query.refetch();
  }, [res.isLoading]);
  return (
    <>
      <FadeIn>
        {data?.map((product) => (
          <div className="flex justify-evenly items-center gap-2 border-2 border-primary rounded-lg p-2 mb-2">
            {" "}
            <img className="w-20 " src={product.image} alt="" />{" "}
            <div className="info  flex items-center ">
              <div className="flex flex-col justify-center items-center mt-1 gap-5">
                <p className="text-lg"> {product.title} </p>
                <p className="text-right font-bold"> {product.price} DA </p>
              </div>
            </div>
            <div>
              <svg
                onClick={() => deleteDish(product._id)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-primary cursor-pointer "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        ))}
      </FadeIn>

      {data?.length !== 0 && (
        <div className="flex items-center  mt-8 justify-between">
          <p>
            Your Total is{" "}
            <span className="font-extrabold text-primary">
              {" "}
              {data?.reduce((a, c) => parseInt(a) + parseInt(c.price), 0)}{" "}
            </span>{" "}
          </p>
          <button
            onClick={() => setShowCheckout(true)}
            className="bg-primary rounded-lg text-black py-1 px-2"
          >
            {" "}
            Confirmer{" "}
          </button>
        </div>
      )}

      {showCheckout && <Checkout productsNames={productsNames} />}
    </>
  );
};

export default CartItems;
