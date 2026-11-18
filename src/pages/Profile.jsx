import React from "react";
import { Mail, Phone } from "lucide-react";

const Profile = ()=>{
    return(
       <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* left column */}
        <div className="col-span-1 bg-white border  border-gray-200 shadow-sm rounded-xl p-6 flex flex-col justify-center gap-4 items-center">
           {/* logo */}
           <div className="w-20 h-20 bg-primary  text-white font-medium flex items-center justify-center text-3xl  rounded-full" >
            AX
           </div>
             <div className="text-center border-b border-gray-200 w-full pb-4 mb-4">
           <p className="text-xl font-light text-text-primary ">AdminXpert</p>
            <p className="text-sm font-light text-text-primary mb-2">Super Admin</p>
            <p className="text-xs font-light text-text-primary ">Joined 2026-11-17</p>
        </div>
            {/* eamil and phone */}
         <div className="space-y-2">
            <div className="flex items-center gap-2">
                <Mail size={14}/>
               
                <span className="text-sm text-text-primary font-light">admin@gamil.com</span>
            </div>

             <div className="flex items-center gap-2">
                <Phone size={14}/>
                <span className="text-sm text-text-primary font-light">+9205392529</span>
            </div>
         </div>

        </div>

       

        {/* right column */}
           <div className="col-span-2 space-y-6">
            {/* About */}
            <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-6">
                 <p className=" text-text-primary uppercase  mb-2">About</p>
                 <p className="text-sm text-text-primary font-light max-w-xl">Full-stack developer fresher. Passionate about building beautiful, scalable products. </p>
            </div>

              <div className=" bg-white border border-gray-200 shadow-sm rounded-xl p-6">
                   <p className=" text-text-primary uppercase  mb-4">Details</p>
                   <div className="text-text-primary font-light text-sm flex items-center gap-8 mb-2">
                    <span>Location</span>
                     <span>Delhi,India</span>
                   </div>

                   <div className="text-text-primary font-light text-sm flex items-center gap-8 mb-2">
                    <span>Website</span>
                    <span>https://adminxpert.com</span>
                   </div>

                   <div className="text-text-primary font-light text-sm flex items-center gap-8 mb-2">
                    <span>Email</span>
                    <span>AdminXpert@gmail.com</span>
                   </div>

                   <div className="text-text-primary font-light text-sm flex items-center gap-10 mb-2">
                    <span>AdminXpertBuildBy</span>
                    <span>Sagar Sharma Naugai</span>
                   </div>
              </div>

           </div>
       </div>
    )
}

export default Profile