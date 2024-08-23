import React from "react";
import ContactForm from "./ContactForm";
import Image from "next/image";

const FormSection = () => {
  return (
    <div className="w-11/12 md:w-3/4 m-auto flex flex-col md:flex-row gap-10 2xl:gap-20 justify-around items-center">
      <div className="border-[#F9B31B] border-[10px] md:border-[20px] p-5 rounded-xl flex-1">
        <ContactForm />
      </div>

      <div className="flex flex-col gap-10 justify-center items-center md:w-1/3">
        <Image
          src="/assets/images/bus.png"
          alt="bus"
          width={350}
          height={350}
          className="dark:backdrop-invert dark:rounded-xl"
        />

        <p className="font-semibold text-3xl md:text-5xl text-center">
          Let's take this ride{" "}
          <span className="bg-[#F9B31B] rounded-lg leading-normal">
            together
          </span>
        </p>
      </div>
    </div>
  );
};

export default FormSection;
