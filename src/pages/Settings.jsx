import React, { useEffect, useState } from "react";
import { api } from "../services/api"

const Settings = () => {
    const [settingsData, setSettingsData] = useState(null)
    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
        sitename: "",
        theme: "Light",
        notification: "true",
        language: "English",
        timezone: "Asia/DelhiNCR",
        twoFactor: false
    })
    
    const [saved,setSaved]=useState(false)

    const handleChange=(e)=>{
        const {name,value,type,checked}=e.target;
        setFormData((prev)=>({
            ...prev,
            [name]:type==="checkbox"? checked:value,
        }))

        setSaved(false)
    }

    const handleSave=()=>{
        console.log("Settings save",formData)
        setSaved(true)
        setTimeout(()=>{
            setSaved(false)
        },3000)
    }

    const handleReset=()=>{
        if (settingsData) {
            setFormData(settingsData)
        }
        setSaved(false)
    }


    const loadSettingsData = async () => {
        setLoading(true)

        try {
            const data = await api.getSettings()
            setSettingsData(data)

        } catch (error) {
            console.error("Settings Data loading failed:", error);
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        loadSettingsData()
    }, [])

    if (loading && !settingsData) {
        return (
            <div className="flex items-center justify-center h-100">
                <div className="w-12 h-12 border-4 border-gray-200 border-t-indigo-500 rounded-full animate-spin "></div>
            </div>
        )
    }

    if (!settingsData) {
        return (
            <div className="p-6 bg-white rounded-xl border border-gray-200 ">
                <div>
                    <p>Settings data is not available</p>
                </div>
            </div>
        )
    }
    return (
        <div className="space-y-6">
        {/* header */}
        <div className="text-xl font-medium text-slate-900">
            <h2>Settings</h2>
            <p className="text-sm text-gray-400 mt-1">Manage Your application preferences.</p>
        </div>

        {/* genral settings */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">
            <div className="p-6 border-b border-gray-200">
               <h3 className="text-base font-medium text-gray-800">Genral Settings</h3>
                <p className="text-sm text-gray-400 mt-1">Configure basic application settings</p>
            </div>

            <div className="p-6 space-y-6 ">
                {/* Site Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Site Name</label>
                    <input type="text" name="sitename" value={formData.sitename} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 "/>
                </div>
              {/* theme */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2"> Theme</label>
                <select name="theme" id="" value={formData.theme} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100">
                    <option value="Light">Light</option>
                    <option value="Dark">Dark</option>
                    <option value="System">System</option>
                </select>

              </div>

              {/* language */}
                <div>
                <label className="block text-sm font-medium text-gray-700 mb-2"> Langauge</label>
                <select name="language"  value={formData.language} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100">
                    <option value="ENGLISH">ENGLSIH</option>
                    <option value="HINDI">HINDI</option>
                    <option value="KUMAONI">KUMAONI</option>
                </select>
              </div>

              {/* timezone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Time Zone</label>
                <select name="timezone"  value={formData.timezone} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100">
                    <option value="ENGLISH">ASIA/DelhiNCR</option>
                    <option value="HINDI">ASIA/DUBAI</option>
                    <option value="KUMAONI">ASIA/EROUPE</option>
                    <option value="KUMAONI">AMERCIA/NEWYORK</option>
                </select>
              </div>
            </div>
        </div>

        {/* notification */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm" >
           <div className="p-6 border-b border-gray-200">
             <h3 className="text-base font-medium text-gray-800">Notifications</h3>
             <p className="text text-gray-400 mt-1">Control appliction notification</p>
           </div>

           <div className="p-6">
            <label className="flex items-center justify-between gap-4 cursor-pointer">
                <div>
                    <p className="text-sm font-medium text-gray-700">Email Notifications</p>
                    <p className="text-xs text-gray-400 mt-1 ">Receive important through email</p>
                </div>

                <input type="checkbox"
                name="notification"
                checked={formData.notification}
                onChange={handleChange}
                className="w-8 h-5 accent-indigo-600 " />
            </label>
           </div>
        </div>

        {/* security */}
       <div className="bg-white border border-gray-200 rounded-2xl shadow-sm" >
           <div className="p-6 border-b border-gray-200">
             <h3 className="text-base font-medium text-gray-800">Security</h3>
             <p className="text text-gray-400 mt-1">Mange account security preferences.</p>
           </div>

           <div className="p-6">
            <label className="flex items-center justify-between gap-4 cursor-pointer">
                <div>
                    <p className="text-sm font-medium text-gray-700">Two Factor Authentication</p>
                    <p className="text-xs text-gray-400 mt-1 ">Add on additional layer of security</p>
                </div>

                <input type="checkbox"
                name="twoFactor"
                checked={formData.twoFactor}
                onChange={handleChange}
                className="w-8 h-5 accent-indigo-600 " />
            </label>
           </div>
        </div>

        {/* aciton */}

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
            <div className="flex flex-col sm:flex-row sm:item-centre sm:justify-between gap-4">
               <div>
                {saved &&(
                    <p className="text-sm text-emerald-600">
                        Settings Saved successfully
                    </p>
                )
                }
               </div>

               <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <button onClick={handleReset}  className="px-5 py-2.5 rounded-lg  border border-gray-300 text-sm text-gray-600 hover:bg-gray-200 transition ">
                    Reset
                </button>

                <button onClick={handleSave}  className="px-5 py-2.5 text-sm rounded-lg bg-linear-to-r from-indigo-600 to-pink-600 text-white shadow-sm hover:shadow-md transition ">
                  Save Settings
                </button>
               </div>
            </div>
        </div>
        </div>
    )
}

export default Settings