import Svg, { Path } from "react-native-svg";

const LightningIcon = ({ color, iconClass }) => {
  return (
    <Svg
      viewBox="0 0 36 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={iconClass}
    >
      <Path
        d="M2.17112 23.9736L22.2503 2.46021L17.9476 18.2367H33.7241L13.6449 39.75L17.9476 23.9736H2.17112Z"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

LightningIcon.defaultProps = {
  color: "black",
  iconClass: "w-6 h-6",
};

export default LightningIcon;
