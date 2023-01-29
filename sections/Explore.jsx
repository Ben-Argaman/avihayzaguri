"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import styles from "../styles";
import { exploreWorlds, odelImgs, ohelImgs, sarImgs } from "../constants";
import { staggerContainer } from "../utils/motion";
import { ExploreCard, TitleText, TypingText } from "../components";
import ImageBox from "../components/ImageBox";
import { hamakpitzImgs } from "../constants";
const Explore = () => {
  const [active, setActive] = useState(false);

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="עבודות |" textStyles="text-center" />
        <TitleText
          title={
            <>
              בין לקוחותינו <br className="md:block hidden" />
            </>
          }
          textStyles="text-center"
        />
        <div className="w-full flex lg:justify-center items-start mb-8 space-x-3 overflow-x-scroll stories mx-auto  p-4 rounded drop-shadow-xl">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={() => setActive(world.id)}
            />
          ))}
        </div>
      </motion.div>
      {active !== "tacobar" && active && (
        <div className="w-full flex justify-center rounded drop-shadow-xl">
          <ImageBox
            id={
              active === "hamakpitz"
                ? 1
                : active === "odel"
                ? 2
                : active === "ohel"
                ? 3
                : 4
            }
            images={
              active === "hamakpitz"
                ? hamakpitzImgs
                : active === "odel"
                ? odelImgs
                : active === "ohel"
                ? ohelImgs
                : active === "sar"
                ? sarImgs
                : ""
            }
          />
        </div>
      )}
    </section>
  );
};

export default Explore;
