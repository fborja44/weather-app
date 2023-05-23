import { useRouter } from "expo-router";

import { TouchableOpacity } from "react-native";

const FooterButton = ({ icon, href, selectedTab, setSelectedTab }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      disabled={href === selectedTab}
      onPress={() => {
        setSelectedTab(href);
        router.push(href);
      }}
    >
      {icon}
    </TouchableOpacity>
  );
};

export default FooterButton;
