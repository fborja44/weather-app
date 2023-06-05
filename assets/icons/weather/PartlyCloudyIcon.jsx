import Svg, {
  Path,
  Circle,
  RadialGradient,
  Defs,
  Stop,
} from "react-native-svg";

const PartlyCloudyIcon = ({ color, iconClass }) => {
  return (
    <Svg
      viewBox="0 0 34 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={iconClass}
    >
      <Circle cx="18" cy="16" r="16" fill="url(#sun_gradient)" />
      <Path
        d="M0 25.1881C0 24.0747 0.346487 23.0871 1.03946 22.2158C1.73244 21.3444 2.60828 20.7828 3.67661 20.5408C3.97498 19.2144 4.65833 18.13 5.70741 17.278C6.7565 16.426 7.9692 16 9.32628 16C10.6545 16 11.8383 16.4163 12.8778 17.2393C13.9172 18.0622 14.591 19.1272 14.8989 20.4246H15.2166C16.0828 20.4246 16.8816 20.6376 17.6131 21.0539C18.3446 21.4703 18.9317 22.0512 19.3552 22.787C19.7786 23.5228 20 24.3167 20 25.1881C20 26.0401 19.7979 26.834 19.3936 27.5602C18.9894 28.2863 18.4312 28.8672 17.7286 29.3029C17.026 29.7386 16.2464 29.971 15.409 30H4.61983C3.33013 29.9419 2.24254 29.4481 1.34745 28.5187C0.452358 27.5989 0 26.4855 0 25.1881Z"
        fill="url(#cloud_gradient)"
      />
      <Defs>
        <RadialGradient
          id="sun_gradient"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(23.5211 1.85707e-06) rotate(123.593) scale(53.3555)"
        >
          <Stop offset="0.0389479" stopColor="#FED15D" />
          <Stop offset="0.28125" stopColor="#FFA630" />
          <Stop offset="0.64526" stopColor="#F17720" />
        </RadialGradient>
        <RadialGradient
          id="cloud_gradient"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(12 16.875) rotate(127.585) scale(20.6111 21.8313)"
        >
          <Stop stopColor="#F2F3F9" />
          <Stop offset="0.34611" stopColor="#EAECF6" />
          <Stop offset="0.823755" stopColor="#C2C9EC" />
        </RadialGradient>
      </Defs>
    </Svg>
  );
};

PartlyCloudyIcon.defaultProps = {
  iconClass: "w-56 h-56",
  color: "white",
};

export default PartlyCloudyIcon;
