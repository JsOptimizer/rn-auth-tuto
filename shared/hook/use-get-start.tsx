import { useRouter } from "expo-router";

export const useGetStart = () => {
  const router = useRouter();

  const getStartHandler = () => {
    router.push("/(auth)/sign-in");
  };

  return { getStartHandler };
};
