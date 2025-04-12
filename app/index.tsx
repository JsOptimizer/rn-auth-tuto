import CustomButton from "@/shared/components/custom-button";
import { StatusBar } from "expo-status-bar";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="bg-primary-950">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="flex px-4 items-center justify-center h-full w-full">
          <CustomButton title="Get start" buttonStyle="w-full mt-10" />
        </View>
      </ScrollView>

      <StatusBar style="light" backgroundColor="#fff" />
    </SafeAreaView>
  );
}
