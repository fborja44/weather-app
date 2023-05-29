import Svg, { Path } from "react-native-svg";

const InvalidIcon = ({ color, iconClass }) => {
  return (
    <Svg
      viewBox="0 0 18 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={iconClass}
    >
      <Path
        d="M0.869995 7.22991H2.81V3.58991H2.83L4.88 7.22991H6.87V0.569912H4.93V4.11991H4.91L2.97 0.569912H0.869995V7.22991ZM7.39 7.37991H8.81999L11.43 0.409912H10.01L7.39 7.37991ZM10.26 7.22991H12.33L12.62 6.27991H14.74L15.02 7.22991H17.15L14.72 0.569912H12.71L10.26 7.22991ZM13.07 4.83991L13.71 2.79991H13.74L14.34 4.83991H13.07Z"
        fill={color}
      />
    </Svg>
  );
};

InvalidIcon.defaultProps = {
  iconClass: "w-56 h-56",
  color: "white",
};

export default InvalidIcon;
