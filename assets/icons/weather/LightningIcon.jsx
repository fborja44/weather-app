import Svg, { Path } from "react-native-svg";

const LightningIcon = ({ iconClass, color }) => {
  return (
    <Svg
      viewBox="0 0 15 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={iconClass}
    >
      <Path
        d="M0 18.6H0.39L7.27 8.42C7.36 8.24 7.31 8.15 7.12 8.15H4.28L7.27 2.7C7.36 2.52 7.29 2.43 7.07 2.43H3.26C3.15 2.43 3.06 2.49 2.97 2.61L0.19 10.01C0.17 10.19 0.23 10.28 0.38 10.28H3.13L0 18.6ZM8.5 12.27H8.77L13.99 4.6C14.04 4.52 14.05 4.45 14.03 4.4C14.01 4.35 13.95 4.33 13.86 4.33H11.76L13.94 0.3C14.06 0.1 14 0 13.76 0H11.02C10.89 0 10.79 0.0600001 10.72 0.19L8.64 5.67C8.61 5.76 8.61 5.83 8.65 5.88C8.69 5.93 8.75 5.95 8.84 5.95H10.88L8.5 12.27Z"
        fill={color}
      />
    </Svg>
  );
};

LightningIcon.defaultProps = {
  color: "#FFA630",
  iconClass: "w-5 h-5",
};

export default LightningIcon;
