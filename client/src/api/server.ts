import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

export const register = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post(`${baseURL}/api/v1/auth/register`, data);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const login = async (data: { email: string; password: string }) => {
  try {
    const response = await axios.post(`${baseURL}/api/v1/auth/login`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
