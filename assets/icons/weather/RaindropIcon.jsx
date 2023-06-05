import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const RaindropIcon = ({ color, iconClass, chance }) => {
  return (
    <Svg
      viewBox="0 0 21 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={iconClass}
    >
      <Path
        d="M8.95861 3.40518L8.96595 3.39818L8.97314 3.39103L10.9696 1.40822C11.8638 2.2979 13.2951 3.74034 14.2099 4.76207C15.4559 6.15369 16.5336 7.44015 17.4436 8.60103C18.4272 9.98872 19.2746 11.5199 19.9838 13.1774C20.6915 14.8314 21 16.1681 21 17.2324C21 18.9555 20.5472 20.5457 19.6448 22.0602C18.7412 23.5562 17.5152 24.7645 15.9561 25.656C14.3951 26.5487 12.7306 27 10.9473 27C9.16511 27 7.5235 26.5493 5.98523 25.6587C4.44814 24.7688 3.23963 23.5602 2.3326 22.0578C1.43757 20.5752 1 18.9669 1 17.2324C1 16.0371 1.36392 14.5477 2.24772 12.7463L2.25171 12.7382L2.25555 12.73C3.11348 10.8981 4.13484 9.18692 5.29967 7.59594C6.46819 5.9999 7.69495 4.61033 8.95861 3.40518Z"
        stroke={color}
        strokeWidth="2"
        fill={chance > 0 ? "url(#rain_fill)" : null}
      />
      <Defs>
        <LinearGradient
          id="rain_fill"
          x1="10.5"
          y1="0"
          x2="10.5"
          y2="28"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={`${1 - chance / 100}`} stopOpacity="0" />
          <Stop offset={`${1 - (chance / 100 - 0.001)}`} stopColor={color} />
          <Stop offset="1" stopColor={color} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

RaindropIcon.defaultProps = {
  iconClass: "w-6 h-6",
  color: "#00A7E1",
  chance: 0,
};

export default RaindropIcon;
