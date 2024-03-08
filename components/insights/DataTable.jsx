import React from "react";

import DataItem from "./DataItem";
import DataDivider from "./DataDivider";
import DataTableContainer from "./DataTableContainer";

import SpeedIcon from "../../assets/icons/stats/SpeedIcon";
import GustIcon from "../../assets/icons/stats/GustIcon";
import CompassIcon from "../../assets/icons/stats/CompassIcon";

import VisibilityIcon from "../../assets/icons/stats/VisibilityIcon";
import CloudsIcon from "../../assets/icons/stats/CloudsIcon";

import SunriseIcon from "../../assets/icons/stats/SunriseIcon";
import SunsetIcon from "../../assets/icons/stats/SunsetIcon";
import { convertDegreesToCardinal } from "../../utils/direction";
import { getCurrentHour, parseUnixTime, parseUnixTimeFull } from "../../utils/date";
import { useSelector } from "react-redux";

const DataTable = ({ data }) => {
  const ICON_PROPS = { color: "rgb(148, 163, 184)", iconClass: "w-6 h-6" };

  const preferences = useSelector((state) => state.preferencesState);
  const hour = getCurrentHour(data.timezone);

  return (
    <>
      <DataTableContainer>
        <DataItem
          col
          left
          label="Speed"
          value={`${data.current.wind_speed_10m} ${preferences.windspeed_unit}`}
          icon={<SpeedIcon {...ICON_PROPS} />}
        />
        <DataDivider />
        <DataItem
          col
          left
          right
          label="Gust"
          value={`${data.current.wind_gusts_10m || "0"} ${
            preferences.windspeed_unit
          }`}
          icon={<GustIcon {...ICON_PROPS} />}
        />
        <DataDivider />
        <DataItem
          col
          label="Direction"
          value={`${
            data.current.wind_direction_10m
          }° ${convertDegreesToCardinal(data.current.wind_direction_10m)}`}
          icon={<CompassIcon {...ICON_PROPS} />}
        />
      </DataTableContainer>
      <DataTableContainer>
        <DataItem
          left
          label="Visibility"
          value={`${(data.hourly.visibility[hour] / 1000).toFixed(0)} km`}
          icon={<VisibilityIcon {...ICON_PROPS} />}
        />
        <DataDivider />
        <DataItem
          label="Clouds"
          value={`${data.hourly.cloud_cover[hour]}%`}
          icon={<CloudsIcon {...ICON_PROPS} />}
        />
      </DataTableContainer>
      <DataTableContainer>
        <DataItem
          left
          label="Sunrise"
          value={parseUnixTimeFull(data.daily.sunrise[0])}
          icon={<SunriseIcon {...ICON_PROPS} />}
        />
        <DataDivider />
        <DataItem
          label="Sunset"
          value={parseUnixTimeFull(data.daily.sunset[0])}
          icon={<SunsetIcon {...ICON_PROPS} />}
        />
      </DataTableContainer>
    </>
  );
};

export default DataTable;
