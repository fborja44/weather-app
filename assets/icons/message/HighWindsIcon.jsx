import Svg, { Path } from "react-native-svg";

const HighWindsIcon = ({ color, iconClass }) => {
  return (
    <Svg
      viewBox="0 0 53 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={iconClass}
    >
      <Path
        d="M0.749733 24.5239C0.749733 25.0134 0.913285 25.4416 1.25856 25.7883C1.54932 26.1757 1.93094 26.3592 2.40342 26.3592L29.0987 26.3592C29.6257 26.3592 30.0618 26.5632 30.4252 26.971C30.7887 27.3788 30.9704 27.8886 30.9704 28.48C30.9704 29.0714 30.7887 29.5608 30.4252 29.9483C30.0618 30.3357 29.6257 30.5396 29.0805 30.5396C28.5535 30.5396 28.0992 30.3357 27.7539 29.9483C27.4631 29.5812 27.0997 29.4181 26.6636 29.4181C26.2093 29.4181 25.8276 29.6016 25.5005 29.9483C25.1734 30.2949 25.0099 30.7232 25.0099 31.1922C25.0099 31.702 25.1734 32.1302 25.5187 32.4769C26.5364 33.5985 27.7357 34.1694 29.0805 34.1694C30.4979 34.1694 31.7155 33.6188 32.7331 32.5177C33.7508 31.4165 34.2415 30.091 34.2415 28.5004C34.2415 26.9098 33.7326 25.5639 32.715 24.422C31.6973 23.28 30.4798 22.709 29.0805 22.709L2.40342 22.709C1.94911 22.709 1.56749 22.8926 1.24039 23.2392C0.913284 23.5859 0.749733 24.0141 0.749733 24.5239ZM0.749733 17.8353C0.749733 18.3043 0.913285 18.7122 1.25856 19.0792C1.56749 19.4463 1.94911 19.6094 2.40342 19.6094L38.8209 19.6094C40.2383 19.6094 41.4559 19.0588 42.4735 17.9373C43.4912 16.8361 44 15.4902 44 13.92C44 12.3498 43.4912 10.9836 42.4735 9.86198C41.4559 8.74041 40.2383 8.16943 38.8209 8.16943C37.4216 8.16943 36.2404 8.72002 35.2773 9.80081C34.9502 10.1271 34.7866 10.5757 34.7866 11.1671C34.7866 11.6973 34.9502 12.1255 35.2591 12.4518C35.568 12.7781 35.9497 12.9412 36.404 12.9412C36.8401 12.9412 37.2217 12.7781 37.5488 12.4518C37.8941 12.0236 38.3121 11.8196 38.8209 11.8196C39.3479 11.8196 39.784 12.0236 40.1475 12.4314C40.5109 12.8392 40.6926 13.3287 40.6926 13.92C40.6926 14.5114 40.5109 15.0008 40.1475 15.3883C39.784 15.7757 39.3479 15.9796 38.8209 15.9796L2.40342 15.9796C1.94911 15.9796 1.56749 16.1632 1.24039 16.5098C0.913284 16.8973 0.749733 17.3255 0.749733 17.8353Z"
        fill={color}
      />
      <Path
        d="M50.6181 0.27212L50.2201 0.231442C49.1212 0.119126 48.1394 0.918867 48.0271 2.01771L47.3153 8.98153C47.203 10.0804 48.0027 11.0622 49.1016 11.1745L49.4995 11.2152C50.5984 11.3275 51.5802 10.5278 51.6925 9.42893L52.4043 2.46512C52.5166 1.36627 51.7169 0.384436 50.6181 0.27212Z"
        fill={color}
      />
      <Path
        d="M49.2759 13.4037L48.8779 13.363C47.779 13.2507 46.7972 14.0505 46.6849 15.1493L46.6442 15.5473C46.5319 16.6461 47.3316 17.628 48.4305 17.7403L48.8284 17.7809C49.9273 17.8933 50.9091 17.0935 51.0214 15.9947L51.0621 15.5967C51.1744 14.4979 50.3747 13.516 49.2759 13.4037Z"
        fill={color}
      />
    </Svg>
  );
};

HighWindsIcon.defaultProps = {
  color: "black",
  iconClass: "w-6 h-6",
};

export default HighWindsIcon;