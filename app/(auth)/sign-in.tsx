import CustomButton from "@/shared/components/custom-button";
import CustomInput from "@/shared/components/custom-inputs";
import { useSignInHandler } from "@/shared/hook/use-auth";
import { Link } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  const { inputs, setInputs, submitHandler, formStateError } =
    useSignInHandler();
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
              <CustomInput
                title="Email"
                onChangeText={(text) =>
                  setInputs((prev) => ({ ...prev, email: text }))
                }
                value={inputs.email}
                placeholder="example@address.com"
                error={formStateError?.email?.[0]}
              />
              <CustomInput
                title="Password"
                value={inputs.password}
                secureTextEntry
                onChangeText={(text) =>
                  setInputs((prev) => ({ ...prev, password: text }))
                }
                placeholder="Enter your password"
                error={formStateError?.password?.[0]}
              />
            </View>
            <View>
              <CustomButton
                handlePress={submitHandler}
                title="Sign In"
                buttonStyle="mt-2"
              />
              <View className="flex flex-row justify-end gap-2 py-2">
                <Text className="text-white">Don't have an account ?</Text>
                <Link
                  href={"/(auth)/sign-up"}
                  className="text-primary-100 underline"
                >
                  Sign up
                </Link>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
