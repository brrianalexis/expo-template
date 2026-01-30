import { View } from "react-native";

import { Typography } from "@/components";
import { useI18n } from "@/hooks/useI18n";

export default function ExploreScreen() {
  const { t } = useI18n();

  return (
    <View className="flex-1 items-center justify-center bg-white px-4 dark:bg-slate-900">
      <View className="mb-6 h-20 w-20 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
        <Typography variant="h1">🔍</Typography>
      </View>
      <Typography variant="h3" className="text-center">
        {t("screens.explore.title")}
      </Typography>
      <Typography
        variant="body"
        color="text-slate-500 dark:text-slate-400"
        className="mt-2 text-center"
      >
        {t("screens.explore.empty")}
      </Typography>
    </View>
  );
}
