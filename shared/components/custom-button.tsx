import React, { FC } from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

type Props = {
  title: string;
  handlePress?: () => void;
  isLoading?: boolean;
  buttonStyle?: string;
  textStyle?: string;
};

const CustomButton: FC<Props> = ({
  title,
  handlePress,
  buttonStyle,
  textStyle,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading}
      className={`bg-primary-400 flex flex-row items-center px-8 py-5 justify-center rounded-xl ${buttonStyle} `}
    >
      <Text className={` text-white font-helvetica-bold text-lg ${textStyle} `}>
        {title}
      </Text>
      {isLoading && (
        <ActivityIndicator
          color={"#fff"}
          size={"small"}
          className="ml-2"
          animating={isLoading}
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
