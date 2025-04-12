import { useState } from "react";
import { authConfig } from "../service/appwrite/config";
import { signInSchema, TFormStateError } from "../types/user";

export const useSignInHandler = () => {
  const { signinHandler, signOutHandler } = authConfig();
  const [inputs, setInputs] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const [formStateError, setFormStateError] = useState<TFormStateError>();
  const [isLoading, setIsLoading] = useState<boolean>(() => false);

  const submitHandler = async () => {
    setIsLoading(() => true);
    const validation = signInSchema.safeParse(inputs);
    if (!validation.success) {
      setFormStateError(() => validation.error.flatten().fieldErrors);
      return;
    }
    const { email, password } = inputs;
    await signinHandler({ email, password });
    setIsLoading(() => false);
  };

  return { inputs, setInputs, submitHandler, formStateError, isLoading };
};
