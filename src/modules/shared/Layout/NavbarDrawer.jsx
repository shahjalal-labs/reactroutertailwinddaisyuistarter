import { Outlet, useLocation } from "react-router";
import { motion } from "framer-motion";
import SidebarLink from "./SidebarLink";
import { adminLinks, guideLinks, touristLinks } from "./sidebarLinks";
import useUserRole from "../../../hooks/useUserRole";
import InversionToggle from "../ui/InversionToggle";

const NavbarDrawer = () => {
  const { role } = useUserRole(); // Role: 'admin', 'tour-guide', or 'tourist'
  const location = useLocation();

  const links =
    role === "admin"
      ? adminLinks
      : role === "tour-guide"
        ? guideLinks
        : touristLinks;

  return (
    <div className="drawer lg:drawer-open bg-gray-950 text-gray-200">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

      {/* Content + Top Navbar */}
      <div className="drawer-content flex flex-col">
        {/* Top Navbar */}
        <div className="w-full p-4 border-b border-gray-700 flex justify-between items-center bg-gray-900 shadow-lg shadow-indigo-800/20 sticky top-0 z-40">
          {/* Menu button (mobile only) */}
          <label
            htmlFor="my-drawer-3"
            className="btn btn-sm bg-indigo-700 text-white lg:hidden border border-indigo-500 hover:bg-indigo-600"
          >
            ☰ Menu
          </label>

          {/* Dashboard title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-xl font-bold tracking-wider text-indigo-400 animate-pulse"
          >
            Dashboard
          </motion.h1>

          {/* Inversion Toggle (desktop only) */}
          <div className="hidden lg:block">
            <InversionToggle />
          </div>
        </div>

        {/* Main Page Content */}
        <div
          className="min-h-[60vh] p-4"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <Outlet />
        </div>
      </div>

      {/* Sidebar Drawer */}
      <div className="drawer-side z-50" data-aos="fade-down-right">
        <label htmlFor="my-drawer-3" className="drawer-overlay" />
        <ul className="menu p-4 w-80 min-h-full bg-gray-900 border-r border-indigo-800 space-y-3 overflow-y-auto">
          {/* Home Link */}
          <li data-aos="fade-right" data-aos-delay="100">
            <SidebarLink
              to="/"
              text="Home"
              active={location.pathname === "/"}
            />
          </li>

          {/* Role-based Sidebar Links */}
          {links.map((link, i) => (
            <li
              key={link.path}
              data-aos="fade-right"
              data-aos-delay={150 + i * 70}
            >
              <SidebarLink
                to={link.path}
                text={link.name}
                active={location.pathname === link.path}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavbarDrawer;
