import React, { useState } from "react";

import { View } from "react-native";
import HomeIcon from "../../assets/icons/HomeIcon";
import SunIcon from "../../assets/icons/SunIcon";
import SettingsIcon from "../../assets/icons/SettingsIcon";

import FooterButton from "./FooterButton";

const Footer = () => {
  const [selectedTab, setSelectedTab] = useState("/");

  return (
    <View className="flex flex-row justify-between items-center bg-white h-[65] absolute bottom-0 left-0 right-0 px-12 border-t border-solid border-slate-200">
      <FooterButton
        href="/insights"
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        icon={
          <SunIcon
            filled
            color={`${selectedTab === "/insights" ? "#F17720" : "#CCCFE0"}`}
          />
        }
      />
      <FooterButton
        href="/"
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        icon={
          <HomeIcon
            filled
            color={`${selectedTab === "/" ? "#F17720" : "#CCCFE0"}`}
          />
        }
      />
      <FooterButton
        href="/settings"
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        icon={
          <SettingsIcon
            filled
            color={`${selectedTab === "/settings" ? "#F17720" : "#CCCFE0"}`}
          />
        }
      />
    </View>
  );
};

export default Footer;
