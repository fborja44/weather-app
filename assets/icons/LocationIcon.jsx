import Svg, { Path } from "react-native-svg";

const LocationIcon = ({ iconClass, color }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/Svg"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke={color}
      className={iconClass}
    >
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
		fill={color}
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    </Svg>
  );
};

LocationIcon.defaultProps = {
  color: "white",
  iconClass: "w-6 h-6",
};

export default LocationIcon;
