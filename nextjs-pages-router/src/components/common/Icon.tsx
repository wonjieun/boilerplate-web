import React from "react";
import NextIcon from "../../../public/next.svg";

interface IconProps {
  name: string;
  width?: number;
  height?: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  width = 24,
  height = 24,
  color = "currentColor",
}) => {
  const icons: {
    [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  } = {
    NextIcon: NextIcon,
  };

  const IconComponent = icons[name];

  if (!IconComponent) {
    console.error(`Icon "${name}" not found`);
    return null;
  }

  return <IconComponent width={width} height={height} fill={color} />;
};

export default Icon;
