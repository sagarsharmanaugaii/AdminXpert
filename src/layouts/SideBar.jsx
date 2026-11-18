
import React from "react";
import { NavLink } from "react-router-dom";
import { navigation } from "../config/navigation";

const SideBar = ({ showSidebar, setShowSidebar }) => {
  return (
    <div className={`fixed left-0 top-0 z-50 min-h-screen w-64 bg-black text-white transform transition duration-300 ease-in-out ${showSidebar ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 `}>

      {/* Logo */}
      <div className="border-b border-text-secondary/10 text-white px-6 py-5">
        <h1 className="text-xl font-semibold">
          Admin<span className="text-indigo-400 font-bold">Xpert</span>
        </h1>
      </div>

      {/* Menu */}
      <div className="mt-10">
        {navigation.map((group) => (
          <div key={group.title}>
            <p className="mb-3 px-4 text-xs uppercase text-gray-500 font-light">
              {group.title}
            </p>

            <div className="space-y-3 mb-4 ">
              {group.items.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative flex items-center gap-3 px-3 py-3 ${isActive
                      ? "bg-indigo-600"
                      : "hover:bg-gray-800"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <div className="absolute left-0 top-1/2 h-9 w-1 -translate-y-1/2 rounded-r-full bg-indigo-100" />
                      )}

                      <item.icon size={25} />
                      <span>{item.label}</span>
                    </>
                  )}
                </NavLink>
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
