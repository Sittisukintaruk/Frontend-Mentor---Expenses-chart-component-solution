import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Chart = ({ day, amout, Max, deley }) => {
  const Bar = styled.div`
    height: ${({ $amouts }) => $amouts}%;
    border-radius: 5px;
    position: relative;
    width: 50px;
    background-color: ${({ $max }) =>
      $max ? "var(--Cyan)" : "var(--Soft-red)"};
    cursor: pointer;
    &::before {
      display: none;
      position: absolute;
      content: "$${({ $amouts }) => $amouts}";
      width: 75px;
      padding: 8px;
      top: 0;
      left: 50%;
      transform: translate(-50%, -45px);
      background-color: var(--Dark-brown);
      color: var(--Cream);
      font-size: var(--body);
      text-align: center;
      border-radius: 5px;
      font-weight: var(--bold);
    }

    &:hover {
      opacity: 0.75;
    }

    &:hover::before {
      display: block;
    }

    @media screen and (max-width: 576px) {
      width: 100%;

      &::before {
        width: auto;
        padding: 4px;
        font-size: 14px;
      }
    }
  `;

  return (
    <div className="chart">
      {console.log(deley)}
      <motion.div
        className="bar"
        initial={{ height: 0 }}
        animate={{ height: `100%` }}
        exit={{ height: 0 }}
        transition={{
          delay: Math.floor(deley) * 0.1,
          ease: "easeIn",
        }}
      >
        <Bar $amouts={amout} $max={Max} />
      </motion.div>
      <div>{day}</div>
    </div>
  );
};

export default Chart;
