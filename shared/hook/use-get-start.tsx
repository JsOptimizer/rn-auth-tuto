import { useRouter } from "expo-router";

export const useGetStart = () => {
  const router = useRouter();

  const getStartHandler = () => {
    router.push("/(aut)/sign-up");
  };

  return { getStartHandler };
};
