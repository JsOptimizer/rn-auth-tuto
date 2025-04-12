import onboardImage from "@/assets/images/onboard.png";
import CustomButton from "@/shared/components/custom-button";
import { useGetStart } from "@/shared/hook/use-get-start";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { getStartHandler } = useGetStart();
  return (
    <SafeAreaView className="bg-primary-950">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="flex px-4 items-center justify-center h-full w-full">
          <Image
            source={onboardImage}
            resizeMode="contain"
            className=" max-h-[250px] w-full max-w-[380px]"
          />
          <View className="gap-3">
            <Text className="text-white text-center font-helvetica-bold text-3xl">
              Secure Access, Simplified
            </Text>
            <Text className="text-white/80 text-justify text-sm font-helvetica ">
              Welcome to a seamless sign-in experience. With our modern
              authentication system powered by Appwrite, you can log in
              effortlessly and securely—so you can focus on what matters. Fast,
              safe, and built with the latest in mobile tech.
            </Text>
          </View>
          <CustomButton
            title="Get start"
            buttonStyle="w-full mt-20"
            handlePress={getStartHandler}
          />
        </View>
      </ScrollView>

      <StatusBar style="light" backgroundColor="#fff" />
    </SafeAreaView>
  );
}
