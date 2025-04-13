import CustomButton from "@/shared/components/custom-button";
import CustomInput from "@/shared/components/custom-inputs";
import { useSignUpHandler } from "@/shared/hook/use-auth";
import { Link } from "expo-router";
import React, { FC } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

const SignUp: FC<Props> = ({}) => {
  const {
    credential,
    setCredential,
    formStateError,
    isLoading,
    submitHandler,
  } = useSignUpHandler();
  return (
    <SafeAreaView className="bg-primary-950">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="px-4 pt-20  w-full h-full">
          <View className=" gap-8 ">
            <Text className="text-white text-3xl font-helvetica-bold">
              Register
            </Text>
            <View className="pb-10">
              <CustomInput
                title="User name"
                placeholder="Enter your user name"
                value={credential?.userName}
                onChangeText={(text) =>
                  setCredential((prev) => ({ ...prev, userName: text }))
                }
                error={formStateError?.userName?.[0]}
              />
              <CustomInput
                title="Email"
                placeholder="example@adress.com"
                value={credential?.email}
                onChangeText={(text) =>
                  setCredential((prev) => ({ ...prev, email: text }))
                }
                error={formStateError?.email?.[0]}
              />
              <CustomInput
                title="Password"
                placeholder="Enter your password"
                secureTextEntry
                value={credential?.password}
                onChangeText={(text) =>
                  setCredential((prev) => ({ ...prev, password: text }))
                }
                error={formStateError?.password?.[0]}
              />
              <CustomInput
                title="Confirm password"
                secureTextEntry
                placeholder="Confirm your password"
                value={credential?.confirmPassword}
                onChangeText={(text) =>
                  setCredential((prev) => ({ ...prev, confirmPassword: text }))
                }
                error={formStateError?.confirmPassword?.[0]}
              />
            </View>
            <View>
              <CustomButton
                title="Sign In"
                buttonStyle="mt-2"
                handlePress={submitHandler}
                isLoading={isLoading}
              />
              <View className="flex flex-row justify-end gap-2 py-2">
                <Text className="text-white/90">Already have an account?</Text>
                <Link
                  href={"/(auth)/sign-up"}
                  className="text-primary-100 underline  font-helvetica-bold"
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

export default SignUp;
