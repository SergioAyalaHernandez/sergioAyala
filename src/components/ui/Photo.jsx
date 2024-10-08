"use client"

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return <div className="w-full h-full relative">
        <motion.div initial={{ opacity: 0 }} animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.4, ease: "easeIn" },
        }}>

            <motion.div
                initial={{ opacity: 0 }} animate={{
                    opacity: 1,
                    transition: { delay: 1.4, duration: 0.4, ease: "easeInOut" },
                }}
                className="w-[298px] h-[298px] xl:w-[498px] xl:h-[458px] mix-blend-lighten absolute">
                <Image src="/assets/sergio.png" priority quality={100} fill all="" className="object-contain" />
            </motion.div>

            <motion.svg className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
                fill="transparent"
                viewBox="0 0 506 506"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.circle 
                cx="253"
                cy="253" 
                r="250"
                stroke="#de0211"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{strokeDasharray: "24 10 0 0"}}
                animate={{
                    strokeDasharray: ["500 240 32 25", "16 40 92 72", "4 31 22 22"],
                    rotate: [120,360],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                ></motion.circle>
            </motion.svg>

        </motion.div>
    </div>
};

export default Photo;