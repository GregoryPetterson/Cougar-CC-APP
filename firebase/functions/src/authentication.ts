import { logger } from 'firebase-functions';
import { onRequest } from 'firebase-functions/v2/https';
import axios from 'axios'; // Library for making HTTP requests.
import { getFirestore } from 'firebase-admin/firestore';
import admin = require('firebase-admin');
import * as dotenv from 'dotenv';
dotenv.config();

import serviceAccount from '../';


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const authentication = onRequest(async (req, res) => {
  try {
    // HTTP parameters including OAUTH variables.
    const code = req.query.code;
    const clientId = process.env.CLIENT_ID;
    const clientSecret = process.env.CLIENT_SECRET;
    const redirectUrl = process.env.REDIRECT_URL;


    const response = await axios.post(
      `https://www.strava.com/api/v3/oauth/token?client_id=${clientId}&client_secret=${clientSecret}&code=${code}&grant_type=authorization_code`);
    logger.log(response.data);

    // Set the status code to 301 (permanent redirect)
    // and then redirect back to our flutter web page.
    res.status(301);
    res.set('Location', redirectUrl);

    const firestore = getFirestore();

    const athleteInfor = collection(firestore, '');
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});
