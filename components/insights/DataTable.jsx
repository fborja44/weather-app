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
import { parseUTC } from "../../utils/date";

const DataTable = ({ data }) => {
  const ICON_PROPS = { color: "rgb(148, 163, 184)", iconClass: "w-6 h-6" };
  return (
    <>
      <DataTableContainer>
        <DataItem
          col
          left
          label="Speed"
          value={`${data.wind.speed} mi/hr`}
          icon={<SpeedIcon {...ICON_PROPS} />}
        />
        <DataDivider />
        <DataItem
          col
          left
          right
          label="Gust"
          value={`${data.wind.gust || "0"} mph`}
          icon={<GustIcon {...ICON_PROPS} />}
        />
        <DataDivider />
        <DataItem
          col
          label="Direction"
          value={`${data.wind.deg}° ${convertDegreesToCardinal(data.wind.deg)}`}
          icon={<CompassIcon {...ICON_PROPS} />}
        />
      </DataTableContainer>
      <DataTableContainer>
        <DataItem
          left
          label="Visibility"
          value={`${(data.visibility / 1000).toFixed(1)} km`}
          icon={<VisibilityIcon {...ICON_PROPS} />}
        />
        <DataDivider />
        <DataItem
          label="Clouds"
          value={`${data.clouds.all}%`}
          icon={<CloudsIcon {...ICON_PROPS} />}
        />
      </DataTableContainer>
      <DataTableContainer>
        <DataItem
          left
          label="Sunrise"
          value={parseUTC(data.sys.sunrise)}
          icon={<SunriseIcon {...ICON_PROPS} />}
        />
        <DataDivider />
        <DataItem
          label="Sunset"
          value={parseUTC(data.sys.sunset)}
          icon={<SunsetIcon {...ICON_PROPS} />}
        />
      </DataTableContainer>
    </>
  );
};

export default DataTable;
