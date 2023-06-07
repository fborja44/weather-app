import Svg, { Path, Defs, RadialGradient, Stop } from "react-native-svg";

const MoonIcon = ({ color, iconClass }) => {
  return (
    <Svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={iconClass}
    >
      <Path
        d="M32 21.7645C29.9714 22.61 27.795 23.0439 25.5973 23.041C16.4078 23.041 8.95904 15.5921 8.95904 6.40273C8.95904 4.13311 9.41297 1.97099 10.2355 0C7.20387 1.2647 4.61428 3.39821 2.79288 6.13184C0.971476 8.86546 -0.000280928 12.0769 6.092e-08 15.3618C6.092e-08 24.5512 7.4488 32 16.6382 32C19.9231 32.0003 23.1345 31.0285 25.8682 29.2071C28.6018 27.3857 30.7353 24.7961 32 21.7645Z"
        fill="url(#gradient)"
      />
      <Defs>
        <RadialGradient
          id="gradient"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(18 2) rotate(116.917) scale(36.4486)"
        >
          <Stop stopColor="#FFFDEB" />
          <Stop offset="0.505208" stopColor="#FFE3BA" />
          <Stop offset="1" stopColor="#FFC692" />
        </RadialGradient>
      </Defs>
    </Svg>
  );
};

MoonIcon.defaultProps = {
  iconClass: "w-56 h-56",
  color: "white",
};

export default MoonIcon;
