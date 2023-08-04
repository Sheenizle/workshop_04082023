import { FC } from "react";
import { CarPointProps } from "../../types";

export const CarPoint: FC<CarPointProps> = ({ x, y, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        backgroundColor: isActive ? "orange" : "gray",
        cursor: "pointer",
        border: "none",
        padding: 0,
      }}
    ></button>
  );
};
