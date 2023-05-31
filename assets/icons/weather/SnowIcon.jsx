import Svg, { Path, Defs, RadialGradient, Stop } from "react-native-svg";

const SnowIcon = ({ iconClass }) => {
  return (
    <Svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={iconClass}
    >
      <Path
        d="M0 16.0318C0 15.6289 0.148639 15.2684 0.424684 14.9715C0.700729 14.6746 1.04048 14.5262 1.44393 14.5262C1.84738 14.5262 2.20836 14.6746 2.48441 14.9715C2.76045 15.2684 2.90909 15.6077 2.90909 16.0318C2.90909 16.4347 2.76045 16.774 2.48441 17.0497C2.20836 17.3254 1.84738 17.4738 1.46516 17.4738C1.08295 17.4738 0.721964 17.3254 0.445919 17.0497C0.127405 16.7528 0 16.4135 0 16.0318ZM4.20438 16.0318C4.20438 15.6289 4.35302 15.2684 4.62906 14.9715C4.90511 14.6746 5.24486 14.5262 5.64831 14.5262H12.507L7.66556 9.69119C7.36828 9.43671 7.21964 9.09742 7.21964 8.6945C7.21964 8.29158 7.36828 7.95229 7.66556 7.6554C7.96284 7.35852 8.30259 7.21007 8.70604 7.21007C9.10949 7.21007 9.44924 7.35852 9.74652 7.6554L14.5667 12.4692V5.66203C14.5667 5.25911 14.7153 4.89861 15.0126 4.60172C15.3099 4.30484 15.6496 4.1564 16.0743 4.1564C16.4778 4.1564 16.8175 4.30484 17.0936 4.60172C17.3696 4.89861 17.5182 5.23791 17.5182 5.66203V12.5116L22.3809 7.63419C22.6782 7.33731 23.0179 7.18887 23.4001 7.18887C23.7823 7.18887 24.1433 7.33731 24.4406 7.63419C24.6954 7.93108 24.8228 8.27038 24.8228 8.67329C24.8228 9.07621 24.6954 9.41551 24.4406 9.66998L19.5992 14.505H26.4579C26.8401 14.505 27.1798 14.6534 27.4559 14.9503C27.7319 15.2472 27.8806 15.5865 27.8806 16.0106C27.8806 16.3923 27.7319 16.7316 27.4559 17.0073C27.1798 17.283 26.8401 17.4314 26.4579 17.4314H19.5992L24.4618 22.2876C24.7167 22.5421 24.8441 22.8814 24.8441 23.2843C24.8441 23.6872 24.7167 24.0265 24.4618 24.3234C24.1646 24.6203 23.8036 24.7687 23.4214 24.7687C23.0391 24.7687 22.6782 24.6203 22.4021 24.3234L17.5395 19.446V26.3168C17.5395 26.7197 17.3908 27.0802 17.1148 27.3559C16.8388 27.6315 16.499 27.78 16.0956 27.78C15.6921 27.78 15.3311 27.6315 15.0338 27.3559C14.7366 27.0802 14.5879 26.7197 14.5879 26.3168V19.4884L9.76775 24.3022C9.47047 24.5991 9.13072 24.7475 8.72727 24.7475C8.32382 24.7475 7.98407 24.5991 7.68679 24.3022C7.38951 24.0053 7.24087 23.666 7.24087 23.2631C7.24087 22.8602 7.38951 22.5421 7.68679 22.2664L12.5707 17.4102H5.69078C5.28733 17.4102 4.94758 17.2618 4.67153 16.9861C4.33178 16.7528 4.20438 16.4135 4.20438 16.0318ZM4.22561 26.2956C4.22561 25.9139 4.37425 25.5533 4.67153 25.2777C4.92634 24.9808 5.26609 24.8323 5.66954 24.8323C6.07299 24.8323 6.41274 24.9808 6.71002 25.2777C7.0073 25.5746 7.15594 25.9139 7.15594 26.2956C7.15594 26.6773 7.0073 27.0378 6.71002 27.3135C6.41274 27.6103 6.07299 27.7588 5.66954 27.7588C5.26609 27.7588 4.92634 27.6103 4.67153 27.3135C4.37425 27.0378 4.22561 26.6985 4.22561 26.2956ZM4.22561 5.70444C4.22561 5.32273 4.37425 4.96223 4.67153 4.68655C4.92634 4.38966 5.26609 4.24122 5.66954 4.24122C6.07299 4.24122 6.41274 4.38966 6.71002 4.68655C7.0073 4.98343 7.15594 5.32273 7.15594 5.70444C7.15594 6.08615 7.0073 6.44665 6.71002 6.74354C6.41274 7.04042 6.07299 7.18887 5.66954 7.18887C5.26609 7.18887 4.92634 7.04042 4.67153 6.74354C4.37425 6.44665 4.22561 6.08615 4.22561 5.70444ZM14.5242 30.5368C14.5242 30.1551 14.6729 29.8158 14.9701 29.5401C15.2674 29.2644 15.6072 29.116 16.0319 29.116C16.4353 29.116 16.775 29.2644 17.0511 29.5401C17.3271 29.8158 17.4758 30.1551 17.4758 30.5368C17.4758 30.9397 17.3271 31.3002 17.0511 31.5759C16.775 31.8516 16.4353 32 16.0319 32C15.6284 32 15.2674 31.8516 14.9701 31.5759C14.6729 31.3002 14.5242 30.9609 14.5242 30.5368ZM14.5242 1.46322C14.5242 1.06031 14.6729 0.699802 14.9701 0.424123C15.2674 0.148443 15.6072 0 16.0319 0C16.4353 0 16.775 0.148443 17.0511 0.424123C17.3271 0.699802 17.4758 1.06031 17.4758 1.46322C17.4758 1.84493 17.3271 2.18423 17.0511 2.45991C16.775 2.73559 16.4353 2.88403 16.0319 2.88403C15.6284 2.88403 15.2674 2.73559 14.9701 2.45991C14.6729 2.18423 14.5242 1.84493 14.5242 1.46322ZM24.8653 26.2956C24.8653 25.9139 25.0139 25.5533 25.3112 25.2777C25.566 24.9808 25.9058 24.8323 26.3092 24.8323C26.7127 24.8323 27.0524 24.9808 27.3497 25.2777C27.647 25.5746 27.7956 25.9139 27.7956 26.2956C27.7956 26.6773 27.647 27.0378 27.3497 27.3135C27.0524 27.6103 26.7127 27.7588 26.3092 27.7588C25.9058 27.7588 25.566 27.6103 25.3112 27.3135C25.0139 27.0378 24.8653 26.6985 24.8653 26.2956ZM24.8653 5.70444C24.8653 5.32273 25.0139 4.96223 25.3112 4.68655C25.566 4.38966 25.9058 4.24122 26.3092 4.24122C26.7127 4.24122 27.0524 4.38966 27.3497 4.68655C27.647 4.98343 27.7956 5.32273 27.7956 5.70444C27.7956 6.08615 27.647 6.44665 27.3497 6.74354C27.0524 7.04042 26.7127 7.18887 26.3092 7.18887C25.9058 7.18887 25.566 7.04042 25.3112 6.74354C25.0139 6.44665 24.8653 6.08615 24.8653 5.70444ZM29.1121 16.0318C29.1121 15.6289 29.2608 15.2684 29.5368 14.9715C29.8129 14.6746 30.1739 14.5262 30.5773 14.5262C30.9595 14.5262 31.2993 14.6746 31.5753 14.9715C31.8514 15.2684 32 15.6077 32 16.0318C32 16.4135 31.8514 16.7528 31.5753 17.0285C31.2993 17.3042 30.9595 17.4526 30.5773 17.4526C30.1739 17.4526 29.8129 17.3042 29.5368 17.0285C29.2608 16.7528 29.1121 16.4135 29.1121 16.0318Z"
        fill="url(#paint0_radial_111_211)"
      />
      <Defs>
        <RadialGradient
          id="paint0_radial_111_211"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(24 0.500001) rotate(120.141) scale(53.7703)"
        >
          <Stop stopColor="#F5FCFF" />
          <Stop offset="0.119792" stopColor="#A6DFFF" />
          <Stop offset="0.411458" stopColor="#69BCFF" />
          <Stop offset="0.804144" stopColor="#8886FF" />
        </RadialGradient>
      </Defs>
    </Svg>
  );
};

SnowIcon.defaultProps = {
  iconClass: "w-5 h-5",
};

export default SnowIcon;
