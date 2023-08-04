import { FC, useEffect } from "react";
import { useStore } from "effector-react";
import {
  activeButtons,
  carPositions,
  fetchPositionsFx,
  sendPositionsFx,
  togglePosition,
} from "../../stores";
import { CarPoint } from "../CarPoint";
import { CarButtonsProps } from "../../types";

export const CarButtons: FC<CarButtonsProps> = ({
  onPositionChange,
  onComplete,
}) => {
  const positions = useStore(carPositions);
  const activeBtns = useStore(activeButtons);

  const handleButtonClick = (position: string) => {
    togglePosition(position);
    onPositionChange(carPositions.getState());
  };

  const handleComplete = () => {
    const activePositions = carPositions.getState();
    sendPositionsFx(activePositions)
      .then(() => {
        onComplete(activePositions);
      })
      .catch((error) => {
        console.log("Failed to send positions to API:", error);
      });
  };

  useEffect(() => {
    fetchPositionsFx();
  }, []);

  return (
    <div>
      <button onClick={handleComplete}>Complete</button>
      <div>
        <CarPoint
          x={10}
          y={10}
          isActive={positions.includes("A1") || activeBtns.includes("A1")}
          onClick={() => handleButtonClick("A1")}
        />
        <CarPoint
          x={40}
          y={10}
          isActive={positions.includes("A2") || activeBtns.includes("A2")}
          onClick={() => handleButtonClick("A2")}
        />
        <CarPoint
          x={60}
          y={10}
          isActive={positions.includes("A3") || activeBtns.includes("A3")}
          onClick={() => handleButtonClick("A3")}
        />
        <CarPoint
          x={90}
          y={10}
          isActive={positions.includes("A4") || activeBtns.includes("A4")}
          onClick={() => handleButtonClick("A4")}
        />
      </div>
      <div>
        <CarPoint
          x={5}
          y={45}
          isActive={positions.includes("B1") || activeBtns.includes("B1")}
          onClick={() => handleButtonClick("B1")}
        />
        <CarPoint
          x={20}
          y={45}
          isActive={positions.includes("B2") || activeBtns.includes("B2")}
          onClick={() => handleButtonClick("B2")}
        />
        <CarPoint
          x={60}
          y={45}
          isActive={positions.includes("B3") || activeBtns.includes("B3")}
          onClick={() => handleButtonClick("B3")}
        />
        <CarPoint
          x={90}
          y={45}
          isActive={positions.includes("B4") || activeBtns.includes("B4")}
          onClick={() => handleButtonClick("B4")}
        />
        <CarPoint
          x={98}
          y={45}
          isActive={positions.includes("B5") || activeBtns.includes("B5")}
          onClick={() => handleButtonClick("B5")}
        />
      </div>
      <div>
        <CarPoint
          x={10}
          y={80}
          isActive={positions.includes("C1") || activeBtns.includes("C1")}
          onClick={() => handleButtonClick("C1")}
        />
        <CarPoint
          x={40}
          y={80}
          isActive={positions.includes("C2") || activeBtns.includes("C2")}
          onClick={() => handleButtonClick("C2")}
        />
        <CarPoint
          x={60}
          y={80}
          isActive={positions.includes("C3") || activeBtns.includes("C3")}
          onClick={() => handleButtonClick("C3")}
        />
        <CarPoint
          x={90}
          y={80}
          isActive={positions.includes("C4") || activeBtns.includes("C4")}
          onClick={() => handleButtonClick("C4")}
        />
      </div>
    </div>
  );
};
