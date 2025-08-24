import { motion } from "framer-motion";
import { sidebarDatas } from "./constant";
import SideBarCard from "./SideBarCard";
import { bottomToTop } from "../../../animation/motion";

const AuthSidebar = () => {
  return (
    <motion.div
      className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] p-4 md:p-6 rounded-xl shadow-xl backdrop-blur-md border border-[#334155]/40 flex flex-col gap-6"
      {...bottomToTop}
    >
      <h2 className="text-2xl md:text-3xl font-extrabold text-center tracking-wide bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-indigo-400 bg-clip-text text-transparent">
        Why Join DeshGuide?
      </h2>

      <div className="flex flex-col gap-4">
        {sidebarDatas.map((sidebar, idx) => (
          <SideBarCard sideBar={sidebar} key={idx} />
        ))}
      </div>
    </motion.div>
  );
};

export default AuthSidebar;

/* import { bottomToTop } from "../../../animation/motion";
import { motion } from "motion/react";
import { sidebarDatas } from "./constant";
import SideBarCard from "./SideBarCard";

const AuthSidebar = () => {
  return (
    <motion.div
      className="bg-base-200 p-3 flex flex-col gap-8 rounded-md mb-5"
      {...bottomToTop}
    >
      <h2 className="text-xl font-bold text-purple-900 text-center">
        Why Sign In to EduVerse?
      </h2>

      {sidebarDatas.map((sidebar, idx) => (
        <SideBarCard sideBar={sidebar} key={idx} />
      ))}
    </motion.div>
  );
};

export default AuthSidebar; */
