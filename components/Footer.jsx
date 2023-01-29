"use client";

import { motion } from "framer-motion";
import { socials } from "../constants";

import styles from "../styles";
import { footerVariants } from "../utils/motion";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5"></div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">AvihayMedia</h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2022 - 2023 Ben Argaman. All rights reserved.
          </p>

          <div className="flex gap-4 items-center">
            <a
              key={"whatsapp"}
              alt={"whatsapp-icon"}
              href={"https://wa.me/message/YVLUMBYSFPU4D1"}
            >
              <img
                src="/whatsapp.svg"
                className="w-[38px] h-[38px] object-contain cursor-pointer"
              ></img>
            </a>
            <a
              key={"facebook"}
              alt={"facebook-icon"}
              href={"https://wa.me/message/YVLUMBYSFPU4D1"}
            >
              <img
                src="/facebook.svg"
                className="w-[30px] h-[30px] object-contain cursor-pointer"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
