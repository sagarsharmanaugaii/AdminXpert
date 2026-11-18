import {dashboardData, ordersData, productsData, profileData, settingsData, usersData} from '../data/dummyData'
const delay = (ms=500)=>{
    return new Promise((reslove)=>setTimeout(reslove,ms));
}

// dashboard api 
const getDashboard = async()=>{
    await delay()
    return dashboardData
}
// User api
const getUsers = async ()=>{
    await delay()
    return usersData
}
// Product api
const getProducts = async()=>{
    await delay()
    return productsData
}
// order api
const getOrders = async()=>{
    await delay()
    return ordersData
}
// settings api

const getSettings = async()=>{
    await delay()
    return settingsData
}

// profile api

const getProfile = async()=>{
    await delay()
    return profileData
}

export const api = {
    getDashboard,
    getUsers,
    getProducts,
    getOrders,
    getProfile,
    getSettings,
}