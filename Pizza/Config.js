import { Platform } from 'react-native';

const CLIENT_ID = "LDmiiRsoJamMmWlcpbCMsA";
const APP_PACKAGE = 'com.lucamartinelli.pizza';
const APP_VERSION = 0.1;
const CONTACT_USERNAME = "martinelli_luca";

const USER_AGENT = Platform.OS + ":" + APP_PACKAGE + ":v" + APP_VERSION.toString() + " (by /u/" + CONTACT_USERNAME + ")";

export { CLIENT_ID, APP_PACKAGE, APP_VERSION, CONTACT_USERNAME, USER_AGENT }