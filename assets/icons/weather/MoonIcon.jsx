import Svg, { Path } from "react-native-svg";

const MoonIcon = ({ color, iconClass }) => {
  return (
    <Svg
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={iconClass}
    >
      <Path
        d="M19.752 14.002C18.5633 14.4975 17.2879 14.7518 16 14.75C10.615 14.75 6.25 10.385 6.25 5.00005C6.25 3.67005 6.516 2.40305 6.998 1.24805C5.22147 1.98916 3.70397 3.2394 2.63663 4.8413C1.56928 6.44321 0.999835 8.32513 1 10.25C1 15.635 5.365 20 10.75 20C12.6749 20.0002 14.5568 19.4308 16.1587 18.3634C17.7606 17.2961 19.0109 15.7786 19.752 14.002Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

MoonIcon.defaultProps = {
  iconClass: "w-56 h-56",
  color: "white",
};

export default MoonIcon;