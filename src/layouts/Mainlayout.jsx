import React, { useState } from "react";
import { Outlet } from "react-router-dom"
import SideBar from "./SideBar";
import Topbar from "./Topbar";


const Mainlayout = () => {
   const [showSidebar, setShowSidebar] = useState(false)
   console.log("Topbar:", typeof setShowSidebar);
   

   return (
      <div className="min-h-screen bg-bg">
         {/* {mobile overlay} */}
         {showSidebar && (
            <div className="fixed inset-0 z-40 bg-black/50 md:hidden " onClick={() => setShowSidebar(false)}></div>
         )}
         {/* {slidebar } */}
         <SideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
         {/* {Right Area} */}

         <div className="md:ml-64 min-h-screen">
            <Topbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
            {/* {Topbbar} */}
            <main className="p-8">
               <Outlet />
            </main>
         </div>

      </div>
   )
}

export default Mainlayout