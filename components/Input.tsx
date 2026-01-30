import { forwardRef } from "react";
import { Text, TextInput, type TextInputProps, View } from "react-native";

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  containerClassName?: string;
}

export const Input = forwardRef<TextInput, InputProps>(
  ({ label, error, containerClassName = "", className = "", ...props }, ref) => {
    const inputClassName = `rounded-xl border px-4 py-3 text-base ${
      error ? "border-red-500 dark:border-red-400" : "border-slate-300 dark:border-slate-600"
    } bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 ${className}`;

    return (
      <View className={`gap-1.5 ${containerClassName}`}>
        {label && (
          <Text className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</Text>
        )}
        <TextInput ref={ref} className={inputClassName} placeholderTextColor="#94a3b8" {...props} />
        {error && <Text className="text-sm text-red-500 dark:text-red-400">{error}</Text>}
      </View>
    );
  }
);

Input.displayName = "Input";
