export interface CarButtonsProps {
  onComplete: (positions: string[]) => void;
  onPositionChange: (positions: string[]) => void;
}

export interface CarPointProps {
  x: number;
  y: number;
  isActive: boolean;
  onClick: () => void;
}

export interface ImageComponentProps {
  imgUrl: string;
  altText: string;
}
