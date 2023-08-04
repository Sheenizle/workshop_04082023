import { FC } from "react";
import { ImageComponentProps } from "../../types";

export const ImageComponent: FC<ImageComponentProps> = ({
  imgUrl,
  altText,
}) => (
  <div>
    <img alt={altText} src={imgUrl} />
  </div>
);
