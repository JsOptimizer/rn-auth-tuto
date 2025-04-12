import CustomButton from "@/shared/components/custom-button";
import CustomInput from "@/shared/components/custom-inputs";
import { Link } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  return (
    <SafeAreaView className="bg-primary-950">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="px-4 pt-20  w-full h-full">
          {/* <Image
            source={signInImage}
            resizeMode="contain"
            className="w-full max-w-[380px] h-[250px]"
          /> */}
          <View className=" gap-8">
            <Text className="text-white text-3xl font-helvetica-bold">
              Sign In
            </Text>
            <View>
              <CustomInput title="Email" />
              <CustomInput title="Password" secureTextEntry />
            </View>
            <View>
              <CustomButton title="Sign In" buttonStyle="mt-2" />
              <View>
                <Text>Don't have an account ?</Text>
                <Link href={"/(auth)/sign-up"}>Sign up</Link>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
