import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";
import { Platform } from "react-native";

import { useI18n } from "@/hooks/useI18n";

export default function TabLayout() {
  const { t } = useI18n();

  return (
    <NativeTabs minimizeBehavior={Platform.OS === "ios" ? "onScrollDown" : undefined}>
      <NativeTabs.Trigger name="index">
        <Label>{t("tabs.home")}</Label>
        <Icon sf={{ default: "house", selected: "house.fill" }} />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="explore">
        <Label>{t("tabs.explore")}</Label>
        <Icon
          sf={{
            default: "magnifyingglass",
            selected: "magnifyingglass.circle.fill",
          }}
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile">
        <Label>{t("tabs.profile")}</Label>
        <Icon sf={{ default: "person.circle", selected: "person.circle.fill" }} />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
