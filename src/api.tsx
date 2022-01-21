import React, { useEffect, useState } from 'react';
import Axios from "axios";

const BASE_API = "https://reqres.in/api";

interface User {
    email: string;
    password: string;
}

const Api = async (email: string, password: string) => {
    try {
        const user: User = {
            email,
            password
        }
        const {data} = await Axios.post(`${BASE_API}/login`, user)        
        const responseData = data;
        return responseData;
    } catch (error:any) {
        throw new Error(error);
    }
}
export default Api;