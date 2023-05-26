import Svg, { Path } from "react-native-svg";

const ArrowLeftIcon = ({ color, iconClass }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke={color}
      className={iconClass}
    >
      <Path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
      />
    </Svg>
  );
};

ArrowLeftIcon.defaultProps = {
  color: "black",
  iconClass: "w-6 h-6",
};

export default ArrowLeftIcon;
