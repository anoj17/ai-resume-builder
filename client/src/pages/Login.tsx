import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../api/server";
import { useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import GoogleAuth from "../components/GoogleAuth";

const Login = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (res: { success: boolean; message: string }) => {
      if (res?.success) {
        toast.success(res?.message);
        navigate("/app");
      } else {
        toast.error(res?.message);
      }
    },
    onError: (error: any) => {
      toast.error(error?.message);
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="sm:w-[350px] md:w-md w-full pb-8 text-center border border-gray-300/60 rounded-2xl px-8 bg-white"
      >
        <h1 className="text-gray-900 text-3xl mt-10 font-medium">Sign In</h1>
        <p className="text-gray-500 text-sm mt-2">Please sign in to continue</p>

        <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6B7280"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-mail-icon lucide-mail"
          >
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
            <rect x="2" y="4" width="20" height="16" rx="2" />
          </svg>
          <input
            type="email"
            name="email"
            placeholder="Email id"
            className="border-none outline-none ring-0"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6B7280"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-lock-icon lucide-lock"
          >
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border-none outline-none ring-0"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mt-4 text-left text-green-500">
          <button className="text-sm" type="reset">
            Forget password?
          </button>
        </div>
        <button
          type="submit"
          className="mt-2 w-full h-11 cursor-pointer rounded-full text-white bg-green-500 hover:opacity-90 transition-opacity"
        >
          {isPending ? (
            <Loader2 className="size-5 mx-auto animate-spin text-white" />
          ) : (
            "Sign In"
          )}
        </button>
        <p className="text-gray-500 text-sm mt-3 mb-3">
          Already have an account?
          <Link to="/register" className="text-green-500 hover:underline">
            Sign Up
          </Link>
        </p>
        <GoogleAuth label="Sign in with Google" />
      </form>
    </div>
  );
};

export default Login;
