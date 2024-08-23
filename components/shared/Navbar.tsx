"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { navbarLinks } from "@/constants/navbarLinks";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";
import { IoMdArrowDropdown } from "react-icons/io";
import { workLinks } from "@/constants/workLinks";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-[#F9B31B]">
      <div className="w-11/12 xl:w-3/4 mx-auto p-4 flex justify-between items-center gap-3">
        <Link href={"/"}>
          <Image
            src="/assets/images/logo.svg"
            alt="Bombay Blokes"
            width={214}
            height={31}
          />
        </Link>

        <div className="hidden md:flex justify-center items-center gap-1 xl:gap-5 font-medium text-base">
          {navbarLinks.map((link) => {
            const active =
              pathname === link.path ? "bg-black text-[#F9B31B]" : "";

            if (link.name === "Work") {
              return (
                <div
                  key={link.path}
                  className={`p-[5px] rounded-lg transition-all hover:cursor-pointer relative group/main h-fit`}
                >
                  <p className="flex justify-center items-center gap-1">
                    {link.name}
                    <span>
                      <IoMdArrowDropdown />
                    </span>
                  </p>

                  <div className="hidden group-hover/main:flex transition-all bg-gradient-to-b from-white to-yellow-100 w-[500px] h-fit absolute left-[50%] top-8 transform translate-x-[-50%] rounded-xl flex-col gap-1">
                    {workLinks.map((workLink) => {
                      return (
                        <Link
                          href={workLink.path}
                          key={workLink.path}
                          className="rounded-lg transition-all group"
                        >
                          <div className="flex justify-start items-center gap-1">
                            <Image
                              src={workLink.icon}
                              alt={workLink.name}
                              width={100}
                              height={100}
                              className="group-hover:scale-90 transition-all"
                            />
                            <p className="group-hover:text-[#F9B31B] group-hover:underline underline-offset-8 group-hover:font-semibold text-black">
                              {workLink.name}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }

            return (
              <Link
                href={link.path}
                key={link.path}
                className={`hover:bg-black p-[5px] rounded-lg hover:text-[#F9B31B] transition-all ${active}`}
              >
                <p>{link.name}</p>
              </Link>
            );
          })}
        </div>

        <Link href={"/contact-us"} className="hidden md:block">
          <Button
            size={"lg"}
            className="rounded-xl text-[#F9B31B] hover:bg-white transition-all hover:text-black text-base"
          >
            Contact Us
          </Button>
        </Link>

        <div className="md:hidden">
          {" "}
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
