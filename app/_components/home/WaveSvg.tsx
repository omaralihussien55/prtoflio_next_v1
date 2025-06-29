"use client"
import React from "react";
import { motion } from "framer-motion";

const AnimatedWave = () => {
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <svg
      preserveAspectRatio="none"
        width="120%"
        height="100%"
        viewBox="0 0 1440 500"
        xmlns="http://www.w3.org/2000/svg"
        // className="absolute top-0 left-0"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stopColor="#F78DA7" />
            <stop offset="95%" stopColor="#8ED1FC" />
          </linearGradient>
        </defs>

        {/* First Wave */}
        <motion.path
          d="M 0,500 L 0,318 C 46.3,318.9 92.6,319.8 150,317 C 207.4,314.1 275.9,307.5 346,288 C 416.05,268.4 487.6,235.9 552,206 C 616.37,176.05 673.5,148.66 736,106 C 798.4,63.3 866.1,5.37 918,-12 C 969.83,-29.3 1005.8,-6.17 1064,-15 C 1122.19,-23.82 1202.62,-64.66 1269,-102 C 1335.37,-139.33 1387.68,-173.16 1440,-207 L 1440,500 L 0,500 Z"
          fill="url(#gradient)"
          fillOpacity="0.4"
          animate={{ x: [0, -50, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />

        {/* Second Wave */}
        <motion.path
          d="M 0,500 L 0,443 C 71.7,453.3 143.4,463.6 196,450 C 248.5,436.3 282.06,398.8 336,359 C 389.9,319.1 464.3,276.9 540,261 C 615.6,245 692.6,255.1 742,226 C 791.3,196.8 813.2,128.3 869,105 C 924.7,81.6 1014.4,103.5 1077,82 C 1139.5,60.4 1175.01,-4.43 1231,-39 C 1286.98,-73.56 1363.49,-77.78 1440,-82 L 1440,500 L 0,500 Z"
          fill="url(#gradient)"
          fillOpacity="0.53"
          animate={{ x: [0, -30, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />

        {/* Third Wave */}
        <motion.path
          d="M 0,500 L 0,568 C 69.7,551.5 139.4,535.1 204,529 C 268.5,522.8 327.8,526.8 389,517 C 450.1,507.1 513.2,483.5 560,439 C 606.7,394.4 637.1,328.8 699,299 C 760.8,269.1 854.3,274.8 927,271 C 999.6,267.1 1051.6,253.5 1096,223 C 1140.3,192.4 1176.9,144.8 1233,112 C 1289.05,79.1 1364.52,61.08 1440,43 L 1440,500 L 0,500 Z"
          fill="url(#gradient)"
          fillOpacity="1"
          animate={{ x: [0, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
};

export default AnimatedWave;
