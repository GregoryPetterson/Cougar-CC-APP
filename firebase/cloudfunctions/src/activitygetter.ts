// import dotenv from 'dotenv'; dotenv.config();
// import { onRequest } from 'firebase-functions/v2/https';
// import axios from 'axios'; // Library for making HTTP requests.
// import { getFirestore } from 'firebase-admin/firestore';
// import admin = require('firebase-admin');
// import serviceAccount from './serviceAccountKey.json';

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
// });

// export const authentication = onRequest(async (req, res) => {
//   try {
//     // HTTP parameters including OAUTH variables.
//     const code = req.query.code;
//     const clientId = process.env.CLIENT_ID;
//     const clientSecret = process.env.CLIENT_SECRET;
//     const redirectUrl = process.env.REDIRECT_URL;


//     const response = await axios.post(
//       `https://www.strava.com/api/v3/oauth/token?client_id=${clientId}&client_secret=${clientSecret}&code=${code}&grant_type=authorization_code`);
//     // Set the status code to 301 (permanent redirect)
//     // and then redirect back to our flutter web page.
//     res.status(301);
//     res.set('Location', redirectUrl);
//     res.send();

//     const firestore = getFirestore();
//     const documentRef = firestore.collection('athletes')
//       .doc(response.data.athlete.firstname);
//     await documentRef.create(response.data);

//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });
