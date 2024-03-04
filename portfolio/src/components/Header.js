import { Link, Outlet } from "react-router-dom";

import React from "react";

function Header() {
  const lists = [
    {
      item: "About me",
      key: "home",
      link: "/",
    },
    {
      item: "Portfolio",
      key: "project",
      link: "/project",
    },
    {
      item: "Contact",
      key: "contact",
      link: "/contact",
    },
    {
      item: "Skills",
      key: "skills",
      link: "/skills",
    },
  ];

  return (
    <>
      <nav className="bg-[#2b313a]">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {lists.map((list) => (
                    <li key={list.key} className="list-none">
                      <Link
                        to={list.link}
                        className="bg-[#2b313a] text-white rounded-md px-3 py-2 text-sm font-[600] capitalize font-family:"
                        aria-current="page"
                      >
                        {list.item}
                      </Link>
                    </li>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* for mobile responsive */}
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <ul>
              {lists.map((list) => (
                <li key={list.key}>
                  <Link
                    to={list.link}
                    className="bg-emerald-800 text-white block rounded-md px-3 py-2 text-base font-medium"
                    aria-current="page"
                  >
                    {list.item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Header;
