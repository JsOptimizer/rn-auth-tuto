import React, { FC, useState } from "react";
import { Text, TextInput, View } from "react-native";

type Props = {
  title: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  error?: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
};

const CustomInput: FC<Props> = ({
  title,
  placeholder,
  value,
  onChangeText,
  error,
  secureTextEntry = false,
  keyboardType = "default",
  autoCapitalize = "none",
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  // Determine border color based on focus and error states
  const getBorderColor = () => {
    if (error) return "border-red-500";
    if (isFocused) return "border-blue-500";
    return "border-black-200";
  };

  return (
    <View className="gap-2 p-2">
      <Text className="text-base font-medium">{title}</Text>

      <View>
        <View
          className={`w-full h-16 px-4 bg-neutral-100 rounded-2xl border-2 ${getBorderColor()} flex flex-row items-center`}
        >
          <TextInput
            className="flex-1 text-base"
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            onFocus={handleFocus}
            onBlur={handleBlur}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize}
          />
        </View>

        {error && <Text className="text-red-500 text-sm mt-1">{error}</Text>}
      </View>
    </View>
  );
};

export default CustomInput;
