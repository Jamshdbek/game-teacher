import { Client, Account } from "appwrite";

const client = new Client();

client
    .setEndpoint("https://cloud.appwrite.io/v1") // Change if using self-hosted
    .setProject("67c7e33a002529ecba76"); // Replace with your Appwrite project ID

const account = new Account(client);

export { client, account };
