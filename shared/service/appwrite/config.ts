import { Account } from "react-native-appwrite";
import { client } from "./init";

export const authConfig = () => {
  const account = new Account(client);

  const signupHandler = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      const userId =
        crypto.getRandomValues(new Uint32Array(1))[0].toString(36) +
        Date.now().toString(36);
      const res = await account.create(userId, email, password);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const signinHandler = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      const session = await account.createEmailPasswordSession(email, password);
      return session;
    } catch (error) {
      throw error;
    }
  };

  const signoutHandler = async () => {
    try {
      const session = await account.deleteSession("current");
      console.log(session);
    } catch (error) {
      throw error;
    }
  };

  return { signinHandler, signupHandler, signOutHandler: signoutHandler };
};
