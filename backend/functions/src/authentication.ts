import { logger } from 'firebase-functions';
import { onRequest } from 'firebase-functions/v2/https';
import { initializeApp } from 'firebase-admin/app';
import axios from 'axios';
// import { getFirestore } from "firebase-admin/firestore";
// import { onDocumentCreated } from "firebase-functions/v2/firestore";

initializeApp();

// Take the text parameter passed to this HTTP endpoint and insert it into
// Firestore under the path /messages/:documentId/original
export const authentication = onRequest(async (req, res) => {
  // Grab the text parameter.
  const code = req.query.code;
  const clientId = '107985';
  const clientSecret = 'c4c01aacf9ba47f82824cf8283bc539a6ec27fce';
  const redirectUrl ='http://localhost:8000';


  const response = await axios.post(`https://www.strava.com/api/v3/oauth/token?client_id=${clientId}&client_secret=${clientSecret}&code=${code}&grant_type=authorization_code`);
  logger.log(response.data);

  // Set the status code to 301 (permanent redirect)
  res.status(301);

  // Set the Location header to the redirect URL
  res.set('Location', redirectUrl);

  // Send an empty response body or a custom message if desired
  res.send();
  // // Push the new message into Firestore using the Firebase Admin SDK.
  // const writeResult = await getFirestore()
  //   .collection("messages")
  //   .add({ original: original });
  // // Send back a message that we've successfully written the message
  // res.json({ result: `Message with ID: ${writeResult.id} added.` });
});
