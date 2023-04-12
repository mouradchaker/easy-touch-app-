import React from "react";
import LoginBtn from "../components/LoginBtn";
import LogoutBtn from "../components/LogoutBtn";

const Sigin = () => {
  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <section class=" ">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-primary">
            Easy Touch
          </h2>
          <p class="mb-8 lg:mb-16 text-white  text-center  sm:text-xl">
            Hello , create an account if you are new and if this is not your
            first time{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-secondary cursor-pointer underline font-semibold"
            >
              {" "}
              Login
            </span>
          </p>
          <LoginBtn />
          <LogoutBtn />
        </div>
      </section>
    </div>
  );
};

export default Sigin;
