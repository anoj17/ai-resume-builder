import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useMutation, useQuery } from "@tanstack/react-query";
import { logout } from "../api/server";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const user = "Anoj Budathoki";

  const { setIsAuthenticated } = useContext(AuthContext);

  const { mutate: handleLogout, isPending } = useMutation({
    mutationFn: logout,
    onSuccess: (res) => {
      toast.success(res?.message);
      localStorage.removeItem("isAuthenticated");
      setIsAuthenticated(false);
    },
    onError: (error: any) => {
      toast.error(error.message || "Logout failed");
    },
  });

  return (
    <div className="bg-white shadow">
      <nav className="flex justify-between items-center py-5 px-5 md:px-10 lg:px-20">
        <img
          src={logo}
          alt="logo"
          className="md:h-10 h-8 w-auto cursor-pointer"
          onClick={() => navigate("/")}
        />
        <div className="flex space-x-5 items-center">
          <p>Hi, {user}</p>
          <button
            onClick={() => {
              navigate("/");
              handleLogout();
            }}
            className="rounded-full cursor-pointer border border-gray-300 px-7 py-2 active:scale-95 transaction-all bg-white hover:bg-slate-100"
          >
            {isPending ? (
              <Loader2 className="size-5 mx-auto animate-spin text-white" />
            ) : (
              "Logout"
            )}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
