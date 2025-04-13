import { TRegister } from "@/shared/types/user";
import { Account, Avatars, Databases, ID } from "react-native-appwrite";
import { client } from "./init";

export const authConfig = () => {
  const account = new Account(client);
  const dataBases = new Databases(client);
  const avatars = new Avatars(client);

  const signupHandler = async (
    credential: Omit<TRegister, "confirmPassword">
  ) => {
    try {
      const createRes = await account.create(
        ID.unique(),
        credential.email,
        credential.password,
        credential.userName
      );
      if (!createRes) throw Error;
      const avatarUrl = avatars.getInitials(credential.userName);

      const newUser = dataBases.createDocument(
        process.env.EXPO_PUBLIC_APPWRITE_DB_ID!,
        process.env.EXPO_PUBLIC_APPWRITE_USER_COL_ID!,
        ID.unique(),
        {
          userName: credential.userName,
          email: credential.email,
          avatarUrl,
          accountId: createRes.$id,
        }
      );
      return newUser;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("An unknown error occurred");
      }
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
