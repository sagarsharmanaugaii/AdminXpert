import React, { useEffect, useState } from "react";
import {api} from "../services/api"
const Users = ()=>{
        const [userData, setUserData] = useState(null)
        const [loading, setLoading] = useState(false)
    
        const loadUserData = async () => {
            setLoading(true)
    
            try {
                const data = await api.getUsers()
                setUserData(data)
    
            } catch (error) {
                console.error("User Data loading failed:", error);
            } finally {
                setLoading(false)
            }
        }
        useEffect(() => {
            loadUserData()
        }, [])
    
        if(loading && !userData) {
            return(
                <div className="flex items-center justify-center h-100">
                    <div className="w-12 h-12 border-4 border-gray-200 border-t-indigo-500 rounded-full animate-spin "></div>
                </div>
            )
         }
    
         if(!userData){
            return(
                <div className="p-6 bg-white rounded-xl border border-gray-200 ">
                    <div>
                        <p>User data is not available</p>
                    </div>
                </div>
            )
         }
    
    return(
       <div className="bg-white border  border-gray-100 rounded-2xl overflow-x-auto">
         <table className="w-full">
            <thead>
                <tr className="border-b border-gray-200 text-xs">
                    <th className="px-5 py-3.5 text-left font-light uppercase tracking-wider ">User</th>
                    <th className="px-5 py-3.5 text-left font-light uppercase tracking-wider ">Email</th>
                    <th className="px-5 py-3.5 text-left font-light uppercase tracking-wider ">Role </th>
                    <th className="px-5 py-3.5 text-left font-light uppercase tracking-wider ">Status</th>
                    <th className="px-5 py-3.5 text-left font-light uppercase tracking-wider ">Joined</th>
                </tr>
            </thead>
            <tbody>
                {userData.items.map((user)=>(
                    <tr key={user.id} className="border-b border-gray-100">
                       <td className="px-5 py-4 font-light">{user.name}</td>
                       <td className="px-5 py-4 font-light">{user.email}</td>
                       <td className="px-5 py-4 font-light">{user.role}</td>
                       <td className="px-5 py-4 font-light">{user.status}</td>
                       <td className="px-5 py-4 font-light">{user.joined}</td>
                    </tr>
                ))}
            </tbody>
         </table>
        
       </div>
    )
}

export default Users