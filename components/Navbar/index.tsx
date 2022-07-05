/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const paths = [
  {
    pathName: "home",
    link: "/",
  },
  {
    pathName: "about us",
    link: "/aboutus",
  },
  {
    pathName: "media",
    link: "/media",
  },
];

export const Navbar = () => {
  const router = useRouter();
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="sticky top-0 w-full flex flex-wrap items-center justify-between px-2 py-3 bg-white z-30">
        <div className="container px-12 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a className="flex items-center">
                <img src="/icons/logo.svg" className="mr-4 sm:h-9" alt="Logo" />
                <span className="text-purple-700 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  GKKDC
                </span>
              </a>
            </Link>

            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {!navbarOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {paths.map((path, index) => (
                <li key={index} className="nav-item">
                  <a
                    className={`text-purple-700 px-3 py-2 flex items-center text-sm uppercase ${
                      router.pathname === path.link
                        ? "font-bold"
                        : "font-normal"
                    } leading-snug  hover:opacity-40`}
                    href={path.link}
                  >
                    <span className="ml-2">{path.pathName}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
