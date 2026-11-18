import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { pageTitles } from "../config/navigation";
import { ChevronDown, ChevronUp, Menu, Settings, User, LogOut } from "lucide-react";

const Topbar = ({ showSidebar, setShowSidebar }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const [isOpen, setisOpen] = useState(false)



    const pageTitle = pageTitles[location.pathname] || "Dashboard"
    return (

        <div className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8 shadow-sm ">

            {/* {pagetitle} */}
            <div className=" flex items-center gap-4">
                <Menu onClick={() => setShowSidebar(!showSidebar)} />
                <h1 className="text-xl font-light text-gray-900">{pageTitle}</h1>
            </div>

            {/* {Profile} */}
            <div className="relative">
                <button onClick={() => setisOpen(!isOpen)} className="flex items-center justify-center gap-1 cursor-pointer transition">
                    <div className="w-9 h-9 bg-primary/80 text-white rounded-full flex items-center justify-center  ">
                        AX
                    </div>
                    {/* text */}
                    <span>AdminXpert</span>
                    {/* icon */}
                    <span>{isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</span>

                </button>

                {/* {dropdown box} */}
                {isOpen && (
                    <div className="absolute right-0 top-14 w-74 overflow-hidden rounded-xl border border-slate-200 bg-white p-2 shadow-xl
                    ">
                        {/* Admin Flex box */}
                        <div className="flex items-center px-3 py-4 gap-2 border-b border-gray-200">
                            <div className="w-12 h-12 bg-primary-dark/80 rounded-full flex items-center justify-center text-white shrink-0">
                                AX
                            </div>
                            <div>
                                <p>AdminXpert</p>
                                <p>admin@gmail.com</p>
                            </div>
                        </div>
                        {/* menu content */}
                        <div className="border-b border-gray-200 space-y-2 py-2">
                            <button onClick={() => { setisOpen(false); navigate("/profile") }} className="w-full flex items-center gap-4 px-3 py-1.5 rounded hover:bg-gray-50  cursor-pointer transition">
                                <User size={18} />
                                <span>Profile</span>
                            </button>
                            {/* setting */}
                            <button onClick={() => { setisOpen(false); navigate("/settings") }} className="w-full flex items-center gap-4 px-3 py-1.5 rounded hover:bg-gray-50 cursor-pointer">
                                <Settings size={18} />
                                <span>Settings</span>
                            </button>

                        </div>
                        {/* logout */}
                        <div className="py-2 ">
                            <button onClick={() => { alert("Logout Coming"); setisOpen(false) }} className="w-full flex items-center gap-4 px-3 py-1.5 rounded hover:bg-rose-50 cursor-pointer   ">
                                <LogOut size={18} />
                                <span className="text-md text-text-primary font-light">Logout</span>
                            </button>
                        </div>
                    </div>
                )}

            </div>

        </div>
    )
}

export default Topbar