import { FC, useState } from "react";
import { Car } from "./components/Car";
import { CarButtons } from "./components/CarButtons";

const App: FC = () => {
  const [activePositions, setActivePositions] = useState<string[]>([]);

  const handlePositionChange = (positions: string[]) => {
    setActivePositions(positions);
  };

  const handleComplete = () => {
    console.log(activePositions);
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <Car />
        <CarButtons
          onComplete={handleComplete}
          onPositionChange={handlePositionChange}
        />
      </div>
    </>
  );
};

export default App;
