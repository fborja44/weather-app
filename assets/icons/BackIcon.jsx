import Svg, { Path } from "react-native-svg";

const BackIcon = ({ color, iconClass }) => {
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
        d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
      />
    </Svg>
  );
};

BackIcon.defaultProps = {
  iconClass: "w-6 h-6",
};

export default BackIcon;
