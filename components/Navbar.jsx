"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[20%] left-0 bottom-0 top-0 gradient-01" />
    <div
      className={`${styles.innerWidth}  flex lg:mx-auto justify-center gap-8`}
    >
      <div className="w-[24px] h-[24px] object-contain" />
      <img
        src="/AzLogo.svg"
        alt="planet-09"
        className=" w-full h-full object-contain rounded"
      />
      <div className="w-[24px] h-[24px] object-contain" />
    </div>
  </motion.nav>
);

export default Navbar;
