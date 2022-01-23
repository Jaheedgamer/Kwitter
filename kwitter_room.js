
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyBBrsvM14EcQ5mTcI7F2tBmOa7xOjEMuKs",
      authDomain: "kwitter-8b72f.firebaseapp.com",
      databaseURL: "https://kwitter-8b72f-default-rtdb.firebaseio.com",
      projectId: "kwitter-8b72f",
      storageBucket: "kwitter-8b72f.appspot.com",
      messagingSenderId: "117710517085",
      appId: "1:117710517085:web:23f9330b23bd377257aeb4"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
