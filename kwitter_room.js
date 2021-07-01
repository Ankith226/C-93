
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAalL-1YRvy9GFSxzFSTkj5eaPMOKFnqws",
      authDomain: "classtest-f4aeb.firebaseapp.com",
      projectId: "classtest-f4aeb",
      storageBucket: "classtest-f4aeb.appspot.com",
      messagingSenderId: "64395170821",
      appId: "1:64395170821:web:4f3e0a0d1723a84307786c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
