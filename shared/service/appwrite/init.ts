import { Client } from "react-native-appwrite";

const DB_ID = process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID;
export const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!);
