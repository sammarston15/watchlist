import { Client, Account, OAuthProvider } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('67ee28460003d7798c6f');                 // Your project ID

const account = new Account(client);

const session = await account.getSession('current');

// Provider information
console.log(session.provider);
console.log(session.providerUid);
console.log('token: ', session.providerAccessToken);
console.log('expires: ', session.providerAccessTokenExpiry);
console.log('now: ', new Date().toUTCString());


// Go to OAuth provider login page
export const loginWithGoogle = async () => {
    account.createOAuth2Session(
        OAuthProvider.Google, // provider
        'http://localhost:5173', // redirect here on success
        'http://localhost:5173/login', // redirect here on failure
        [] // scopes (optional)
    );
}