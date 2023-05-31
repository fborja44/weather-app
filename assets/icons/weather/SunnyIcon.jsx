import Svg, { Circle, Defs, RadialGradient, Stop } from "react-native-svg";

const SunnyIcon = ({ iconClass }) => {
  return (
    <Svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={iconClass}
    >
      <Circle cx="16" cy="16" r="16" fill="url(#gradient)" />
      <Defs>
        <RadialGradient
          id="gradient"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(21.5211 1.85707e-06) rotate(123.593) scale(53.3555)"
        >
          <Stop offset="0.0389479" stopColor="#FED15D" />
          <Stop offset="0.28125" stopColor="#FFA630" />
          <Stop offset="0.64526" stopColor="#F17720" />
        </RadialGradient>
      </Defs>
    </Svg>
  );
};

SunnyIcon.defaultProps = {
  iconClass: "w-5 h-5",
};

export default SunnyIcon;
