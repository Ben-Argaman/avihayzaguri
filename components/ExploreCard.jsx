"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import styles from "../styles";
import { fadeIn } from "../utils/motion";

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`flex flex-none flex-col items-center space-y-1 p-6`}
    onClick={() => handleClick(id)}
  >
    <div class="bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full ">
      <div class="block bg-white p-1 rounded-full relative transform transition hover:scale-110 cursor-pointer">
        <img
          src={imgUrl}
          alt={title}
          class="lg:w-40 lg:h-40 w-16 h-16 rounded-full object-cover"
        />
      </div>
    </div>
    <div class="text-xs text-white font-semibold">{title}</div>
  </motion.div>
);

export default ExploreCard;
