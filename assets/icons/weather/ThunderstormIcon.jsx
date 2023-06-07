import Svg, {
  Path,
  Defs,
  RadialGradient,
  LinearGradient,
  Stop,
} from "react-native-svg";

const ThunderstormIcon = ({ iconClass }) => {
  return (
    <Svg
      viewBox="0 0 48 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={iconClass}
    >
      <Path
        d="M0 21.6577C0 19.0332 0.831569 16.7054 2.49471 14.6515C4.15784 12.5975 6.25987 11.2739 8.82387 10.7033C9.53994 7.57676 11.18 5.02075 13.6978 3.01245C16.2156 1.00415 19.1261 0 22.3831 0C25.5707 0 28.4119 0.981328 30.9066 2.92116C33.4013 4.861 35.0183 7.37137 35.7575 10.4295H36.5197C38.5987 10.4295 40.5159 10.9315 42.2714 11.9129C44.0269 12.8942 45.436 14.2635 46.4524 15.9979C47.4687 17.7324 48 19.6037 48 21.6577C48 23.666 47.5149 25.5373 46.5448 27.249C45.5746 28.9606 44.2348 30.3299 42.5486 31.3568C40.8624 32.3838 38.9913 32.9315 36.9817 33H11.0876C7.9923 32.8631 5.3821 31.6992 3.23388 29.5083C1.08566 27.3402 0 24.7158 0 21.6577Z"
        fill="url(#cloud_gradient)"
      />
      <Path
        d="M16 39H16.8532L31.9051 22.0019C32.102 21.7013 31.9926 21.551 31.5769 21.551H25.3636L31.9051 12.4508C32.102 12.1503 31.9488 12 31.4675 12H23.1321C22.8915 12 22.6946 12.1002 22.4977 12.3006L16.4157 24.6568C16.3719 24.9573 16.5032 25.1076 16.8314 25.1076H22.8477L16 39Z"
        fill="url(#lightning_gradient)"
      />
      <Defs>
        <RadialGradient
          id="cloud_gradient"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(28.8 2.0625) rotate(128.085) scale(48.9139 52.0411)"
        >
          <Stop stopColor="#CACEE3" />
          <Stop offset="0.177083" stopColor="#BCC1DB" />
          <Stop offset="0.34611" stopColor="#A4ABCB" />
          <Stop offset="0.885417" stopColor="#686B7B" />
        </RadialGradient>
        <LinearGradient
          id="lightning_gradient"
          x1="36.7838"
          y1="17.9612"
          x2="28.7862"
          y2="48.5241"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFA630" />
          <Stop offset="1" stopColor="#FCEEBB" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

ThunderstormIcon.defaultProps = {
  iconClass: "w-56 h-56",
};

export default ThunderstormIcon;
