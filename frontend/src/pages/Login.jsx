import React from "react";
import { json, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../app/userSlice";

const Login = () => {
  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <section class=" ">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-primary">
            Easy Touch
          </h2>
          <p class="mb-8 lg:mb-16 text-white  text-center  sm:text-xl">
            Welcome back , log in into your account and if you are new{" "}
            <span
              onClick={() => navigate("/")}
              className="text-secondary cursor-pointer underline font-semibold"
            >
              {" "}
              Signup
            </span>
          </p>
          <form onSubmit={(e) => handleSubmit(e)} action="#" class="space-y-8">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="shadow-sm outline-primary bg-black   text-white text-sm rounded-lg  block w-full p-2.5 border-2 border-primary focus:ring-primary focus:border-primary  placeholder-primary dark:shadow-sm-light"
                placeholder="email@gmail.com"
                required
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-white "
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                class="block p-3 w-full text-sm bg-black outline-primary  text-white  rounded-lg outline-secondary shadow-sm border-2 border-primary focus:ring-primary focus:border-primary  placeholder-primary dark:shadow-sm-light"
                placeholder="enter a valid password"
                required
              />
            </div>

            <button
              type="submit"
              class="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg bg-primary  hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
            >
              Login
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
