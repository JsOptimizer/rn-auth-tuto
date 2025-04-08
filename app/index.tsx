import CustomInput from "@/shared/components/custom-inputs";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView>
      <ScrollView className="h-full">
        <CustomInput title="Name" placeholder="Enter your name" />
      </ScrollView>
    </SafeAreaView>
  );
}
