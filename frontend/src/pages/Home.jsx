import React from "react";
import Header from "../components/Header";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <div className="grid-container">
      <header className="text-center font-bold text-4xl pt-2 ">
        <Header />
      </header>
      <main className="py-16 px-8 bg-black">
        <ProductList />
      </main>
      <footer className="flex justify-evenly items-center ">
        <a href="https://www.facebook.com/easytouchprep" className="text-white">
          Facebook
        </a>
        <a
          href="https://www.instagram.com/easy_touchdz/"
          className="text-white"
        >
          Instagram
        </a>
        <a href="https://www.tiktok.com/@easy_touchdz" className="text-white">
          Tiktok
        </a>
      </footer>
    </div>
  );
};

export default Home;
