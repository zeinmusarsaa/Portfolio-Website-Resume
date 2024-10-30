import { motion } from "framer-motion";
import React from "react";
import { Zein } from "../../components/Zein/zein";
import "./style.css";

export const Element = () => {
  return (
    <div className="element">
      <div className="div">
        <div className="frame">
          <Zein />
          <motion.div
            className="text-wrapper-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Mosarsaa
          </motion.div>
        </div>

        <motion.div
          className="text-wrapper-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <button className="button">
            <div className="sign-up">Get Started</div>
          </button>
        </motion.div>
      </div>
    </div>
  );
};
