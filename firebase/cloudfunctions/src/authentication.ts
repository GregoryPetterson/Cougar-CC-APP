import dotenv from 'dotenv';
import { onRequest } from 'firebase-functions/v2/https';
import axios from 'axios'; // Library for making HTTP requests.
import { getFirestore } from 'firebase-admin/firestore';
import admin = require('firebase-admin');
// import serviceAccount from './serviceAccountKey.json';

dotenv.config();

const firebaseConfig = {
  'type': process.env.FIRE_TYPE,
  'project_id': process.env.FIRE_PROJECT_ID,
  'private_key_id': process.env.FIRE_PRIVATE_ID,
  'private_key': process.env.FIRE_PRIVATE_KEY,
  'client_email': process.env.FIRE_CLIENT_EMAIL,
  'client_id': process.env.FIRE_CLIENT_ID,
  'auth_uri': process.env.FIRE_AUTH_URI,
  'token_uri': process.env.FIRE_TOKEN_URI,
  'auth_provider_x509_cert_url': process.env.FIRE_AUTH_PROVIDER_X509_CERT_URL,
  'client_x509_cert_url': process.env.FIRE_CLIENT_X509_CERT_URL,
  'universe_domain': process.env.FIRE_UNIVERSE_DOMAIN,
};

admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig as admin.ServiceAccount),
});


export const authentication = onRequest(async (req, res) => {
  try {
    // HTTP parameters including OAUTH variables
    const code = req.query.code;
    const clientId = process.env.STRAVA_CLIENT_ID;
    const clientSecret = process.env.STRAVA_CLIENT_SECRET;
    const redirectUrl = process.env.STRAVA_REDIRECT_URL;


    const response = await axios.post(
      `https://www.strava.com/api/v3/oauth/token?client_id=${clientId}&client_secret=${clientSecret}&code=${code}&grant_type=authorization_code`);
    // Set the status code to 301 (permanent redirect)
    // and then redirect back to our flutter web page.
    res.status(301);
    res.set('Location', redirectUrl);
    res.send();

    const firestore = getFirestore();
    const documentRef = firestore.collection('athletes')
      .doc(response.data.athlete.firstname);
    await documentRef.create(response.data);

  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});
