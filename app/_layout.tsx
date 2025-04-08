import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import "./global.css";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    helvetica: require("@/assets/fonts/helvetica/Helvetica.ttf"),
    ["helvetica-bold"]: require("@/assets/fonts/helvetica/Helvetica-Bold.ttf"),
  });
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);
  if (!loaded && !error) {
    return null;
  }
  return (
    <Stack>
      <Stack.Screen options={{ headerShown: false }} name="index" />
    </Stack>
  );
}
