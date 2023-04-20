import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
const Complete = () => {
  const { width, height } = useWindowSize();
  return (
    <>
      <Confetti width={width} height={height} />
      <div
        className="bg-black  flex justify-center items-center px-8"
        style={{ height: "100vh" }}
      >
        <span className=" text-white text-xl text-center">
          Merci d'avoir terminé votre commande, nous vous appellerons dans les
          prochaines heures pour confirmer votre commande{" "}
          <h1 className="text-sm mt-10 mx-4">
            {" "}
            Avec{" "}
            <a
              href="https://easytouchdz.web.app/"
              className="text-primary font-bold "
            >
              Easy Touch
            </a>{" "}
            vous obtenez les meilleures plates pour le moindre effort.{" "}
          </h1>
        </span>
      </div>
    </>
  );
};

export default Complete;
