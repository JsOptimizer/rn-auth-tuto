import { Stack } from "expo-router";
import React from "react";

type Props = {};

const AuthLayout = (props: Props) => {
  return (
    <Stack>
      <Stack.Screen name="sign-up" options={{ headerShown: false }} />
      <Stack.Screen name="sign-in" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AuthLayout;
