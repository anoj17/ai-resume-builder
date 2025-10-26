import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

export const register = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post(`${baseURL}/api/v1/auth/register`, data, {
      withCredentials: true,
    });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const login = async (data: { email: string; password: string }) => {
  try {
    const response = await axios.post(`${baseURL}/api/v1/auth/login`, data, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getAllResumes = async () => {
  try {
    const response = await axios.get(`${baseURL}/api/v1/resumes`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addResume = async (data: any) => {
  try {
    const response = await axios.post(`${baseURL}/api/v1/resumes`, data, {
      withCredentials: true,
    });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const getResumeById = async (resumeId: string) => {
  try {
    const response = await axios.get(`${baseURL}/api/v1/resumes/${resumeId}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
