import React, { ReactNode } from "react";
import {BiRightArrow} from "react-icons/bi";
import Navbar from "./Navbar";
import { useAppSelector } from "../../hooks/redux";
import Footer from "./Footer";

interface GenLayoutProps {
  children: ReactNode;
}

const GenLayout: React.FC<GenLayoutProps> = ({ children }) => {
  const { theme } = useAppSelector((state) => state.gen);

  return (
    <div className="h-dvh w-full flex flex-col" data-theme={theme}>
      <div
        data-theme={theme === "dark" ? "nord" : "dark"}
        className="w-full bg-base-100 text-base-content flex justify-center py-2 px-20 border-b-2"
      >
        <p className="ml-auto flex justify-center items-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!<BiRightArrow className="mx-2"/>
          <a className="font-bold hover:underline" href="">
            ShopNow
          </a>
        </p>
        <p className="justify-self-end ml-auto">English</p>
      </div>
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default GenLayout;
