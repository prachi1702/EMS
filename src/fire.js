import firebase from "firebase/app";
import "firebase/auth";

  var firebaseConfig = {
    apiKey: "AIzaSyAZLbONZr1nt-jv_xwFc-PcMkpsZQ-EVAs",
    authDomain: "react-auth-2d3ef.firebaseapp.com",
    projectId: "react-auth-2d3ef",
    storageBucket: "react-auth-2d3ef.appspot.com",
    messagingSenderId: "783303320228",
    appId: "1:783303320228:web:8c7c6443ef868bf19bfc31",
    measurementId: "G-LRGZRMGW3M"
  };
  // Initialize Firebase
  const fire=firebase.initializeApp(firebaseConfig);

  export default fire;
  