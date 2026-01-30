import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Alert, ScrollView, View } from "react-native";
import { z } from "zod/v4";

import { Button, Input, Typography } from "@/components";
import { useAuthStore } from "@/stores";

const usernameSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be 20 characters or less")
    .regex(/^[a-zA-Z0-9_]+$/, "Only letters, numbers, and underscores allowed"),
});

type UsernameFormData = z.infer<typeof usernameSchema>;

export default function EditUsernameScreen() {
  const { user, login } = useAuthStore();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UsernameFormData>({
    resolver: zodResolver(usernameSchema),
    defaultValues: {
      username: user?.name ?? "",
    },
  });

  const onSubmit = (data: UsernameFormData) => {
    login({
      id: user?.id ?? "1",
      email: user?.email ?? "user@example.com",
      name: data.username,
    });

    Alert.alert("Success", "Username updated successfully", [
      { text: "OK", onPress: () => router.back() },
    ]);
  };

  return (
    <ScrollView
      className="flex-1 bg-white dark:bg-slate-900"
      contentContainerClassName="px-4 py-6"
      contentInsetAdjustmentBehavior="automatic"
      keyboardShouldPersistTaps="handled"
    >
      <Typography variant="body" color="text-slate-500 dark:text-slate-400" className="mb-6">
        Choose a unique username. This will be visible to other users.
      </Typography>

      <View className="gap-4">
        <Controller
          control={control}
          name="username"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Username"
              placeholder="john_doe"
              autoCapitalize="none"
              autoCorrect={false}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors.username?.message}
            />
          )}
        />

        <View className="mt-4 gap-3">
          <Button onPress={handleSubmit(onSubmit)} disabled={isSubmitting}>
            {isSubmitting ? "Saving..." : "Save"}
          </Button>
          <Button variant="ghost" onPress={() => router.back()}>
            Cancel
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}
