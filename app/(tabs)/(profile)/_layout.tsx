import { Stack } from "expo-router/stack";

import { useI18n } from "@/hooks/useI18n";

export default function ProfileLayout() {
  const { t } = useI18n();

  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: t("tabs.profile"), headerLargeTitle: true }} />
      <Stack.Screen name="edit-username" options={{ title: "Edit Username" }} />
    </Stack>
  );
}
