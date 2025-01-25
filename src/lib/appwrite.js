import { Client, Databases, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("67950f370030c4a816a2");

export const account = new Account(client);
export const databases = new Databases(client);
