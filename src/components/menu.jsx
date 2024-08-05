"use client";

import { useState, useEffect } from "react";
import {
  BiHomeAlt,
  BiCategoryAlt,
  BiStoreAlt,
  BiPhoneCall,
  BiChevronLeftSquare,
  BiChevronLeft,
  BiChevronRight,
} from "react-icons/bi";
import { MdFavoriteBorder, MdOutlineArticle } from "react-icons/md";

export default function Menu() {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FDFDFD] text-slate-800 rounded-2xl w-[90vw] h-[80vh] shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:flex">
      {isSmallScreen ? (
        // small screen
        <>
          <ul
            className={`${
              showSubMenu ? "hidden" : ""
            } h-full lg:w-[300px] my-2 flex flex-col py-4 *:flex *:gap-4 *:p-4  *:text-lg hover:*:bg-slate-100 *:transition *:ease-in-out *:duration-500 *:transform `}
          >
            <li>
              <BiHomeAlt size={30} />
              <a href={"/"}>صفحه اصلی</a>
            </li>
            <li>
              <BiCategoryAlt size={30} />
              <a href={"/"}>دسته‌بندی محصولات</a>
            </li>
            <li onClick={() => setShowSubMenu(true)} className="relative">
              <BiStoreAlt size={30} />
              <p>محصولات</p>
              <BiChevronLeft className="mr-auto" size={30} />
            </li>
            <li>
              <MdFavoriteBorder size={30} />
              <a href={"/"}>لیست علاقه‌مندی‌ها</a>
            </li>
            <li>
              <BiPhoneCall size={30} />
              <a href={"/"}>تماس با ما</a>
            </li>
            <li>
              <MdOutlineArticle size={30} />
              <a href={"/"}>آخرین مقالات</a>
            </li>
            <li>
              <BiChevronLeftSquare size={30} />
              <a href={"/"}>تست</a>
            </li>
          </ul>

          <ul
            className={`${
              showSubMenu ? "" : "hidden"
            } h-full w-[300px] my-2 flex flex-col py-4 *:flex *:gap-4 *:p-4  *:text-lg hover:*:bg-slate-100 *:transition *:ease-in-out *:duration-500 *:transform `}
          >
            <li onClick={() => setShowSubMenu(false)} className="lg:hidden">
              <BiChevronRight size={30} />
              <a href={"/"}>بازگشت</a>
            </li>
            <li>
              <a href={"/"}>دسته‌بندی محصولات</a>
            </li>
            <li>
              <a href={"/"}>تماس با ما</a>
            </li>
            <li>
              <a href={"/"}>آخرین مقالات</a>
            </li>
            <li>
              <a href={"/"}>تست</a>
            </li>
          </ul>
        </>
      ) : (
        // big screen
        <ul
          className={`h-full w-[300px] my-2 flex flex-col py-4 *:flex *:gap-4 *:p-4  *:text-lg hover:*:bg-slate-100 *:transition *:ease-in-out *:duration-500 *:transform `}
        >
          <li>
            <BiHomeAlt size={30} />
            <a href={"/"}>صفحه اصلی</a>
          </li>
          <li>
            <BiCategoryAlt size={30} />
            <a href={"/"}>دسته‌بندی محصولات</a>
          </li>
          <li
            onMouseLeave={() => setShowSubMenu(false)}
            onMouseEnter={() => setShowSubMenu(true)}
            className="relative"
          >
            <BiStoreAlt size={30} />
            <p>محصولات</p>
            <BiChevronLeft className="mr-auto" size={30} />
            {showSubMenu && (
              <ul
                className={`bg-[#FDFDFD] h-full right-[300px] -top-[24px] w-[300px] my-2 absolute flex flex-col py-4 *:flex *:gap-4 *:p-4  *:text-lg hover:*:bg-slate-100 *:transition *:ease-in-out *:duration-500 *:transform `}
              >
                <li>
                  <a href={"/"}>دسته‌بندی محصولات</a>
                </li>
                <li>
                  <a href={"/"}>تماس با ما</a>
                </li>
                <li>
                  <a href={"/"}>آخرین مقالات</a>
                </li>
                <li>
                  <a href={"/"}>تست</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <MdFavoriteBorder size={30} />
            <a href={"/"}>لیست علاقه‌مندی‌ها</a>
          </li>
          <li>
            <BiPhoneCall size={30} />
            <a href={"/"}>تماس با ما</a>
          </li>
          <li>
            <MdOutlineArticle size={30} />
            <a href={"/"}>آخرین مقالات</a>
          </li>
          <li>
            <BiChevronLeftSquare size={30} />
            <a href={"/"}>تست</a>
          </li>
        </ul>
      )}
    </div>
  );
}
