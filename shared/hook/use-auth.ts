import { useState } from "react";
import { signInSchema, TFormStateError } from "../types/user";

export const useSignInHandler = () => {
  const [inputs, setInputs] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const [formStateError, setFormStateError] = useState<TFormStateError>();

  const submitHandler = () => {
    const validation = signInSchema.safeParse(inputs);
    if (!validation.success) {
      setFormStateError(() => validation.error.flatten().fieldErrors);
      return;
    }
  };

  return { inputs, setInputs, submitHandler, formStateError };
};
