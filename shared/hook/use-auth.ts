import { useState } from "react";
import { authConfig } from "../service/appwrite/config";
import {
  registerSchema,
  signInSchema,
  TFormStateError,
  TRegister,
} from "../types/user";

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

export const useSignUpHandler = () => {
  const [credential, setCredential] = useState<TRegister>({
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(() => false);
  const [formStateError, setFormStateError] = useState<TFormStateError>();

  const submitHandler = async () => {
    try {
      setIsLoading((prev) => !prev);
      const credentialValidation = registerSchema.safeParse(credential);
      if (!credentialValidation.success) {
        setFormStateError(
          () => credentialValidation.error.flatten().fieldErrors
        );
        return;
      }
    } catch (error) {
    } finally {
      setIsLoading((prev) => !prev);
    }
  };

  return {
    isLoading,
    formStateError,
    submitHandler,
    credential,
    setCredential,
  };
};
