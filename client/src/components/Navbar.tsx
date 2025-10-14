import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const user = "Anoj Budathoki";

  const handleLogout = () => {
    // localStorage.removeItem('user')
    navigate("/");
  };
  return (
    <div className="bg-white shadow">
      <nav className="flex justify-between items-center py-5 px-20">
        <img
          src={logo}
          alt="logo"
          className="h-10 w-auto cursor-pointer"
          onClick={() => navigate("/")}
        />
        <div className="flex space-x-5 items-center">
          <p>Hi, {user}</p>
          <button
            onClick={handleLogout}
            className="rounded-full cursor-pointer border border-gray-300 px-7 py-2 active:scale-95 transaction-all bg-white hover:bg-slate-100"
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
