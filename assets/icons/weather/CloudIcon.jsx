import Svg, { Path, Defs, RadialGradient, Stop } from "react-native-svg";

const CloudIcon = ({ iconClass }) => {
  return (
    <Svg
      viewBox="0 0 48 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={iconClass}
    >
      <Path
        d="M0 21.6577C0 19.0332 0.831569 16.7054 2.49471 14.6515C4.15784 12.5975 6.25987 11.2739 8.82387 10.7033C9.53994 7.57676 11.18 5.02075 13.6978 3.01245C16.2156 1.00415 19.1261 0 22.3831 0C25.5707 0 28.4119 0.981328 30.9066 2.92116C33.4013 4.861 35.0183 7.37137 35.7575 10.4295H36.5197C38.5987 10.4295 40.5159 10.9315 42.2714 11.9129C44.0269 12.8942 45.436 14.2635 46.4524 15.9979C47.4687 17.7324 48 19.6037 48 21.6577C48 23.666 47.5149 25.5373 46.5448 27.249C45.5746 28.9606 44.2348 30.3299 42.5486 31.3568C40.8624 32.3838 38.9913 32.9315 36.9817 33H11.0876C7.9923 32.8631 5.3821 31.6992 3.23388 29.5083C1.08566 27.3402 0 24.7158 0 21.6577Z"
        fill="url(#gradient)"
      />
      <Defs>
        <RadialGradient
          id="gradient"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(28.8 2.0625) rotate(128.085) scale(48.9139 52.0411)"
        >
          <Stop stopColor="#F2F3F9" />
          <Stop offset="0.34611" stopColor="#EAECF6" />
          <Stop offset="0.823755" stopColor="#C2C9EC" />
        </RadialGradient>
      </Defs>
    </Svg>
  );
};

CloudIcon.defaultProps = {
  iconClass: "w-56 h-56",
};

export default CloudIcon;
