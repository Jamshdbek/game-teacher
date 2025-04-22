// src/appwriteConfig.ts or .js
import { Client, Account, Databases } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1') // Use your endpoint
  .setProject('67c7e33a002529ecba76');              // Use your project ID

const account = new Account(client);
const databases = new Databases(client); // ✅ This is required

export { client, account, databases }; 