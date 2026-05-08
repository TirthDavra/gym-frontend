import {
    LayoutDashboard,
    Users,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="w-64 bg-white border-r border-slate-200 min-h-screen p-5">
            <h1 className="text-2xl font-bold text-slate-900 mb-10">
                Gym Admin
            </h1>

            <nav className="space-y-2">
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        `
              flex items-center gap-3
              px-4 py-3 rounded-xl
              transition-all
              ${isActive
                            ? "bg-slate-900 text-white"
                            : "text-slate-700 hover:bg-slate-100"
                        }
            `
                    }
                >
                    <LayoutDashboard size={20} />

                    Dashboard
                </NavLink>

                <NavLink
                    to="/members"
                    className={({ isActive }) =>
                        `
              flex items-center gap-3
              px-4 py-3 rounded-xl
              transition-all
              ${isActive
                            ? "bg-slate-900 text-white"
                            : "text-slate-700 hover:bg-slate-100"
                        }
            `
                    }
                >
                    <Users size={20} />

                    Members
                </NavLink>
            </nav>
        </div>
    );
};

export default Sidebar;