import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-28 w-11/12 xl:w-3/4 mx-auto p-4 flex flex-col md:flex-row justify-between items-center gap-3">
      <Link href={"/"}>
        <Image
          src="/assets/images/bblogo-y.webp"
          alt="Bombay Blokes"
          width={214}
          height={31}
          className="dark:backdrop-invert"
        />
      </Link>

      <div>
        <Link href={"mailto:hello@bombayblokes.com"}>
          Mail Us : hello@bombayblokes.com
        </Link>
      </div>

      <div>
        <Link href={"tel:+919987558189"}>Call Us : +91 99875 58189</Link>
      </div>
    </div>
  );
};

export default Footer;
