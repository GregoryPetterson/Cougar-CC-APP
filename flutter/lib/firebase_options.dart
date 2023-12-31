// File generated by FlutterFire CLI.
// ignore_for_file: lines_longer_than_80_chars, avoid_classes_with_only_static_members
import 'package:firebase_core/firebase_core.dart' show FirebaseOptions;
import 'package:flutter/foundation.dart'
    show defaultTargetPlatform, kIsWeb, TargetPlatform;

/// Default [FirebaseOptions] for use with your Firebase apps.
///
/// Example:
/// ```dart
// / import 'firebase_options.dart';
// / // ...

/// ```
class DefaultFirebaseOptions {
  static FirebaseOptions get currentPlatform {
    if (kIsWeb) {
      return web;
    }
    switch (defaultTargetPlatform) {
      case TargetPlatform.android:
        return android;
      case TargetPlatform.iOS:
        return ios;
      case TargetPlatform.macOS:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for macos - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      case TargetPlatform.windows:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for windows - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      case TargetPlatform.linux:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for linux - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      default:
        throw UnsupportedError(
          'DefaultFirebaseOptions are not supported for this platform.',
        );
    }
  }

  static const FirebaseOptions web = FirebaseOptions(
    apiKey: 'AIzaSyCWWbvCvPlf37E1IZ4daVEjZFwILHTeVUg',
    appId: '1:180064812645:web:e2121be1d06ac4c844108c',
    messagingSenderId: '180064812645',
    projectId: 'cougar-cc-app-ad761',
    authDomain: 'cougar-cc-app-ad761.firebaseapp.com',
    storageBucket: 'cougar-cc-app-ad761.appspot.com',
    measurementId: 'G-X4JFMXLMJG',
  );

  static const FirebaseOptions android = FirebaseOptions(
    apiKey: 'AIzaSyCLAiC1KSTyP1MjqfiCx_UAL3RTRP0Ohvw',
    appId: '1:180064812645:android:c9b1a22edee0c4a344108c',
    messagingSenderId: '180064812645',
    projectId: 'cougar-cc-app-ad761',
    storageBucket: 'cougar-cc-app-ad761.appspot.com',
  );

  static const FirebaseOptions ios = FirebaseOptions(
    apiKey: 'AIzaSyD7i9xM_QJvzAdVxUF7_i_yYflPUGuopTQ',
    appId: '1:180064812645:ios:762ba258ff2f848444108c',
    messagingSenderId: '180064812645',
    projectId: 'cougar-cc-app-ad761',
    storageBucket: 'cougar-cc-app-ad761.appspot.com',
    iosClientId:
        '180064812645-6fpm0ajeje313sd3de3ckjv6208qalg2.apps.googleusercontent.com',
    iosBundleId: 'io.cougar.cc.cougarcc',
  );
}
