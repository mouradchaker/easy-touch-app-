import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import FadeIn from "react-fade-in/lib/FadeIn";
import { useAddOrderMutation } from "../../app/apiSlice";
const Checkout = ({ productsNames }) => {
  const navigate = useNavigate();
  const form = useRef();
  const [addOrder] = useAddOrderMutation();
  const sendEmail = (e) => {
    e.preventDefault();
    const newOrder = {
      name: e.target.name.value,
      address: e.target.address.value,
      telnum: e.target.telnum.value,
      message: e.target.message.value,
    };
    addOrder(newOrder);
    emailjs
      .sendForm(
        "service_41hbnhd",
        "template_qnkxpkv",
        form.current,
        "HxjZLb_ub2_Ku6tG8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    navigate("/complete");
  };
  return (
    <div>
      <FadeIn transitionDuration="800">
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              class="shadow-sm outline-secondary my-4 bg-black outline-primary text-white text-sm rounded-lg  block w-full p-2.5 border-2 border-primary focus:ring-primary focus:border-primary  placeholder-primary "
              placeholder="Votre Nom"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="address"
              id="address"
              class="shadow-sm outline-secondary my-4 bg-black  outline-primary text-white text-sm rounded-lg  block w-full p-2.5 border-2 border-primary focus:ring-primary focus:border-primary  placeholder-primary dark:shadow-sm-light"
              placeholder="Address de Maison"
              required
            />
          </div>
          <div>
            <input
              type="number"
              name="telnum"
              id="telnum"
              class="shadow-sm outline-secondary my-4 bg-black  outline-primary text-white text-sm rounded-lg  block w-full p-2.5 border-2 border-primary focus:ring-primary focus:border-primary  placeholder-primary dark:shadow-sm-light"
              placeholder="Numero de Telephone"
              required
            />
          </div>
          <div>
            <input
              style={{ display: "none" }}
              value={productsNames}
              name="message"
              id="message"
              class="shadow-sm  outline-secondary my-4 bg-black  outline-primary text-white text-sm rounded-lg  block w-full p-2.5 border-2 border-primary focus:ring-primary focus:border-primary  placeholder-primary dark:shadow-sm-light"
              placeholder="Numero de Telephone"
              required
            />
          </div>

          <button
            type="submit"
            class="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg bg-primary  hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
          >
            Commandez Maintenant
          </button>
        </form>
      </FadeIn>
    </div>
  );
};

export default Checkout;
