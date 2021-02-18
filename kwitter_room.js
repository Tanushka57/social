// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBDWoYFYTcGSp2kRc0zX0CY5Ea-NMWgoro",
    authDomain: "whatsapp-fb67b.firebaseapp.com",
    databaseURL: "https://whatsapp-fb67b-default-rtdb.firebaseio.com",
    projectId: "whatsapp-fb67b",
    storageBucket: "whatsapp-fb67b.appspot.com",
    messagingSenderId: "479588079468",
    appId: "1:479588079468:web:1dd72a86a35a8f62430549",
    measurementId: "G-TTP2F238B1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
