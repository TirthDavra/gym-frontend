import { LogOut } from "lucide-react";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
    const navigate = useNavigate();

    const { logout, user } =
        useAuth();

    const handleLogout = () => {
        logout();

        navigate("/");
    };

    return (
        <div className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-6">
            <div>
                <h2 className="text-xl font-semibold text-slate-800">
                    Welcome, {user?.name}
                </h2>

                <p className="text-sm text-slate-500">
                    Manage your gym system
                </p>
            </div>

            <button
                onClick={handleLogout}
                className="
          flex items-center gap-2
          bg-slate-900
          hover:bg-slate-800
          text-white
          px-4 py-2 rounded-xl
          transition-all
        "
            >
                <LogOut size={18} />

                Logout
            </button>
        </div>
    );
};

export default Navbar;