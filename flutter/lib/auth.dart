import 'package:url_launcher/url_launcher.dart';

const scope = 'activity:write';
const clientId = '107985';
const redirectUrl =
    'http://127.0.0.1:5001/cougar-cc-app-ad761/us-central1/authentication';

final authorizationUrl = Uri.parse(
    'http://www.strava.com/oauth/authorize?client_id=107985&response_type=code&redirect_uri=$redirectUrl&approval_prompt=force&scope=$scope');

// Remember the authorization call back domain on the Strava API settings.
authenticate() {
  launchUrl(authorizationUrl, webOnlyWindowName: '_self');
}
