[![Build Status](https://travis-ci.org/CompassHB/mobile.svg?branch=master)](https://travis-ci.org/CompassHB/mobile)

# Get Started
Download the [Ionic View](http://view.ionic.io) app to your phone
On your system run 'npm install -g cordova ionic'
Make your changes and run 'ionic upload'
You can now preview the app on your phone before commiting changes

# Alternative Installation
* First install [Ionic](http://ionicframework.com/getting-started/) by running `npm install -g cordova ionic`
* Clone the project and run the following:
**  `ionic platform add ios
		 ionic build ios
	   ionic emulate ios`
* Run a second time replacing ios with android

# Misc. Notes
* (iOS) UIBackgroundModes: added to iOS -info.plist for background audio
* (iOS) AVFoundation: added to project frameworks