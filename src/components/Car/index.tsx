import { FC } from "react";
import { ImageComponent } from "../ImageComponent";

export const Car: FC = () => {
  return (
    <div style={{ position: "relative" }}>
      <ImageComponent
        altText="Car"
        imgUrl="https://image.pngaaa.com/699/1444699-middle.png"
      />
    </div>
  );
};
