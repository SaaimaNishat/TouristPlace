import firebase from 'firebase'
import 'firebase/storage'
require('dotenv/config')


export const app = firebase.initializeApp({
    "projectId": "travelista-60d21",
    "appId": "1:465154725251:web:d94ffdd6f8e4eb9b5152b6",
    "storageBucket": "travelista-60d21.appspot.com",
    "locationId": "us-central",
    "apiKey": "AIzaSyC2DPAn_Z5Wgj25cZLeP_-1dtpGXW61GKE",
    "authDomain": "travelista-60d21.firebaseapp.com",
    "messagingSenderId": "465154725251"
  });